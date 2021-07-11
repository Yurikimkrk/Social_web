import s from "./Paginator.module.css"


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged,...props}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  return <div>
    <div className={s.pagination}>
      <div className={s.pagination__content}>
        {pages.map(p => <button key={p} className={currentPage === p ? s.selected : undefined}
                                onClick={(e) => {
                                  onPageChanged(p)
                                }}>{p}</button>)}
      </div>
    </div>
  </div>
}


export default Paginator