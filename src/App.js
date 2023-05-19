import "./App.css"
import CompanysImage from "./images/photosnap.svg"
import BackgroundSVG from "./images/bg-header-desktop.svg"
import { Card } from "./components/Card"
import data from './data.json'

function App() {
  return (
    <div className="App">
      <header></header>
      <section className="main-content">
        <Card CompanysImage={CompanysImage} BackgroundSVG={BackgroundSVG} data={data} />
      </section>
    </div>
  )
}

export default App
