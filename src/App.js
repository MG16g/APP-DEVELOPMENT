import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import BookingPage from './components/BookingPage';
import PaymentPage from './components/PaymentPage'; 
import SuccessPage from './pages/SuccessPage'; 

function App() {
  return (
    <>
      <Header />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking/:plannerId" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} /> 
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
