import {
  addNewPost, getProfile, getStatus, setStatus,
  setUserProfile,updateStatus,
} from "../../redux/profile-reducer"
import {connect} from "react-redux"
import {Component} from "react"
import Profile from "./Profile"
import Posts from "../Posts/Posts"
import Preloader from "../Preloader/preloader"
import {withRouter} from 'react-router-dom'
import {compose} from "redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import Status from "./Status/Status"


const ProfileContainer = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return <div>
    <Profile profile={props.profile}/>
    <Status status={props.status} updateStatus={props.updateStatus}/>
    <Posts posts={props.posts}
           addNewPost={props.addNewPost}
           profile={props.profile}/>

  </div>
}



class MyProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return <ProfileContainer {...this.props}/>
  }
}


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {addNewPost,
    setUserProfile, setStatus, updateStatus, getProfile, getStatus}),
  withRouter
)(MyProfileContainer)