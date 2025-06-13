import React from "react";
import { IoArrowForward } from "react-icons/io5";
import humanImage from "./assets/image.png";
import "./ReportContent.css";

function ReportMaking() {
  return (
    <div className="report-making">
      <div className="report-making-container">
        <div className="image-section">
          <div className="radial-circle"></div>
          <div className="report-making-image">
            <img src={humanImage} alt="Health Report" />
          </div>
        </div>
        <div className="report-making-content">
          <div className="text-container">
            <div className="textcontent">
              Recent Blood Test Reports (CBC, Lipid Profile, Blood Sugar)
              <div className="file-placeholder" />
            </div>
            <div className="textcontent">
              Doctor's Prescription (if under medication)
              <div className="file-placeholder" />
            </div>
            <div className="textcontent">
              Medical Diagnosis Reports (if any)
              <div className="file-placeholder" />
            </div>
            <div className="textcontent">
              Allergy Reports (if available)
              <div className="file-placeholder" />
            </div>
            <div className="textcontent">
              Body Measurements (Height, Weight, BMI if known)
              <div className="file-placeholder" />
            </div>
            <div className="textcontent">
              Medical Diagnosis Reports (if any)
              <div className="file-placeholder" />
            </div>
            <div className="textcontent">
              Allergy Reports (if available)
              <div className="file-placeholder" />
            </div>
            <div className="textcontent">
              Body Measurements (Height, Weight, BMI if known)
              <div className="file-placeholder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportMaking;
