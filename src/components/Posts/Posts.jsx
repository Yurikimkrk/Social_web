import s from "./Posts.module.css"
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form"
import {required} from "../../validators/validators"
import {Textarea} from "../FormControls/FormControls"
import def_ava from "../../img/def-ava.jpg"

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.posts__writenew_wrapper}>
      <div className={s.posts__writenew}>
        <div className={s.posts__avatar}>
          <img src={props.profile.photos.small ?
            props.profile.photos.small : def_ava} alt=""/>
        </div>
        <Field className={s.posts__whats_new} rows='2' placeholder='Что у вас нового?'
               name='postInput' component={Textarea} validate={[required]}/>
        <button>Опубликовать</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({form: 'postInput'})(PostForm)

const Posts = (props) => {

  let postsElements = props.posts
    .map(p => <Post text={p.text} likes={p.likes} comments={p.comments} key={p.id}/>)


  let addNewPost = (values) => {
    props.addNewPost(values.postInput)
  }


  return (
    <div className={s.posts}>
      <PostReduxForm onSubmit={addNewPost} profile={props.profile}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default Posts