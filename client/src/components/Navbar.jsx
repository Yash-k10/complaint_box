import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50 px-6 py-3.5 flex justify-between items-center">
      <Link to="/" className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
        ⚡ CivicFlow AI-X
      </Link>
      <div className="hidden md:flex items-center gap-5 text-xs font-semibold">
        <Link to="/citizen" className="text-slate-300 hover:text-cyan-400 transition flex items-center gap-1">
          🏡 Citizen Portal
        </Link>
        <Link to="/officer" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-1">
          👮 Officer Dashboard
        </Link>
        <Link to="/analytics" className="text-slate-300 hover:text-cyan-400 transition flex items-center gap-1">
          📊 Analytics
        </Link>
        <Link to="/digital-twin" className="text-slate-300 hover:text-cyan-400 transition flex items-center gap-1">
          🏙️ Digital Twin
        </Link>
        <div className="flex gap-2 pl-2 border-l border-slate-700">
          <Link to="/login" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 px-3.5 py-1.5 rounded-lg text-white font-bold transition shadow">
            🔑 Dual Portal Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
