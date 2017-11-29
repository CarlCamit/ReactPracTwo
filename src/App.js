import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Rachel',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/women/57.jpg'
    }
  }

  handleChangeFirstName = (event) => {
     // Get the <input> (DOM element)
     const input = event.target
     // Get the current input text from the field
     const newFirstName = input.value
     this.setState((prevState) => {
       const user = prevState.user
       user.firstName = newFirstName
       return {
         // this.state.user will be updated
         user: user
       }
     })
  }

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>LinkedIn Profile Editor</h1>
        <img src={ user.profileImageURL } alt={ user.firstName + ' ' + user.lastName }/>
        <p>Name: { user.firstName } { user.lastName } </p>

        <label>
          First Name: { ' ' }
          <input 
            value={ user.firstName } 
            onChange={
              this.handleChangeFirstName
            }
          />
        </label>
      </div>
    );
  }
}

export default App;
