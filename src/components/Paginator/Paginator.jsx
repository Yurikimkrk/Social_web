import s from "./Paginator.module.css"


let Paginator = (props) => {
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
  </div>
}


export default Paginator