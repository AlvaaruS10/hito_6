import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '/src/components/CartContext'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './App.css'

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;
