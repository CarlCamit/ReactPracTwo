import React, { Component } from 'react';
import './App.css';
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'
import ToggleProfileButton from './components/ToggleProfileButton'

class App extends Component {
  state = {
    user: {
      firstName: 'Rachel',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/women/57.jpg'
    },
    button: {
      display: true
    }
  }

  handleChangeFirstName(newFirstName) {
     this.setState((prevState) => {
       const user = prevState.user
       user.firstName = newFirstName
       return {
         // this.state.user will be updated
         user: user
       }
     })
  }

  handleChangeLastName(newLastName) {
     this.setState((prevState) => {
       const user = prevState.user
       user.lastName = newLastName
       return {
         // this.state.user will be updated
         user: user
       }
     })
  }

  handleChangeProfileImageURL(newProfileImageURL) {
    this.setState((prevState) => {
      const user = prevState.user
      user.profileImageURL = newProfileImageURL
      return {
        user: user
      }
    })
  }
  
  handleToggleButton(newDisplay) {
    this.setState((prevState) => {
      const button = prevState.button
      let display = button.display
      button.display = !display
      return {
        button: button
      }
    })
  }
  
  render() {
    const user = this.state.user
    const button = this.state.button

    if (button.display === true) {
      return (
        <div className="App">
          <div>
            <ShowProfile 
              firstName={user.firstName}
              lastName={user.lastName}
              profileImageURL={user.profileImageURL}
            />
            <br />
            <ToggleProfileButton
              onToggleProfileButton={
                (display) => {
                  this.handleToggleButton(display)
                }
              }
            >
              Edit Profile
            </ToggleProfileButton>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <div>
            <EditProfile
              firstName={user.firstName}
              lastName={user.lastName}
              profileImageURL={user.profileImageURL}
              onEditFirstName={
                (firstName) => {
                  this.handleChangeFirstName(firstName)
                }
              }
              onEditLastName={
                (lastName) => {
                  this.handleChangeFirstName(lastName)
                }
              }
              onEditProfileImageURL={
                (profileImageURL) => {
                  this.handleChangeFirstName(profileImageURL)
                }
              }
            />
            <br />
            <ToggleProfileButton
              onToggleProfileButton={
                (display) => {
                  this.handleToggleButton(display)
                }
              }
            >
              Show Profile
            </ToggleProfileButton>
          </div>
        </div>
      );
    }
  }
}

export default App;
