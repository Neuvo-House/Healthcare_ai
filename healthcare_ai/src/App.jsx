import { useState } from 'react'
import Navbar from './Navbar'
import ReportMaking from './ReportContent'
import ReportEntry from './ReportEntry'
import './App.css'

function App() {


  return (
    <div className="main-container">
      <Navbar />
      {/* <ReportMaking /> */}
      <ReportEntry />

    </div>
  )
}

export default App
