import { useState } from "react"
import { Link } from "react-router-dom"
import "./Card.css"

export const Card = ({ id, job, setId }) => {
  const [tagValue, setTagValue] = useState("")
  function handleChange(e) {
    setTagValue(e.target.innerText.split("-").join(" "))
    console.log(tagValue)
  }
  const handleClick = ()=>{
    setId(job.pubDate)
  }

  return (
    <>
      <div className="card">
        <div className="company">
          <div className="company-logo">
            <img className="logo" src={job.companyLogo} alt="company's logo" />
          </div>
          <div className="info">
            <div className="info-header">
              <h2 className="company-name">{job.companyName}</h2>

              <div className="adds-on">
                {/* Checks if the job is published today and ads a NEW tag
                {job.pubDate.toString().slice(0, 6) ===
                  Date.now().toString().slice(0, 6) && (
                  <span className="new-tag">new!</span>
                )} */}
                {/* {job.featured && <span className="featured-tag">featured</span>} */}
              </div>
            </div>
            <div className="info-body">
              {/* <h2 className="job-role">{job.title}</h2> */}
              <Link className="job-role" to={`/job/${job.pubDate}`} onClick={handleClick}>{job.title}</Link>
            </div>
            <div className="info-footer">
              <a className="job-info job-date">
                {new Date(job.pubDate * 1000).toDateString().slice(4)}
              </a>
              <span className="dot">•</span>
              <a className="job-info job-type">Remote</a>
              {job.locationRestrictions.length < 5 &&
                job.locationRestrictions.length >= 1 && (
                  <span className="dot">•</span>
                )}
              {job.locationRestrictions.length < 5 && (
                <a className="job-info job-country">
                  {job.locationRestrictions}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="tags">
          {job.categories.slice(0, 3).map((categorie, id) => (
            <h2 key={id} className="tag" onClick={handleChange}>
              {categorie}
            </h2>
          ))}
        </div>
      </div>
    </>
  )
}
