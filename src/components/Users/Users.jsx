import s from "./Users.module.css"
import friend from "../../img/friend.jpg"
import {NavLink} from "react-router-dom"


let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return <div>
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        {pages.map(p => <button key={p} className={props.currentPage === p ? s.selected : undefined}
                                onClick={(e) => {
                                  props.onPageChanged(p)
                                }}>{p}</button>)}
      </div>
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