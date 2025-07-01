import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import './App.css'
import Banner from "./components/Banner";
import Client from "./components/Client";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      
      <div className="card">
      <Navbar/>
      <Banner/>
      <Projects/>
      <Client/>
      </div>
     
    </>
  )
}

export default App
