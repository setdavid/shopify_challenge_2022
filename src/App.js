import React from "react";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";

import "./css/base-styles.css";

function App() {
  return (
    <div className="App">
      <div id="app-content">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
