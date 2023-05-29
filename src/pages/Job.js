import React, { useState } from "react"
import { Link } from "react-router-dom"
import useFetch from "../components/useFetch"
import parse from "html-react-parser"
import "./Job.css"

export function Job({ id, data }) {

  return (
    <div className="job-container">
      <Link id="fetch-button" to="/">
        go back
      </Link>

      {data &&
        data.jobs
          .filter((job) => job.pubDate === id)
          .map((job, index) => (
            <div className="job-template" key={index}>
              <h1>{job.title}</h1>
              {parse(job.description)}
              {/* <a id="fetch-button" href={`${job.applicationLink}`}>
                apply now
              </a> */}
            </div>
          ))}
    </div>
  )
}
