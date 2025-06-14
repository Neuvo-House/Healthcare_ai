import { useState } from 'react'
import Hero from './hero'
import Navbar from './navbar'
import ReportEntry from './ReportEntry'

import './App.css'

function App() {


  return (
    <div className="main-container">
      <Navbar/>
      <Hero/>
      <ReportEntry/>

    </div>
  )
}

export default App
