import React from 'react'; // You need to import React
import './App.css';
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
     
    
    </div>
  );
}

export default App;
