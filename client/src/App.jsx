import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CitizenPortal from './pages/CitizenPortal';
import OfficerDashboard from './pages/OfficerDashboard';
import AnalyticsPage from './pages/AnalyticsPage';
import LoginPage from './pages/LoginPage';
function App() { return (<BrowserRouter><Navbar /><Routes><Route path='/' element={<LandingPage />} /><Route path='/citizen' element={<CitizenPortal />} /><Route path='/officer' element={<OfficerDashboard />} /><Route path='/analytics' element={<AnalyticsPage />} /><Route path='/login' element={<LoginPage />} /></Routes><Footer /></BrowserRouter>); }
export default App;
