import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./FAQPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}

export default App;
