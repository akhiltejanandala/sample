import userIcon from '../Images/user-icon.png'

import './index.css'

const UserDetailsCardview = props => {
  const {user} = props
  const {username, DOB, id, state} = user

  const today = new Date()
  const birthDate = new Date(DOB)
  const age = today.getFullYear() - birthDate.getFullYear()

  return (
    <li className="user-card" key={id}>
      <img className="profileIcon" src={userIcon} alt="usericon" />
      <div className="profileDetails">
        <p className="profile">{username}</p>
        <p className="profile">{age}</p>
        <p className="profile">{state}</p>
      </div>
    </li>
  )
}

export default UserDetailsCardview
