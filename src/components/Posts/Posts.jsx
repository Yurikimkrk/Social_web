import s from "./Posts.module.css"
import def_ava from "../../img/default_small.jpeg"
import Post from "./Post/Post"
import {createRef} from "react"
import Preloader from "../Preloader/preloader"


const Posts = (props) => {
  let postsElements = props.posts
    .map(p => <Post text={p.text} likes={p.likes} comments={p.comments} key={p.id}/>)

  let newElement = createRef()

  let onAddNewPost = () => {
    props.addNewPost()
  }

  let onPostChange = () => {
    props.updatePostText(newElement.current.value)
  }

  return (
    <div className={s.posts}>
      <div className={s.posts__write_new}>
        <div className={s.posts__avatar}>
          {(props.profile) ? <img src={props.profile.photos.small ?
            props.user.photos.small : def_ava} alt=""/> : <Preloader/>}
        </div>
        <textarea ref={newElement} className={s.posts__whats_new} rows='2'
                  placeholder='Что у вас нового?' value={props.postTexts}
                  onChange={onPostChange}>
        </textarea>
        <button onClick={onAddNewPost}>Опубликовать</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>

    </div>
  )
}

export default Posts