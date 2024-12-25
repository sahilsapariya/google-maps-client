import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import NodeManagement from './pages/NodeManagement';
import EdgeManagement from './pages/EdgeManagement';
import Navbar from "./common/Navbar";

import "./style/common.css"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/nodes" element={<NodeManagement />} />
        <Route path="/edges" element={<EdgeManagement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
}

export default App;
