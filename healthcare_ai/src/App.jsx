import { useState, useRef } from 'react'
import ReportEntry from './ReportEntry'
import Hero from './Hero'
// import Footer from './Footer'
import Navbar from './Navbar'
import ReportMaking from './ReportContent'
// import Hero from './hero'
// import ReportEntry from './ReportEntry'
import './App.css'

function App() {
  const [showReportContent, setShowReportContent] = useState(false)
  const nodeRef = useRef(null)
  
  const handleSendReports = () => {
    setShowReportContent(true)
    // Scroll to the component position
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById('report-section').offsetTop - 100,
        behavior: 'smooth'
      })
    }, 100)
  }
  
  const handleGoBack = () => {
    setShowReportContent(false)
    // Scroll to the component position
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById('report-section').offsetTop - 100,
        behavior: 'smooth'
      })
    }, 100)
  }

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
