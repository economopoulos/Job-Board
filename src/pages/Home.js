import { useState } from "react"
import { Card } from "../components/Card"

export const Home = ({ data, search, maxSlice, setId }) => {
  return (
    <>
      {data &&
        data.jobs
          .filter((job, index) => {
            return search.toLowerCase() === ""
              ? job
              : job.title.toLowerCase().includes(search)
          })
          .slice(0, maxSlice)
          .map((job, id) => <Card key={id} job={job} setId={setId} />)}
    </>
  )
}
