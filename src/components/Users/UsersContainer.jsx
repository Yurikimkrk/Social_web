import {follow, unfollow, getUsers, toggleFollowingProgress} from '../../redux/users-reducer'
import Users from "./Users"
import {connect} from "react-redux"
import {Component} from "react"
import Preloader from "../Preloader/preloader"
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {addNewPost, setUserProfile, updatePostText} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class UsersContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <div>
      {this.props.isFetching ? <Preloader/>
        : <Users users={this.props.users}
                 follow={this.props.follow}
                 unfollow={this.props.unfollow}
                 pageSize={this.props.pageSize}
                 currentPage={this.props.currentPage}
                 onPageChanged={this.onPageChanged}
                 totalUsersCount={this.props.totalUsersCount}
                 toggleFollowingProgress={this.props.toggleFollowingProgress}
                 followingInProgress={this.props.followingInProgress}/>}
    </div>

  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {follow, unfollow, getUsers, toggleFollowingProgress})
)(UsersContainer)

