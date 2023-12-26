import React from "react";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </Router>
  );
}

export default App;
