import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Map from './pages/Map';
import NodeManagement from './pages/NodeManagement';
import EdgeManagement from './pages/EdgeManagement';
import Navbar from "./common/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./context/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

import "./style/common.css"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Map />} />
          
          <Route path="/nodes" element={<ProtectedRoute><NodeManagement /></ProtectedRoute>} />
          <Route path="/edges" element={<ProtectedRoute><EdgeManagement /></ProtectedRoute>} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
