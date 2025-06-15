import { useState, useRef } from 'react'
import ReportEntry from './ReportEntry'
import Hero from './Hero'
import Fotter from './footer'
import Navbar from './Navbar'
import ReportMaking from './ReportContent'
import HealthcareAI from './ai'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './App.css'

function App() {
  const [showReportContent, setShowReportContent] = useState(false)
  const nodeRef = useRef(null)
  const [allExtractedText, setAllExtractedText] = useState({
    bloodTest: '',
    prescription: '',
    diagnosis: '',
    allergy: '',
    bodyMeasurements: ''
  })

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

  const handleTextExtracted = (type, text) => {
    setAllExtractedText(prev => ({ ...prev, [type]: text }))
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
                <ReportMaking onGoBack={handleGoBack} onTextExtracted={handleTextExtracted} />
              ) : (
                <ReportEntry onSendReports={handleSendReports} />
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>

      </div>
      <HealthcareAI extractedText={allExtractedText} />
      <Fotter />

    </div>
  )
}

export default App
