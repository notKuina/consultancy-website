import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React from "react";
import Navbar from "./components/Navbar";
import CTASection from "./pages/CTASection";
import ServicesSection from "./pages/ServicesSection";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import ProcessSection from "./pages/ProcessSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/contact" element={<CTASection />} />
        <Route path="/services" element={<ServicesSection/>} />
        <Route path="process" element={<ProcessSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
