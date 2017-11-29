import React from 'react'

function RandomProfileButton({
  // display,
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
