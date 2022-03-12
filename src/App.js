import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Map from "./components/Map";
import GridTable from "./components/GridTable"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/grid" element={<GridTable/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}
export default App;
