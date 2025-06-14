import React from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import humanImage from "./assets/image.png";
import "./ReportContent.css";

function ReportMaking() {
  return (
    <div className="report-making">
      <div className="report-making-container">
        <div className="image-section">
          <div className="radial-circle" />
          <div className="report-making-image">
            <img src={humanImage} alt="Health Report" />
          </div>
        </div>
        <div className="report-making-content">
          <div className="text-container">
            <p className="file_heading">
              Recent Blood Test Reports(CBC,Lipid Profile,Blood Sugar)
            </p>
            <div className="input-container">
              <input className="file_input" type="file" hidden />
              <FaCloudArrowUp className="facloudarrowup" />
            </div>
            <p className="file_heading">
              Doctor's Prescription (if under medication)
            </p>
            <div className="input-container">
              <input className="file_input" type="file" hidden />
              <FaCloudArrowUp className="facloudarrowup" />
            </div>
            <p className="file_heading">Medical Diagonasis Report (if any)</p>
            <div className="input-container">
              <input className="file_input" type="file" hidden />
              <FaCloudArrowUp className="facloudarrowup" />
            </div>
            <p className="file_heading">Allergy Report (if any)</p>
            <div className="input-container">
              <input className="file_input" type="file" hidden />
              <FaCloudArrowUp className="facloudarrowup" />
            </div>
            <p className="file_heading">
              Body Measurements (height, weight, BMI if known)
            </p>
            <div className="input-container">
              <input className="file_input" type="file" hidden />
              <FaCloudArrowUp className="facloudarrowup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportMaking;
