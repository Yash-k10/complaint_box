import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  // Determine active portal title badge
  const getPortalBadge = () => {
    if (location.pathname === '/citizen') return { label: '📢 Citizen Portal', bg: 'bg-sky-100 text-sky-700 border-sky-300' };
    if (location.pathname === '/officer') return { label: '👥 Admin Command', bg: 'bg-indigo-100 text-indigo-700 border-indigo-300' };
    if (location.pathname === '/worker') return { label: '👷 Worker Portal', bg: 'bg-emerald-100 text-emerald-700 border-emerald-300' };
    if (location.pathname === '/digital-twin') return { label: '🏙️ Ward Digital Twin', bg: 'bg-purple-100 text-purple-700 border-purple-300' };
    if (location.pathname === '/analytics') return { label: '📊 Analytics Center', bg: 'bg-amber-100 text-amber-700 border-amber-300' };
    return { label: '🛡️ Official Platform', bg: 'bg-slate-100 text-slate-700 border-slate-300' };
  };

  const portalBadge = getPortalBadge();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 lg:px-12 py-3 flex justify-between items-center shadow-sm">
      {/* Brand Logo (Matching Screenshot) */}
      <Link to="/" className="flex items-center gap-3 text-xl font-black text-slate-800">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl shadow-md font-bold">
          🏢
        </div>
        <span className="tracking-tight text-sky-700 font-black">
          CivicFlow <span className="text-emerald-600 font-extrabold">AI-X</span>
        </span>
      </Link>

      {/* Center Active Portal Indicator Pill */}
      <div className={`hidden md:flex items-center gap-2 px-5 py-1.5 rounded-xl border text-xs font-bold ${portalBadge.bg}`}>
        <span>{portalBadge.label}</span>
      </div>

      {/* Right Navigation & User Actions */}
      <div className="flex items-center gap-4">
        {/* Navigation Quick Links */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-bold pr-3 border-r border-slate-200">
          <Link to="/" className="text-slate-600 hover:text-sky-700 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition">
            Home
          </Link>
          <Link to="/citizen" className="text-slate-600 hover:text-sky-700 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition">
            Citizen Hub
          </Link>
          <Link to="/officer" className="text-slate-600 hover:text-sky-700 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition">
            Admin Command
          </Link>
          <Link to="/digital-twin" className="text-slate-600 hover:text-sky-700 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition">
            Digital Twin
          </Link>
          <Link to="/analytics" className="text-slate-600 hover:text-sky-700 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition">
            Analytics
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            {/* User Profile Badge (Matching Screenshot) */}
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full">
              <div className="w-7 h-7 rounded-full bg-sky-700 text-white flex items-center justify-center text-xs font-bold">
                {user.role === 'officer' ? '👮' : '👤'}
              </div>
              <div className="text-left text-[11px] leading-tight">
                <span className="font-bold text-slate-800 block">{user.name || 'Gunjan Ramteke'}</span>
                <span className="text-[9px] font-extrabold uppercase text-sky-700 tracking-wider">
                  {user.role === 'officer' ? 'OFFICER' : 'CITIZEN'}
                </span>
              </div>
            </div>

            <button
              onClick={logout}
              className="text-xs font-bold text-slate-600 hover:text-red-600 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-red-50 transition"
            >
              <span>🚪</span> Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition shadow-md flex items-center gap-2"
          >
            <span>🔑</span> Portal Login
          </Link>
        )}
      </div>
    </nav>
  );
}
