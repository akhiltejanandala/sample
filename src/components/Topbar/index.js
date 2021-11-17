import {Component} from 'react'

import usericon from '../Images/user-icon.png'

import './index.css'

class Topbar extends Component {
  state = {
    currentDateTime: '',
  }

  componentDidMount() {
    this.timerID = setInterval(this.getDateAndTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  getDateAndTime = () => {
    const date = new Date()
    const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthList = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const month = date.getMonth()
    const day = date.getDay()
    const todayDate = date.getDate()

    function formattedDate() {
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const meridian = hours >= 12 ? 'PM' : 'AM'
      const hour = hours % 12 || 12
      const strTime = `${hour}:${minutes} ${meridian}`
      return strTime
    }
    const finalDate = `${dayList[day]} ${todayDate} ${
      monthList[month]
    } ${formattedDate(date)}`

    this.setState({currentDateTime: finalDate})
  }

  render() {
    const {currentDateTime} = this.state

    return (
      <div className="header-container">
        <h1 className="time-and-date">{currentDateTime}</h1>
        <div className="profile">
          <p className="user-profile-name">Welcome John</p>
          <img className="profile-icon" src={usericon} alt="profile" />
        </div>
      </div>
    )
  }
}

export default Topbar
