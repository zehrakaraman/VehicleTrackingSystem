import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Map from "./components/VehicleLocationsMap";
import GridTable from "./components/VehiclesGridTable"
import Dashboard from "./components/Dashboard"
import Exit from "./components/ExitButton"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/grid" element={<GridTable/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/exit" element={<Exit/>} />
      </Routes>
    </Router>
  );
}
export default App;
