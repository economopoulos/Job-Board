import "./App.css"
import { Card } from "./components/Card"
import { Home } from "./pages/Home"
import { Job } from "./pages/Job"
import { SearchBar } from "./components/SearchBar"
import useFetch from "./components/useFetch"
import { useState } from "react"
import { Footer } from "./components/Footer"
import FetchButton from "./components/FetchButton"
import { Triangle } from "react-loader-spinner"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

function App() {
  const [maxSlice, setMaxSlice] = useState(25)
  const [search, setSearch] = useState("")
  const [url, setUrl] = useState("https://himalayas.app/jobs/api")
  const { data, loading, error } = useFetch(url)
  const [id, setId] =useState(null)

  if (loading)
    return (
      <div className="center">
        <Triangle
          height="120"
          width="120"
          color="#63baba"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    )

  if (error)
    return (
      <div className="center">
        <h1>{error}</h1>
      </div>
    )

  return (
    <div className="App">
      <header></header>
      <section className="main-content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <SearchBar search={search} setSearch={setSearch} />
              <Home data={data} search={search} maxSlice={maxSlice} setId={setId} />
              <FetchButton setMaxSlice={setMaxSlice} />
            </Route>
            <Route path="/job/:id">
              <Job id={id} data={data}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </section>
      <Footer />
    </div>
  )
}
export default App




