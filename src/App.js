import React, { Component } from 'react';
import './App.css';
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'

class App extends Component {
  state = {
    user: {
      firstName: 'Rachel',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/women/57.jpg'
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

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <ShowProfile 
          firstName={user.firstName}
          lastName={user.lastName}
          profileImageURL={user.profileImageURL}
        />

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
      </div>
    );
  }
}

export default App;
