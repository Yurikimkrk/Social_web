import s from "./Users.module.css"
import friend from "../../img/friend.jpg"
import {NavLink} from "react-router-dom"
import Pagination from "react-js-pagination"


let Users = (props) => {

  return <div>
    <div className={s.paginator}>
      <Pagination onChange={props.onPageChanged}
                  totalItemsCount={props.totalUsersCount}
                  activePage={props.currentPage}
                  itemsCountPerPage={props.pageSize}
                  pageRangeDisplayed={5}/>
    </div>
    {props.users.map(u =>
      <div className={s.users__block} key={u.id}>
        <div className={s.user}>
          <div className={s.users__avatar}>
            <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : friend}
                                                  alt=""/></NavLink>
          </div>
          <div className={s.users__fullname}>{u.name}</div>
          {/*<div className={s.users__location}>*/}
          {/*  <div>{u.location.country} </div>*/}
          {/*  <div className={s.users__location_city}>{u.location.city} </div>*/}
          {/*</div>*/}
          <div className={s.button__block}>
            {u.followed ?
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                      onClick={() => {
                        props.unfollow(u.id)
                      }}>Отписка</button> :
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                      onClick={() => {
                        props.follow(u.id)
                      }}>Подписаться</button>}
          </div>
        </div>
      </div>
    )}
  </div>
}


export default Users