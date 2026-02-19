import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import  {Toaster} from "react-hot-toast";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConsultantRegistration from "./pages/ConsultantRegistration";
import ConsultancyLogin from "./pages/ConsultancyLogin";
import Apply from "./pages/Apply";
import CTASection from "./pages/CTASection";
import ServicesSection from "./pages/ServicesSection";
import ProcessSection from "./pages/ProcessSection";
import Testimonials from "./pages/Testimonials";

// Dashboard
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import ViewSubmission from "./dashboard/ViewSubmissions";
import EditSubmission from "./dashboard/EditSubmission";
import AddSubmission from "./dashboard/AddSubmission";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();

  // Public pages where footer should show
  const publicPages = [
    "/",
    "/login",
    "/register",
    "/clogin",
    "/cregister",
    "/apply",
    "/contact",
    "/services",
    "/process",
    "/testimonials",
  ];

  const showFooter = publicPages.includes(location.pathname);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} /> 
      <Navbar />

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clogin" element={<ConsultancyLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cregister" element={<ConsultantRegistration />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<CTASection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/process" element={<ProcessSection />} />
        <Route path="/testimonials" element={<Testimonials />} />

        {/* Dashboard pages */}
        <Route path="/dashboard" element={<ProtectedRoute> <DashboardLayout /> </ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="view/:id" element={<ViewSubmission />} />
          <Route path="edit/:id" element={<EditSubmission />} />
          <Route path="add" element={<AddSubmission />} />
        </Route>
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent /> {/* Now useLocation works here */}
    </BrowserRouter>
  );
}
