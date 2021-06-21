import s from "./Posts.module.css"
import total from "../../img/total.jpg"
import Post from "./Post/Post"
import {createRef} from "react"



const Posts = (props) => {
  debugger
  let postsElements = props.posts.posts
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
          <img src={total} alt=""/>
        </div>
        <textarea ref={newElement} className={s.posts__whats_new} rows='2'
                  placeholder='Что у вас нового?' value={props.posts.postTexts}
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