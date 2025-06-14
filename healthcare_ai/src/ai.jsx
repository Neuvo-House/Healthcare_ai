import React from "react";
import "./ai.css";
import picture from "./assets/picture.png";


function HealthcareAI() {
  return (
    <div className="healthcare-container">
      <div className="healthcare-left">
        <h1 className="report-title">Personalized Health Report</h1>

        <div className="report-header">
          <div className="report-info">
            <p><strong>Name:</strong> Kennu</p>
            <p><strong>Age:</strong> 18</p>
            <p><strong>Gender:</strong> Trans</p>
            <p><strong>Report Date:</strong> 13/10/2025</p>
            <p><strong>1. Health Summary</strong></p>
            <p>
              Based on your submitted reports, here’s a summary of your current health condition:
            </p>
            <p><strong>Primary Concern(s):</strong></p>
            <p><strong>Allergies (if any):</strong></p>
          </div>

          <div className="report-avatar">
            <img
              src={picture}
              alt="Avatar"
              className="avatar"
            />
          </div>
        </div>

        <div className="report-table">
          <div className="table-row header">
            <button>Test</button>
            <div>Your Value</div>
            <div>Normal Range</div>
            <div>Remarks</div>
          </div>
          {[...Array(4)].map((_, i) => (
            <div className="table-row" key={i}>
              <button>Test</button>
              <div>Your Value</div>
              <div>Normal Range</div>
              <div>Remarks</div>
            </div>
          ))}
        </div>
      </div>

      <div className="healthcare-right">
        <div className="chat-container">
          <div className="chat-msg you">
            <p>let’s say it does - what happens then?</p>
            <span className="time">02:22 AM</span>
          </div>

          <div className="chat-msg bot">
            <p>
              The question of whether androids dream of electric sheep is the title and theme of the novel *Do Androids Dream of Electric Sheep?* by Philip K. Dick.
              <br /><br />
              1. The book explores a world where androids are indistinguishable from humans except for a lack of empathy. The story follows Rick Deckard, a bounty hunter who tracks down rogue androids.
            </p>
          </div>

          <div className="chat-image">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Architecture" />
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Message AI name..." />
            <button>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthcareAI;
