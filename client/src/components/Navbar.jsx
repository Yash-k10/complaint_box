import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 px-6 py-3 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-xl font-black tracking-tight text-white flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-lime-accent text-slate-900 flex items-center justify-center font-black text-sm">UF</span>
        <span>UrbanFeedback <span className="text-lime-accent font-extrabold">AI-X</span></span>
      </Link>

      <div className="hidden md:flex items-center gap-6 text-xs font-bold">
        <Link
          to="/"
          className={`transition ${isActive('/') ? 'text-lime-accent' : 'text-slate-300 hover:text-white'}`}
        >
          🏠 Overview
        </Link>
        <Link
          to="/citizen"
          className={`transition ${isActive('/citizen') ? 'text-lime-accent' : 'text-slate-300 hover:text-white'}`}
        >
          🏡 Resident Intake
        </Link>
        <Link
          to="/officer"
          className={`transition ${isActive('/officer') ? 'text-lime-accent' : 'text-slate-300 hover:text-white'}`}
        >
          👮 Officer Dashboard
        </Link>
        <Link
          to="/digital-twin"
          className={`transition ${isActive('/digital-twin') ? 'text-lime-accent' : 'text-slate-300 hover:text-white'}`}
        >
          🏙️ Ward Digital Twin
        </Link>
        <Link
          to="/analytics"
          className={`transition ${isActive('/analytics') ? 'text-lime-accent' : 'text-slate-300 hover:text-white'}`}
        >
          📊 Analytics & Heatmap
        </Link>
        <Link
          to="/login"
          className="bg-lime-accent hover:opacity-90 text-slate-900 px-4 py-2 rounded-lg font-extrabold transition shadow"
        >
          🔑 Single Sign-On
        </Link>
      </div>
    </nav>
  );
}
