import React from "react";
import MainContent from "./Components/MainContent";
import Navbar, { NAVBAR_HEIGHT } from "./Components/Navbar";

import "./css/base-styles.css";

function App() {
  let appContentCSS = {
    gridTemplateRows: `${NAVBAR_HEIGHT}px 1fr`
  }

  return (
    <div className="App">
      <div id="app-content" style={appContentCSS}>
        <Navbar />
        <div />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
