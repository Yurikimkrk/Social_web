import s from "./Status.module.css"
import {Component} from "react"



class Status extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (!this.state.editMode ?
        <div onDoubleClick={this.activateEditMode} className={s.status}>
          <div>{this.props.status || '---'}</div>
        </div> :
        <div className={s.status__input}>
          <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status}/>
        </div>
    )
  }
}

export default Status