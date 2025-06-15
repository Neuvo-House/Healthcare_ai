import { useState, useRef } from 'react'
import ReportEntry from './ReportEntry'
import Hero from './Hero'
import AI from './ai'
import Fotter from './fotter'
import Navbar from './Navbar'
import ReportMaking from './ReportContent'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

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
      <Hero />
      <div id="report-section">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={showReportContent ? 'report-content' : 'report-entry'}
            nodeRef={nodeRef}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >            <div ref={nodeRef}>
              {showReportContent ? (
                <ReportMaking onGoBack={handleGoBack} />
              ) : (
                <ReportEntry onSendReports={handleSendReports} />
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <AI />
      <Fotter />

    </div>
  )
}

export default App
