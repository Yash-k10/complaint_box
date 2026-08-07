import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Header Navbar (Desktop + Mobile) */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-4 md:px-6 py-3 flex justify-between items-center shadow-lg">
        <Link to="/" className="text-lg md:text-xl font-black tracking-tight text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-lime-accent text-slate-900 flex items-center justify-center font-black text-sm shadow-md">
            UF
          </span>
          <span>
            UrbanFeedback <span className="text-lime-accent font-extrabold">AI-X</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-bold">
          <Link
            to="/"
            className={`transition ${isActive('/') ? 'text-lime-accent font-extrabold' : 'text-slate-300 hover:text-white'}`}
          >
            🏠 Overview
          </Link>
          <Link
            to="/citizen"
            className={`transition ${isActive('/citizen') ? 'text-lime-accent font-extrabold' : 'text-slate-300 hover:text-white'}`}
          >
            🏡 Resident Intake
          </Link>
          <Link
            to="/officer"
            className={`transition ${isActive('/officer') ? 'text-lime-accent font-extrabold' : 'text-slate-300 hover:text-white'}`}
          >
            👮 Officer Dashboard
          </Link>
          <Link
            to="/digital-twin"
            className={`transition ${isActive('/digital-twin') ? 'text-lime-accent font-extrabold' : 'text-slate-300 hover:text-white'}`}
          >
            🏙️ Ward Digital Twin
          </Link>
          <Link
            to="/analytics"
            className={`transition ${isActive('/analytics') ? 'text-lime-accent font-extrabold' : 'text-slate-300 hover:text-white'}`}
          >
            📊 Analytics
          </Link>
          <Link
            to="/login"
            className="bg-lime-accent hover:opacity-90 text-slate-900 px-4 py-2 rounded-lg font-extrabold transition shadow-lg"
          >
            🔑 Single Sign-On
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white bg-slate-800 p-2 rounded-lg border border-slate-700 font-bold text-lg"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Drawer Menu (Toggled on Mobile) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-3 text-sm font-bold animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-lime-accent py-2 border-b border-slate-800"
          >
            🏠 Overview
          </Link>
          <Link
            to="/citizen"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-lime-accent py-2 border-b border-slate-800"
          >
            🏡 Resident Intake & Voice
          </Link>
          <Link
            to="/officer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-lime-accent py-2 border-b border-slate-800"
          >
            👮 Officer Operations Board
          </Link>
          <Link
            to="/digital-twin"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-lime-accent py-2 border-b border-slate-800"
          >
            🏙️ AI Ward Digital Twin
          </Link>
          <Link
            to="/analytics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-lime-accent py-2 border-b border-slate-800"
          >
            📊 Analytics & Heatmap
          </Link>
          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-lime-accent text-slate-900 py-2.5 rounded-lg font-extrabold mt-2"
          >
            🔑 Single Sign-On
          </Link>
        </div>
      )}

      {/* Mobile Bottom Thumb Navigation Bar (Applike UX for Mobile Viewports) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 z-50 flex justify-around items-center py-2 px-1 text-[10px] font-bold">
        <Link
          to="/"
          className={`flex flex-col items-center gap-0.5 ${isActive('/') ? 'text-lime-accent' : 'text-slate-400'}`}
        >
          <span className="text-base">🏠</span>
          <span>Home</span>
        </Link>
        <Link
          to="/citizen"
          className={`flex flex-col items-center gap-0.5 ${isActive('/citizen') ? 'text-lime-accent' : 'text-slate-400'}`}
        >
          <span className="text-base">📝</span>
          <span>Report</span>
        </Link>
        <Link
          to="/officer"
          className={`flex flex-col items-center gap-0.5 ${isActive('/officer') ? 'text-lime-accent' : 'text-slate-400'}`}
        >
          <span className="text-base">📋</span>
          <span>Board</span>
        </Link>
        <Link
          to="/digital-twin"
          className={`flex flex-col items-center gap-0.5 ${isActive('/digital-twin') ? 'text-lime-accent' : 'text-slate-400'}`}
        >
          <span className="text-base">🏙️</span>
          <span>Twin</span>
        </Link>
        <Link
          to="/login"
          className={`flex flex-col items-center gap-0.5 ${isActive('/login') ? 'text-lime-accent' : 'text-slate-400'}`}
        >
          <span className="text-base">🔑</span>
          <span>Login</span>
        </Link>
      </div>
    </>
  );
}
