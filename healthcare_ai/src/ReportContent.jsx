import React, { useState, useRef } from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { IoCloudUpload } from "react-icons/io5";
import humanImage from "./assets/image.png";
import "./ReportContent.css";
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

function ReportMaking({ onGoBack, onTextExtracted, onSubmitFiles }) {
  const [fileStatus, setFileStatus] = useState({
    bloodTest: null,
    prescription: null,
    diagnosis: null,
    allergy: null,
    bodyMeasurements: null
  });
  const [extractedText, setExtractedText] = useState({
    bloodTest: '',
    prescription: '',
    diagnosis: '',
    allergy: '',
    bodyMeasurements: ''
  });

  const fileInputRefs = {
    bloodTest: useRef(null),
    prescription: useRef(null),
    diagnosis: useRef(null),
    allergy: useRef(null),
    bodyMeasurements: useRef(null)
  };

  const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(' ') + '\n';
    }
    return text;
  };

  const handleFileUpload = async (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setFileStatus(prev => ({
        ...prev,
        [type]: file.name
      }));
      let text = '';
      if (file.type === 'application/pdf') {
        text = await extractTextFromPDF(file);
      } else {
        // For images or other types, just set a placeholder or use OCR if needed
        text = '[Non-PDF file uploaded: ' + file.name + ']';
      }
      setExtractedText(prev => ({ ...prev, [type]: text }));
      if (onTextExtracted) {
        onTextExtracted(type, text);
      }
    }
  };

  const handleContainerClick = (type) => {
    fileInputRefs[type].current.click();
  };

  return (
    <div className="report-making">
      <div className="report-making-container">
        <div className="image-section">
          <div className="report-making-image">
            <img src={humanImage} alt="Health Report" />
          </div>
        </div>
        <div className="report-making-content">
          <div className="text-container">
            <p className="file_heading">
              Recent Blood Test Reports (CBC, Lipid Profile, Blood Sugar)
            </p>
            <div
              className={`input-container ${fileStatus.bloodTest ? 'uploaded' : ''}`}
              onClick={() => handleContainerClick('bloodTest')}
              tabIndex="0"
              role="button"
              aria-label="Upload blood test report"
            >
              <input
                className="file_input"
                type="file"
                hidden
                ref={fileInputRefs.bloodTest}
                onChange={(e) => handleFileUpload(e, 'bloodTest')}
                accept=".pdf"
              />
              {fileStatus.bloodTest ? (
                <>
                  <IoCheckmarkCircle className="success-icon" />
                  <span className="file-name">{fileStatus.bloodTest}</span>
                </>
              ) : (
                <FaCloudArrowUp className="facloudarrowup" />
              )}
            </div>

            <p className="file_heading">
              Doctor's Prescription (if under medication)
            </p>
            <div
              className={`input-container ${fileStatus.prescription ? 'uploaded' : ''}`}
              onClick={() => handleContainerClick('prescription')}
              tabIndex="0"
              role="button"
              aria-label="Upload doctor's prescription"
            >
              <input
                className="file_input"
                type="file"
                hidden
                ref={fileInputRefs.prescription}
                onChange={(e) => handleFileUpload(e, 'prescription')}
                accept=".pdf"
              />
              {fileStatus.prescription ? (
                <>
                  <IoCheckmarkCircle className="success-icon" />
                  <span className="file-name">{fileStatus.prescription}</span>
                </>
              ) : (
                <FaCloudArrowUp className="facloudarrowup" />
              )}
            </div>

            <p className="file_heading">Medical Diagnosis Report (if any)</p>
            <div
              className={`input-container ${fileStatus.diagnosis ? 'uploaded' : ''}`}
              onClick={() => handleContainerClick('diagnosis')}
              tabIndex="0"
              role="button"
              aria-label="Upload medical diagnosis report"
            >
              <input
                className="file_input"
                type="file"
                hidden
                ref={fileInputRefs.diagnosis}
                onChange={(e) => handleFileUpload(e, 'diagnosis')}
                accept=".pdf"
              />
              {fileStatus.diagnosis ? (
                <>
                  <IoCheckmarkCircle className="success-icon" />
                  <span className="file-name">{fileStatus.diagnosis}</span>
                </>
              ) : (
                <FaCloudArrowUp className="facloudarrowup" />
              )}
            </div>

            <p className="file_heading">Allergy Report (if any)</p>
            <div
              className={`input-container ${fileStatus.allergy ? 'uploaded' : ''}`}
              onClick={() => handleContainerClick('allergy')}
              tabIndex="0"
              role="button"
              aria-label="Upload allergy report"
            >
              <input
                className="file_input"
                type="file"
                hidden
                ref={fileInputRefs.allergy}
                onChange={(e) => handleFileUpload(e, 'allergy')}
                accept=".pdf"
              />
              {fileStatus.allergy ? (
                <>
                  <IoCheckmarkCircle className="success-icon" />
                  <span className="file-name">{fileStatus.allergy}</span>
                </>
              ) : (
                <FaCloudArrowUp className="facloudarrowup" />
              )}
            </div>

            <p className="file_heading">
              Body Measurements (height, weight, BMI if known)
            </p>
            <div
              className={`input-container ${fileStatus.bodyMeasurements ? 'uploaded' : ''}`}
              onClick={() => handleContainerClick('bodyMeasurements')}
              tabIndex="0"
              role="button"
              aria-label="Upload body measurements"
            >
              <input
                className="file_input"
                type="file"
                hidden
                ref={fileInputRefs.bodyMeasurements}
                onChange={(e) => handleFileUpload(e, 'bodyMeasurements')}
                accept=".pdf"
              />
              {fileStatus.bodyMeasurements ? (
                <>
                  <IoCheckmarkCircle className="success-icon" />
                  <span className="file-name">{fileStatus.bodyMeasurements}</span>
                </>
              ) : (
                <FaCloudArrowUp className="facloudarrowup" />
              )}            </div>
          </div>
        </div>
      </div>      <div className="back-button-container">
        <button className="back-button" onClick={onGoBack}>
          <IoArrowBack /> Back to Information
        </button>        <button className="submit-button" onClick={() => {
          // Check if any files have been uploaded
          const hasUploadedFiles = Object.values(fileStatus).some(status => status !== null);
          if (hasUploadedFiles) {
            alert('Files submitted successfully!');
            if (onSubmitFiles) onSubmitFiles();
          } else {
            alert('Please upload at least one file before submitting.');
          }
        }}>
          <IoCloudUpload /> Submit Files
        </button>
      </div>
    </div>
  );
}

export default ReportMaking;
