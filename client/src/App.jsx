import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CitizenPortal from './pages/CitizenPortal';
import OfficerDashboard from './pages/OfficerDashboard';
import AnalyticsPage from './pages/AnalyticsPage';
import DigitalTwinPage from './pages/DigitalTwinPage';
import LoginPage from './pages/LoginPage';
import TrackComplaint from './pages/TrackComplaint';
import ComplaintPage from './pages/ComplaintPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/citizen" element={<CitizenPortal />} />
            <Route path="/officer" element={<OfficerDashboard />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/digital-twin" element={<DigitalTwinPage />} />
            <Route path="/track" element={<TrackComplaint />} />
            <Route path="/complaint/:id" element={<ComplaintPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
