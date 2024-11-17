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
        <div style={{ backgroundColor: "#ededed", height: "70%", width: "70%", borderRadius: 20}}>

        </div>

        <div style={{ backgroundColor: "#ededed", height: "28%", width: "70%", borderRadius: 20, position: "absolute", bottom: "0%"}}>

        </div>

        <div style={{ backgroundColor: "#ededed", height: "100%", width: "29%", borderRadius: 20, position: "absolute", bottom: "0%", right: "0%"}}>

        </div>
      </div>
    </div>
  );
}

export default App;
