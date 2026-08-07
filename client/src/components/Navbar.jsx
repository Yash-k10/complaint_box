import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
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
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 px-6 lg:px-10 py-3.5 flex justify-between items-center shadow-xl">
        {/* Brand Logo */}
        <Link to="/" className="text-lg lg:text-xl font-black tracking-tight text-white flex items-center gap-2.5 shrink-0">
          <span className="w-9 h-9 rounded-xl bg-lime-accent text-slate-900 flex items-center justify-center font-black text-sm shadow-md">
            UF
          </span>
          <span className="whitespace-nowrap text-white">
            UrbanFeedback <span className="text-lime-accent font-extrabold">AI-X</span>
          </span>
        </Link>

        {/* Desktop Navigation Links (Spacious, Breathable Layout) */}
        <div className="navbar-desktop items-center gap-4 lg:gap-6 text-xs font-bold shrink-0">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-xl transition ${
              isActive('/')
                ? 'bg-lime-accent/15 text-lime-accent border border-lime-accent/30 font-extrabold'
                : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            🏠 Overview
          </Link>
          <Link
            to="/citizen"
            className={`px-3 py-1.5 rounded-xl transition ${
              isActive('/citizen')
                ? 'bg-lime-accent/15 text-lime-accent border border-lime-accent/30 font-extrabold'
                : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            🏡 Resident Intake
          </Link>
          <Link
            to="/officer"
            className={`px-3 py-1.5 rounded-xl transition ${
              isActive('/officer')
                ? 'bg-lime-accent/15 text-lime-accent border border-lime-accent/30 font-extrabold'
                : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            👮 Officer Dashboard
          </Link>
          <Link
            to="/digital-twin"
            className={`px-3 py-1.5 rounded-xl transition ${
              isActive('/digital-twin')
                ? 'bg-lime-accent/15 text-lime-accent border border-lime-accent/30 font-extrabold'
                : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            🏙️ Digital Twin
          </Link>
          <Link
            to="/analytics"
            className={`px-3 py-1.5 rounded-xl transition ${
              isActive('/analytics')
                ? 'bg-lime-accent/15 text-lime-accent border border-lime-accent/30 font-extrabold'
                : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            📊 Analytics
          </Link>

          {/* Right Action Controls Group */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-700/80 ml-2">
            {/* High-Contrast Theme Toggle Switch */}
            <button
              type="button"
              onClick={() => setIsLightMode(!isLightMode)}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 transition shadow-md"
              title="Toggle Light / Dark Mode"
            >
              <span>{isLightMode ? '☀️ Light' : '🌙 Dark'}</span>
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <span className="bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5">
                  <span>{user.role === 'officer' ? '👮' : '👤'}</span>
                  <span>{user.name}</span>
                </span>
                <button
                  type="button"
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-3.5 py-1.5 rounded-xl text-xs transition shadow"
                  title="Sign Out"
                >
                  🚪 Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-lime-accent hover:opacity-90 text-slate-900 px-4 py-2 rounded-xl font-black text-xs transition shadow-lg shrink-0"
              >
                🔑 Single Sign-On
              </Link>
            )}
          </div>
        </div>

        {/* Mobile & Tablet Toggle Button */}
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

      {/* Mobile Drawer Menu */}
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
          {user ? (
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-red-600 text-white py-2.5 rounded-xl font-black shadow-lg"
            >
              🚪 Logout ({user.name})
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-lime-accent text-slate-900 py-2.5 rounded-xl font-black shadow-lg"
            >
              🔑 Single Sign-On
            </Link>
          )}
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
        {user ? (
          <button
            onClick={logout}
            className="flex flex-col items-center gap-0.5 text-red-400 font-bold"
          >
            <span className="text-base">🚪</span>
            <span>Logout</span>
          </button>
        ) : (
          <Link
            to="/login"
            className={`flex flex-col items-center gap-0.5 ${isActive('/login') ? 'text-lime-accent font-black' : 'text-white'}`}
          >
            <span className="text-base">🔑</span>
            <span>Login</span>
          </Link>
        )}
      </div>
    </>
  );
}
