import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Views/Homepage/Homepage";

function Mainroute() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default Mainroute;
