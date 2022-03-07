import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/map" element={<Map/>} />
      </Routes>
    </Router>
  );
}
export default App;
