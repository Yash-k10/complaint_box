import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightMode]);

  return (
    <>
      {/* Top Header Navbar */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 px-4 lg:px-8 py-3.5 flex justify-between items-center shadow-xl">
        <Link to="/" className="text-base lg:text-xl font-black tracking-tight text-white flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded-lg bg-lime-accent text-slate-900 flex items-center justify-center font-black text-sm shadow-md">
            UF
          </span>
          <span className="whitespace-nowrap text-white">
            UrbanFeedback <span className="text-lime-accent font-extrabold">AI-X</span>
          </span>
        </Link>

        {/* Desktop Navigation Links (Only visible > 991px via .navbar-desktop) */}
        <div className="navbar-desktop items-center gap-5 text-xs font-extrabold shrink-0">
          <Link
            to="/"
            className={`transition px-2.5 py-1.5 rounded-lg ${isActive('/') ? 'text-lime-accent bg-slate-800' : 'text-white hover:text-lime-accent'}`}
          >
            🏠 Overview
          </Link>
          <Link
            to="/citizen"
            className={`transition px-2.5 py-1.5 rounded-lg ${isActive('/citizen') ? 'text-lime-accent bg-slate-800' : 'text-white hover:text-lime-accent'}`}
          >
            🏡 Resident Intake
          </Link>
          <Link
            to="/officer"
            className={`transition px-2.5 py-1.5 rounded-lg ${isActive('/officer') ? 'text-lime-accent bg-slate-800' : 'text-white hover:text-lime-accent'}`}
          >
            👮 Officer Dashboard
          </Link>
          <Link
            to="/digital-twin"
            className={`transition px-2.5 py-1.5 rounded-lg ${isActive('/digital-twin') ? 'text-lime-accent bg-slate-800' : 'text-white hover:text-lime-accent'}`}
          >
            🏙️ Digital Twin
          </Link>
          <Link
            to="/analytics"
            className={`transition px-2.5 py-1.5 rounded-lg ${isActive('/analytics') ? 'text-lime-accent bg-slate-800' : 'text-white hover:text-lime-accent'}`}
          >
            📊 Analytics
          </Link>

          {/* High-Contrast Theme Toggle Switch */}
          <button
            type="button"
            onClick={() => setIsLightMode(!isLightMode)}
            className="bg-slate-800 border border-slate-700 text-white px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 hover:border-lime-accent transition shadow"
            title="Toggle Light / Dark Mode"
          >
            <span>{isLightMode ? '☀️ Light' : '🌙 Dark'}</span>
            <span className={`w-7 h-4 rounded-full p-0.5 flex items-center transition ${isLightMode ? 'bg-amber-400 justify-end' : 'bg-slate-600 justify-start'}`}>
              <span className="w-3 h-3 rounded-full bg-slate-900 block" />
            </span>
          </button>

          <Link
            to="/login"
            className="bg-lime-accent hover:opacity-90 text-slate-900 px-4 py-2 rounded-lg font-black transition shadow-lg shrink-0"
          >
            🔑 Single Sign-On
          </Link>
        </div>

        {/* Mobile & Tablet Toggle Button (Only visible <= 991px via .navbar-mobile-toggle) */}
        <div className="navbar-mobile-toggle items-center gap-2">
          <button
            type="button"
            onClick={() => setIsLightMode(!isLightMode)}
            className="bg-slate-800 border border-slate-700 text-white px-2.5 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1"
          >
            {isLightMode ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 font-bold text-xs flex items-center gap-1"
          >
            {mobileMenuOpen ? '✕ Close' : '☰ Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Toggled on Mobile/Tablet) */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-toggle flex-col bg-slate-900 border-b border-slate-800 p-5 space-y-3 font-bold text-sm">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-lime-accent py-2 border-b border-slate-800/80"
          >
            🏠 Overview & Hero
          </Link>
          <Link
            to="/citizen"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-lime-accent py-2 border-b border-slate-800/80"
          >
            🏡 Resident Intake & Voice
          </Link>
          <Link
            to="/officer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-lime-accent py-2 border-b border-slate-800/80"
          >
            👮 Officer Operations Board
          </Link>
          <Link
            to="/digital-twin"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-lime-accent py-2 border-b border-slate-800/80"
          >
            🏙️ AI Ward Digital Twin
          </Link>
          <Link
            to="/analytics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white hover:text-lime-accent py-2 border-b border-slate-800/80"
          >
            📊 Analytics & Heatmap
          </Link>
          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-lime-accent text-slate-900 py-2.5 rounded-xl font-black shadow-lg"
          >
            🔑 Single Sign-On
          </Link>
        </div>
      )}

      {/* Mobile Bottom Thumb Navigation Bar */}
      <div className="mobile-bottom-nav fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 z-50 justify-around items-center py-2 px-1 text-[10px] font-bold">
        <Link
          to="/"
          className={`flex flex-col items-center gap-0.5 ${isActive('/') ? 'text-lime-accent font-black' : 'text-white'}`}
        >
          <span className="text-base">🏠</span>
          <span>Home</span>
        </Link>
        <Link
          to="/citizen"
          className={`flex flex-col items-center gap-0.5 ${isActive('/citizen') ? 'text-lime-accent font-black' : 'text-white'}`}
        >
          <span className="text-base">📝</span>
          <span>Report</span>
        </Link>
        <Link
          to="/officer"
          className={`flex flex-col items-center gap-0.5 ${isActive('/officer') ? 'text-lime-accent font-black' : 'text-white'}`}
        >
          <span className="text-base">📋</span>
          <span>Board</span>
        </Link>
        <Link
          to="/digital-twin"
          className={`flex flex-col items-center gap-0.5 ${isActive('/digital-twin') ? 'text-lime-accent font-black' : 'text-white'}`}
        >
          <span className="text-base">🏙️</span>
          <span>Twin</span>
        </Link>
        <Link
          to="/login"
          className={`flex flex-col items-center gap-0.5 ${isActive('/login') ? 'text-lime-accent font-black' : 'text-white'}`}
        >
          <span className="text-base">🔑</span>
          <span>Login</span>
        </Link>
      </div>
    </>
  );
}
