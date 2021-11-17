import {Link} from 'react-router-dom'

import users from '../Images/users.png'
import adduser from '../Images/add-user.png'
import weather from '../Images/weather.png'
import logo from '../Images/Logo.png'

import './index.css'

function Sidebar(props) {
  const {activeTabId} = props

  const addUserClass =
    activeTabId === 'ADD' ? 'active sidebar-button' : ' sidebar-button'

  const userClass =
    activeTabId === 'USER' ? 'active sidebar-button' : ' sidebar-button'

  const weatherClass =
    activeTabId === 'WEATHER' ? 'active sidebar-button' : ' sidebar-button'

  return (
    <div className="nav-container nav-theme-container nav-position">
      <img className="websiteLogo" src={logo} alt="Basidia logo" />
      <hr className="hrLine" />
      <div className="button-container">
        <Link to="/">
          <button className={addUserClass} type="button">
            <img className="logo-sub" src={adduser} alt="users" />
            Add users
          </button>
        </Link>
        <Link to="/users">
          <button className={userClass} type="button">
            <img className="logo-sub" src={users} alt="users" />
            Users
          </button>
        </Link>
        <Link to="/weather">
          <button className={weatherClass} type="button">
            <img className="logo-sub" src={weather} alt="users" />
            Weather
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
