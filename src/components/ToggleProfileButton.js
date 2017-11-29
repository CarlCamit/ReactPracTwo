import React from 'react'

function ToggleProfileButton({ display, children, onToggleProfileButton }) {
  return (
    <div>
      <button
        type="button"
        onClick={event => {
          onToggleProfileButton(display)
        }}
      >
        {children}
      </button>
    </div>
  )
}

export default ToggleProfileButton
