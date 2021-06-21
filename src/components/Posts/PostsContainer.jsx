import {addPostAC, updatePostTextAC} from "../../redux/posts-reducer"
import Posts from "./Posts"
import {connect} from "react-redux"


let mapStateToProps = (state) => {
  return {
    posts: state.postsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text) => {
      dispatch(updatePostTextAC(text))
    },
    addNewPost: () => {
      dispatch(addPostAC())
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer