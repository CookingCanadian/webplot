import React, { useState, useEffect } from "react";
import "./App.css"; // Import the styles

function App() {
  const imageUrl = "https://reverttechnologies.com/cdn/shop/files/b2.png?v=1730099475";
  const seamOverlap = 30;
  const [aspectRatio, setAspectRatio] = useState(1); 

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    };
  }, [imageUrl]);

  return (
    <div className="app-container">
      <div
        className="banner-container"
        style={{ width: `calc(300% - ${seamOverlap}px)` }}
      >
        {[...Array(3)].map((_, index) => (
          <img
            key={index}
            src={imageUrl}
            alt="Revert Technologies Logo"
            style={{
              height: "80vh", 
              width: `calc(80vh * ${aspectRatio})`,
              marginRight: `-${seamOverlap}px`,
            }}
          />
        ))}
      </div>
      <div className="background-overlay">
        <p className="segment-title">Select Your Segment</p>
        <div className="content-holder">
          <div className="content-panel">
            <image className="gym-icon"></image>
            <p className="content-title">Gym</p>
          </div>

          <div className="content-panel">
            <image className="office-icon"></image>
            <p className="content-title">Office</p>
          </div>
            
          <div className="content-panel">
            <image className="school-icon"></image>
            <p className="content-title">School</p>
          </div>

          <div className="content-panel">
            <image className="hotel-icon"></image>
            <p className="content-title">Hotel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
