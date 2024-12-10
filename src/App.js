import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NodeManagement from './pages/NodeManagement';
import EdgeManagement from './pages/EdgeManagement';
import Navbar from "./common/Navbar";

import "./style/common.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/nodes" element={<NodeManagement />} />
        <Route path="/edges" element={<EdgeManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
