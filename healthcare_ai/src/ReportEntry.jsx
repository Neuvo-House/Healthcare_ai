// Import React and required icon
import React from "react";
// Import the forward arrow icon from react-icons
import { IoArrowForward } from "react-icons/io5";
// Import the health image asset
import robortImage from "./assets/health.png";
// Import the CSS for styling
import "./ReportEntry.css";

// Main functional component for the report entry section
function ReportEntry() {
  return (
    // Main wrapper for the report entry
    <div className="report-entry">
      {/* Container for image and content sections */}
      <div className="report-entry-container">
        {/* Image Section with decorative circle */}
        <div className="image-section">
          <div className="radial-circle"></div>
          <div className="report-entry-image">
            <img
              src={robortImage}
              alt="Health Report"
            />
          </div>
        </div>

        {/* Text and Button Section */}
        <div className="report-entry-content">
          <div className="text-container">
            {/* Informational text for the user */}
            <div className="text-content">
              <p>
                To help our AI provide you with accurate health guidance,
                personalized diet plans, and recommended exercises, we need some
                basic information about your health. Please upload your medical
                history and relevant documents. These will help us generate a plan
                tailored just for you.
              </p>
            </div>
            {/* Button to send reports */}
            <div className="text-button">
              <button>Send your Reports <IoArrowForward /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the component for use in other files
export default ReportEntry;
