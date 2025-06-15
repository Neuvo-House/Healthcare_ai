import React, { useState, useRef, useEffect } from "react";
import "./ai.css";
import picture from "./assets/picture.png";


function HealthcareAI({ extractedText }) {
  // Sample messages array for the chat
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your healthcare assistant. How can I help you today?",
      sender: "bot",
      time: "10:30 AM"
    },
    {
      id: 2,
      text: "let's say it does - what happens then?",
      sender: "you",
      time: "02:22 AM"
    },
    {
      id: 3,
      text: "The question of whether androids dream of electric sheep is the title and theme of the novel *Do Androids Dream of Electric Sheep?* by Philip K. Dick. \n\n1. The book explores a world where androids are indistinguishable from humans except for a lack of empathy. The story follows Rick Deckard, a bounty hunter who tracks down rogue androids.",
      sender: "bot",
      time: "02:23 AM"
    }
  ]);

  // State for new message input
  const [newMessage, setNewMessage] = useState("");
  // State for typing indicator
  const [isTyping, setIsTyping] = useState(false);
  // Reference for auto-scrolling
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Function to get current time in 12-hour format
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  // Handle message sending
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "you",
      time: getCurrentTime()
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response after a short delay
    setTimeout(() => {
      setIsTyping(false);

      // Combine all extracted text for the prompt
      const combinedText = Object.entries(extractedText || {})
        .filter(([_, value]) => value && value.length > 0)
        .map(([key, value]) => `${key}:\n${value}`)
        .join('\n\n');

      const botMessage = {
        id: messages.length + 2,
        text: `I'm analyzing your input.\n\n---\nHere is the extracted text from your uploaded files:\n${combinedText ? combinedText : 'No files uploaded or extracted.'}`,
        sender: "bot",
        time: getCurrentTime()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 2000);
  };

  // Handle key press (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

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
              Based on your submitted reports, here's a summary of your current health condition:
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
      </div>      <div className="healthcare-right">
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-header-info">
              <h3>Healthcare Assistant</h3>
              <span className="status">Online</span>
            </div>
          </div>
          <div className="chat-messages" ref={chatContainerRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-msg ${msg.sender}`}>
                <div className="chat-bubble">
                  <p>{msg.text}</p>
                </div>
                <span className="time">{msg.time}</span>
              </div>
            ))}

            {/* Show typing indicator when bot is "typing" */}
            {isTyping && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {/* Show image only after the specific message */}
            {messages.length > 0 && messages[messages.length - 1].sender === "bot" && (
              <div className="chat-image fade-in">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="Architecture"
                />
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && (
              <div className="chat-typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              placeholder="Ask me about your health..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-button" onClick={handleSendMessage}>
              <span className="send-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthcareAI;