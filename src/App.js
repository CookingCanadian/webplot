import React, { useState, useEffect } from "react";
import "./App.css"; 

function App() {
  const imageUrl = "https://reverttechnologies.com/cdn/shop/files/b2.png?v=1730099475";
  const seamOverlap = 30;
  const [aspectRatio, setAspectRatio] = useState(1);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    };
  }, [imageUrl]);

  const panels = [
    { id: "gym", iconClass: "gym-icon", title: "Gym" },
    { id: "office", iconClass: "office-icon", title: "Office" },
    { id: "school", iconClass: "school-icon", title: "School" },
    { id: "hotel", iconClass: "hotel-icon", title: "Hotel" },
  ];

  const handleSelect = (id) => {
    setSelectedPanel(id);
  };

  const goToNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

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
        <div className="screen1">
          <p className="segment-title">Select Your Segment</p>
          <div className="content-holder">
            {panels.map((panel) => (
              <button
                key={panel.id}
                className={`content-panel ${
                  selectedPanel === panel.id ? "selected" : ""
                }`}
                onClick={() => handleSelect(panel.id)}
              >
                <div className={panel.iconClass}></div>
                <p className="content-title">{panel.title}</p>
              </button>
            ))}
          </div>  
        </div>
        
        <div className="progress-holder">
          <button
            className="progress-button back"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Back
          </button>

          <div className="progress-indicator">
            {[1, 2, 3].map((page) => (
              <React.Fragment key={page}>
                <span
                  className={`circle ${currentPage >= page ? "active" : ""}`}
                ></span>
                {page < 3 && <span className="line"></span>}
              </React.Fragment>
            ))}
          </div>

          <button
            className={`progress-button next ${selectedPanel ? "active" : ""}`}
            disabled={!selectedPanel}
            onClick={goToNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
