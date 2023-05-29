import React, { useState } from "react"
import "./FetchButton.css"

export default function FetchButton({ setMaxSlice }) {
  const [disableClick, setDisableClick] = useState(false)
  const handleClick = () => {
    if (disableClick) {
      return
    }
    setDisableClick(true)
    setTimeout(() => {
      setMaxSlice((prev) => prev + 25)
      setDisableClick(false)
    }, 1000)
  }
  return (
    <div className="button-container">
      <button id="fetch-button" onClick={handleClick} disabled={disableClick}>
        show more
      </button>
    </div>
  )
}
