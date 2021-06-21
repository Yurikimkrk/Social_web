import s from "./Users.module.css"
import friend from "../../img/friend.jpg"
import axios from "axios"
import {Component} from "react"


class Users extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }

    return <div>
      <div className={s.pagination}>
        <div className={s.pagination__content}>
          {pages.map(p => <button key={p} className={this.props.currentPage === p ? s.selected : undefined}
          onClick={(e) => {this.onPageChanged(p)}}>{p}</button>)}
        </div>
      </div>
      {this.props.users.map(u =>
        <div className={s.users__block} key={u.id}>
          <div className={s.user}>
            <div className={s.users__avatar}>
              <img src={u.photos.small != null ? u.photos.small : friend} alt=""/>
            </div>
            <div className={s.users__fullname}>{u.name}</div>
            {/*<div className={s.users__location}>*/}
            {/*  <div>{u.location.country} </div>*/}
            {/*  <div className={s.users__location_city}>{u.location.city} </div>*/}
            {/*</div>*/}
            <div className={s.button__block}>
              {u.followed ?
                <button onClick={() => {
                  this.props.unfollow(u.id)
                }}>Убрать из друзей</button> :
                <button onClick={() => {
                  this.props.follow(u.id)
                }}>Добавить в друзья</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  }
}


//
//
// }

export default Users