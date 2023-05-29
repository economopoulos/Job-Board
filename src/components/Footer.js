import React from "react"
import "./Footer.css"

export function Footer() {
  return (
    <div className="footer">
      <div className="main-content flex flex-row">
        <div className="footer-info flex flex-col">
          <h2>we work remotely</h2>
          <p className="par">
            We strongly encourage employers to embrace diversity, equity, and
            <br></br>
            inclusion as fundamental values when hiring through our Platform.
          </p>
        </div>
        <a>Get in touch</a>
      </div>
    </div>
  )
}
