import React from "react";
import "./App.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

function App() {
  return (
    <div className="app">
      {/*  header */}
      <Header />

      <div className="app__page">
        {/* sidebar */}
        <Sidebar />

        {/* main section for recommended */}
        <RecommendedVideos />
      </div>
    </div>
  );
}

// go into index
export default App;
