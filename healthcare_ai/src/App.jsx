import { useState } from 'react'
import Navbar from './Navbar'
import ReportMaking from './ReportContent'
// import Hero from './hero'
// import ReportEntry from './ReportEntry'
import './App.css'

function App() {


  return (
    <div className="main-container">
      <Navbar />
      {/* <Hero /> */}
      {/* <ReportEntry /> */}
      <ReportMaking />
    </div>
  )
}

export default App
