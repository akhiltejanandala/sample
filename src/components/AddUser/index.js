import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'

class AddUser extends Component {
  state = {
    usernameInput: '',
    emailInput: '',
    phoneInput: '',
    dobInput: '',
    stateInput: '',
    emailErr: false,
    phoneErr: false,
    isValid: true,
    statesData: [
      ' ',
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chattisgarh',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Jammu and Kashmir',
      'Jharkhand',
      'Karnataka',
      'Kerala',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Tripura',
      'Uttarakhand',
      'Uttar Pradesh',
      'West Bengal',
      'Andaman and Nicobar Islands',
      'Chandigarh',
      'Dadra and Nagar Haveli',
      'Daman and Diu',
      'Delhi',
      'Lakshadweep',
      'Puducherry',
    ],
  }

  onChangeState = event => {
    this.setState({stateInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangeEmail = event => {
    const input = event.target.value
    this.setState({emailInput: event.target.value})
    if (!input.includes('@gmail.com')) {
      this.setState({emailErr: true})
    } else {
      this.setState({emailErr: false})
    }
  }

  onChangePhone = event => {
    const input = event.target.value
    this.setState({phoneInput: event.target.value})
    const numLength = input.length
    if (numLength < 10) {
      this.setState({phoneErr: true})
    } else {
      this.setState({phoneErr: false})
    }
  }

  onChangeDob = event => {
    this.setState({dobInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {
      usernameInput,
      emailInput,
      phoneInput,
      dobInput,
      stateInput,
    } = this.state

    if (
      usernameInput === '' ||
      emailInput === '' ||
      phoneInput === '' ||
      dobInput === ''
    ) {
      this.setState({isValid: false})
    } else {
      const newUser = {
        id: v4(),
        username: usernameInput,
        email: emailInput,
        phone: phoneInput,
        DOB: dobInput,
        state: stateInput,
      }

      const user = JSON.parse(localStorage.getItem('usersList'))
      if (user) {
        const newData = [...user, newUser]
        localStorage.setItem('usersList', JSON.stringify(newData))
      } else {
        const newData = [newUser]
        localStorage.setItem('usersList', JSON.stringify(newData))
      }

      this.setState({
        usernameInput: '',
        emailInput: '',
        phoneInput: '',
        dobInput: '',
        stateInput: '',
      })
    }
  }

  render() {
    const {
      usernameInput,
      emailInput,
      phoneInput,
      dobInput,
      emailErr,
      phoneErr,
      stateInput,
      isValid,
      statesData,
    } = this.state

    return (
      <div className="row-container">
        <Sidebar activeTabId="ADD" />
        <div className="col-container">
          <Topbar />
          <h1 className="form-heading">Add User</h1>
          <div className="form-container">
            <form onSubmit={this.onSubmitForm}>
              <div className="form-input">
                <label className="input-label " htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  value={usernameInput}
                  className="input-styles active-input"
                  type="text"
                  onChange={this.onChangeUsername}
                  placeholder="Enter Username"
                />
              </div>

              <div className="form-input">
                <label htmlFor="emailInput" className="input-label">
                  Email
                </label>
                <div className="err-cont">
                  <input
                    id="emailInput"
                    value={emailInput}
                    className="input-styles active-input"
                    type="email"
                    onChange={this.onChangeEmail}
                    placeholder="Enter Email"
                  />
                  {emailErr && <p className="err-msg">Enter valid email id</p>}
                </div>
              </div>

              <div className="form-input">
                <label htmlFor="phone" className="input-label">
                  Phone
                </label>
                <div className="err-cont">
                  <input
                    id="phone"
                    value={phoneInput}
                    className="input-styles active-input"
                    type="tel"
                    onChange={this.onChangePhone}
                    placeholder="Enter Phone Number"
                  />
                  {phoneErr && (
                    <p className="err-msg">
                      Enter a valid phone number(10 digits)
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input">
                <label htmlFor="dob" className="input-label">
                  DOB
                </label>
                <input
                  id="dob"
                  value={dobInput}
                  className="input-styles active-input"
                  type="date"
                  onChange={this.onChangeDob}
                />
              </div>
              <div className="form-input">
                <label htmlFor="state" className="input-label">
                  State
                </label>
                <select
                  className="select-styles active-input"
                  id="state"
                  value={stateInput}
                  onChange={this.onChangeState}
                >
                  {statesData.map(val => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  disabled={!isValid}
                  type="submit"
                  className="btn-styles"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddUser
