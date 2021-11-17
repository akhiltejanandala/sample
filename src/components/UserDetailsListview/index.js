import './index.css'
import {IoMenuOutline} from 'react-icons/io5'
import usersIcon from '../Images/users.png'

const UserDetailsListView = props => {
  const {user} = props
  const {username, id, DOB, state} = user

  const today = new Date()
  const birthDate = new Date(DOB)
  const age = today.getFullYear() - birthDate.getFullYear()

  return (
    <li className="list-view-container" key={id}>
      <div className="listProfileDetails">
        <img className="listProfileIcon" src={usersIcon} alt="profileIcon" />
        <p className="user-details">{username}-</p>
        <p className="user-details">{age}-</p>
        <p className="user-details">{state}</p>
      </div>
      <IoMenuOutline />
    </li>
  )
}

export default UserDetailsListView
