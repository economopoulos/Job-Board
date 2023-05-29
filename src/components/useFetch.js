import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(api) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      try {
        const res = await fetch(api)
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const json = await res.json()
        setLoading(false)
        setData(json)
        setError(null)
      } catch (error) {
        setError("Could not fetch the data..")
        setLoading(false)
      }
    }
    fetchJobs()
  }, [api])

  // useEffect(() => {
  //   setLoading(true)
  //   axios
  //     .get(api)
  //     .then((res) => {
  //       setData(res.data)
  //     })
  //     .catch((err) => {
  //       setError(err)
  //     }).finally(()=>{
  //       setLoading(false)
  //     })
  // }, [api])
  return { data, loading, error }
}

export default useFetch
