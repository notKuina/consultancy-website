import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RoleSelection from "./pages/RoleSelection";
import Apply from "./pages/Apply";
import Dashboard from "./dashboard/Dashboard";
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
import { Toaster } from "react-hot-toast";
import DashboardLayout from "./layout/DashboardLayout";
import ViewSubmission from "./dashboard/ViewSubmissions";
import EditSubmission from "./dashboard/EditSubmission";
import AddSubmission from "./dashboard/AddSubmission";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<CTASection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/process" element={<ProcessSection />} />
        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="view/:id" element={<ViewSubmission />} />
          <Route path="edit/:id" element={<EditSubmission />} />
          <Route path="add" element={<AddSubmission />} />
        </Route>

      </Routes>

      {/* Footer only for public pages */}
      <Routes>
        <Route
          path="/"
          element={<Footer />}
        />
        <Route
          path="/login"
          element={<Footer />}
        />
        <Route
          path="/register"
          element={<Footer />}
        />
        <Route
          path="/apply"
          element={<Footer />}
        />
        <Route
          path="/contact"
          element={<Footer />}
        />
        <Route
          path="/services"
          element={<Footer />}
        />
        <Route
          path="/process"
          element={<Footer />}
        />
        <Route
          path="/testimonials"
          element={<Footer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
