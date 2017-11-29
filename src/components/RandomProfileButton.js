import React from 'react'

function RandomProfileButton({
  children,
  onRandomProfileButton
}) {
  return (
    <div>
      <button
        type="button"
        onClick={event => {
          onRandomProfileButton()
        }}
      >
        {children}
      </button>
    </div>
  )
}

export default RandomProfileButton
