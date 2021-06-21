import s from "./Post.module.css"
import post_image from "../../../img/post1.jpg"
import heart from "../../../img/heart.svg"
import comment from "../../../img/comment.svg"


const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.post__image_and_likes}>
        <div className={s.post__image_box}>
          <img src={post_image} alt=""/>
        </div>
        <div className={s.post__image_likes_box}>
          <div className={s.post__image_likes}>
            <img src={heart} alt=""/>
            <div>{props.likes}</div>
          </div>
          <div className={s.post__image_comment}>
            <img src={comment} alt=""/>
            <div>{props.comments}</div>
          </div>
        </div>
      </div>
      <div className={s.post__text_box}>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default Post