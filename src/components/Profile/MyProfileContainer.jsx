import {
  addNewPost, getProfile, getStatus, savePhoto, setStatus,
  setUserProfile, saveProfileData, updateStatus
} from "../../redux/profile-reducer"
import {connect} from "react-redux"
import {Component} from "react"
import Profile from "./Profile"
import Posts from "../Posts/Posts"
import Preloader from "../Preloader/preloader"
import {withRouter} from 'react-router-dom'
import {compose} from "redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import StatusHooks from "./Status/StatusHooks"


const ProfileContainer = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return <div>
    <Profile profile={props.profile} isOwner={props.isOwner}
             savePhoto={props.savePhoto} saveProfileData={props.saveProfileData}/>
    <StatusHooks status={props.status} updateStatus={props.updateStatus}/>
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    let userId = this.props.match.params.userId
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return <ProfileContainer {...this.props} isOwner={(+this.props.match.params.userId === this.props.authId)}/>
  }
}


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authId: state.auth.id
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {addNewPost, saveProfileData,
    setUserProfile, setStatus, updateStatus, getProfile, getStatus, savePhoto}),
  withRouter
)(MyProfileContainer)