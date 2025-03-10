import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <p>Welcome to the dashboard!</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;