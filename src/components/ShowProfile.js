import React from 'react'

function ShowProfile ({
    firstName,
    lastName,
    profileImageURL
}) { 
    return ( 
        <div> 
            <h1>View Profile</h1>
            <img src={ profileImageURL } alt={ firstName + ' ' + lastName }/>
            <p>Name: { firstName } { lastName } </p>
        </div>
    )
}

export default ShowProfile