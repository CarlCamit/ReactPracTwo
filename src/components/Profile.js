import React from 'react'

function Profile ({
    firstName,
    lastName,
    profileImageURL
}) { 
    return ( 
        <div> 
            <h1>LinkedIn Profile Editor</h1>
            <img src={ profileImageURL } alt={ firstName + ' ' + lastName }/>
            <p>Name: { firstName } { lastName } </p>
        </div>
    )
}

export default Profile