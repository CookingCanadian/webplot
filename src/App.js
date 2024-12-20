import React, { useState, useEffect } from "react";
import "./App.css";
import sampleData from "./Data.js";

function App() {
  const imageUrl = "https://reverttechnologies.com/cdn/shop/files/b2.png?v=1730099475";
  const seamOverlap = 30;
  const [aspectRatio, setAspectRatio] = useState(1);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [progressVisible, setProgressVisible] = useState(true); // Track progress bar visibility

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
    } else {
      handleCalculate();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleCalculate = () => {
    setProgressVisible(false);
    setCurrentPage(4);
  
    if (selectedPanel && sampleData[selectedPanel]) {
      const selectedData = sampleData[selectedPanel];
      let totalCost = 0;
      let totalPlugs = 0;
  
      Object.keys(quantities).forEach((key) => {
        const quantity = quantities[key] || 0;
        const unitPrice = selectedData[key] || 0;
        const cost = quantity * unitPrice;
  
        console.log(`${key}: ${quantity} x ${unitPrice} = ${cost}`);
        totalCost += cost;
  
        let plugsForItem = 0;
        if (key === "Elliptical Machines") {
          plugsForItem = Math.ceil(quantity / 4); 
        } else if (key === "Exercise Bikes") {
          plugsForItem = Math.ceil(quantity / 2); 
        } else {
          plugsForItem = quantity; 
        }

        if (selectedPanel==="gym") {
         totalCost /= 2
        } 
  
        totalPlugs += plugsForItem;
  
        console.log(`Plugs required for ${key}: ${plugsForItem}`);
      });
  
      console.log(`Gross Annual Savings for ${selectedPanel}: $${totalCost*0.18}`);
      console.log(`Total number of plugs required: ${totalPlugs}`);
    }
  };
  

  const [quantities, setQuantities] = useState(() =>
    Object.keys(sampleData[selectedPanel] || {}).reduce((acc, key) => {
      acc[key] = 0; // Default to 0 for all items
      return acc;
    }, {})
  );

  const [inputErrors, setInputErrors] = useState(() =>
    Object.keys(sampleData[selectedPanel] || {}).reduce((acc, key) => {
      acc[key] = false; // Default to no errors
      return acc;
    }, {})
  );

  const handleInputChange = (e, key) => {
    const inputDiv = e.target;
    const value = inputDiv.innerText.replace(/\D/g, ""); 

    if (/^\d*$/.test(value)) {
      setQuantities((prev) => ({
        ...prev,
        [key]: value === "" ? 0 : Number(value),
      }));

      setInputErrors((prev) => ({
        ...prev,
        [key]: false, 
      }));
    }

    setTimeout(() => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(inputDiv);
      range.collapse(false); 
      selection.removeAllRanges();
      selection.addRange(range);
    }, 0);
  };

  const handleInputBlur = (e, key) => {
    const inputDiv = e.target;
    const value = inputDiv.innerText.trim();

    if (!/^\d+$/.test(value) || Number(value) < 0) {
      setQuantities((prev) => ({
        ...prev,
        [key]: 0,
      }));

      setInputErrors((prev) => ({
        ...prev,
        [key]: true, 
      }));

      inputDiv.innerText = "0"; 
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
      <div className={`screen1 page-${currentPage}`}>
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

      <div className={`screen2 page-${currentPage}`}>
        <p className="segment-title">Select Quantity</p>
        <div className="item-holder">
          {selectedPanel && sampleData[selectedPanel] ? (
            Object.entries(sampleData[selectedPanel]).map(([key]) => (
              <div key={key} className="quantity-item">
                <p className="quantity-title">{key}</p>
                <div
                  className={`quantity-input ${
                    inputErrors[key] ? "input-error" : ""
                  }`}
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleInputBlur(e, key)}
                  onInput={(e) => handleInputChange(e, key)}
                >
                  {quantities[key] !== undefined ? quantities[key] : "0"}
                </div>
              </div>
            ))
          ) : (
            <p>Please select a panel on the previous screen.</p>
          )}
        </div>
      </div>

      <div className={`screen3 page-${currentPage}`}>
        <p className="segment-title">Facility Location</p>
        <div className="map-holder">

        </div>
      </div>

      <div className={`screen4 page-${currentPage}`}>
        <p className="segment-title">Estimated Savings</p>
        <div className="results-holder">
          
        </div>
      </div>

      <div className={`progress-holder ${!progressVisible ? "slide-down" : ""}`}>
        <button
          className="progress-button back"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Back
        </button>

        <div className="progress-indicator">
          {[1, 2, 3].map((page, index) => (
            <React.Fragment key={page}>
              <span
                className={`circle ${currentPage >= page ? "active" : ""}`}
              ></span>
              {page < 3 && <span className="line"></span>}
            </React.Fragment>
          ))}
          <div className="label-holder">
            <span className="label">Segment</span>
            <span className="label">Quantity</span>
            <span className="label">Location</span>
          </div>
        </div>

        <button
          className={`progress-button next ${selectedPanel ? "active" : ""}`}
          disabled={!selectedPanel}
          onClick={goToNextPage}
        >
          {currentPage === 3 ? "Calculate" : "Next"}
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
