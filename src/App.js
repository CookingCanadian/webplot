function App() {
  const imageUrl = "https://reverttechnologies.com/cdn/shop/files/b2.png?v=1730099475";
  const seamOverlap = 30;

  return (
    <div style={{ backgroundColor: "#111", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
      <div style={{ display: "flex", width: `calc(300% - ${seamOverlap}px)`, animation: "scrollBanner 60s linear infinite" }}>
        <img src={imageUrl} alt="Revert Technologies Logo" style={{ height: "100%", flexShrink: 0, marginRight: `-${seamOverlap}px` }} />
        <img src={imageUrl} alt="Revert Technologies Logo" style={{ height: "100%", flexShrink: 0, marginRight: `-${seamOverlap}px` }} />
        <img src={imageUrl} alt="Revert Technologies Logo" style={{ height: "100%", flexShrink: 0, marginRight: `-${seamOverlap}px` }} />
      </div>
      <style>
        {`
          @keyframes scrollBanner {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-66.67%);
            }
          }
        `}
      </style>

      {/* Main graph stuff */}
      <div style={{ height: "75vh", width: "70%", zIndex: 2, position: "absolute", left: "15%" }}>
        <div style={{ backgroundColor: "#262626", height: "70%", width: "70%", borderRadius: 20, position: "absolute" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 25, color: "#d9dcdb", paddingLeft: "20px", marginTop: "10px" }}>Data</p>
          
        </div>

        <div style={{ backgroundColor: "#262626", height: "28%", width: "70%", borderRadius: 20, position: "absolute", bottom: "0%"}}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 25, color: "#d9dcdb", paddingLeft: "20px", marginTop: "10px" }}>Estimated Savings</p>
        </div>

        <div style={{ backgroundColor: "#262626", height: "100%", width: "29%", borderRadius: 20, position: "absolute", bottom: "0%", right: "0%" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 25, color: "#d9dcdb", paddingLeft: "20px", marginTop: "10px" }}>My Equipment</p>
          <div style={{ overflow: "auto", height: "80%", width: "90%", position: "absolute", left: "5%" }}>

          </div>
          <div style={{ background: "linear-gradient(to bottom, rgba(38, 38, 38, 0) 0%, rgba(38, 38, 38, 1) 50%)", height: "20%", width: "100%", position: "absolute", bottom: "5%" }}>
            <div style={{ backgroundColor: "#E50914", width: "40%", height: "30%", borderRadius: 35, position: "absolute", top: "70%", left: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#ededed"}}>ADD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
