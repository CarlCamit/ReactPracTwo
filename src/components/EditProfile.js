import React from 'react'

function EditProfile({
  firstName,
  lastName,
  profileImageURL,
  onEditFirstName,
  onEditLastName,
  onEditProfileImageURL
}) {
  return (
    <div>
      <h1>Edit Profile</h1>
      <label>
        First Name:{' '}
        <input
          value={firstName}
          onChange={event => {
            firstName = event.target.value
            onEditFirstName(firstName)
          }}
        />
      </label>
      <br />

      <label>
        Last Name:{' '}
        <input
          value={lastName}
          onChange={event => {
            lastName = event.target.value
            onEditFirstName(lastName)
          }}
        />
      </label>
      <br />

      <label>
        Profile Image URL:{' '}
        <input
          value={profileImageURL}
          onChange={event => {
            profileImageURL = event.target.value
            onEditFirstName(profileImageURL)
          }}
        />
      </label>
    </div>
  )
}

export default EditProfile
