import {Component} from 'react'

import UserDetailsCardView from '../UserDetailsCardview'
import UserDetailsListView from '../UserDetailsListview'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'

import './index.css'

class User extends Component {
  state = {
    usersData: [],
    currentCardId: '',
    currentListId: '',
    searchInput: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const {searchInput} = this.state
    const users = JSON.parse(localStorage.getItem('usersList'))
    console.log(users)
    if (users !== null) {
      const FilteredData = users.filter(each =>
        each.username.includes(searchInput),
      )
      this.setState({usersData: FilteredData})
    }
  }

  onClickCardItem = id => {
    this.setState({currentCardId: id})
  }

  onClickListItem = id => {
    this.setState({currentListId: id})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.getData)
  }

  render() {
    const {usersData, searchInput, currentCardId, currentListId} = this.state
    return (
      <div className="row-container">
        <Sidebar activeTabId="USER" />
        <div className="col-container">
          <Topbar />
          <h1 className="form-heading">Users</h1>
          <div className="users-container">
            <p className="search-heading">Search</p>
            <input
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search user by name.."
              className="search-input"
              type="search"
            />
            <p className="cardsHeading">CardView</p>
            <ul className="cardListContainer">
              {usersData.map(each => (
                <UserDetailsCardView
                  currentCardId={currentCardId}
                  onClickCardItem={this.onClickCardItem}
                  user={each}
                  key={each.id}
                />
              ))}
            </ul>
            <p className="cardsHeading">ListView</p>
            <ul className="listViewContainer">
              {usersData.map(each => (
                <UserDetailsListView
                  currentListId={currentListId}
                  onClickListItem={this.onClickListItem}
                  user={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default User
