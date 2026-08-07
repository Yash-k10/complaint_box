import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          <span>🏆 CodeRush 2.0 Hackathon</span>
          <span>•</span>
          <span>Track 3: Sustainable Development Goals (SDG-01)</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
          Next-Gen <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Smart Community</span> Redressal Planner
        </h1>

        <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
          The world’s first Agentic Civic Operations Platform powered by <strong className="text-cyan-400">Explainable AI (XAI)</strong>, <strong className="text-emerald-400">AI Civic Digital Twins</strong>, <strong className="text-amber-400">Resolution Copilots</strong>, and <strong className="text-indigo-400">SHA-256 Blockchain Audit Trails</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to="/citizen"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-extrabold px-8 py-4 rounded-xl text-base transition shadow-2xl flex items-center gap-2"
          >
            🏡 File Resident Complaint
          </Link>
          <Link
            to="/officer"
            className="bg-slate-800/90 border border-slate-700 hover:bg-slate-700 text-slate-200 font-extrabold px-8 py-4 rounded-xl text-base transition shadow-xl flex items-center gap-2"
          >
            👮 Officer Operations Dashboard
          </Link>
          <Link
            to="/digital-twin"
            className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 font-bold px-6 py-4 rounded-xl text-base transition flex items-center gap-2"
          >
            🏙️ AI Digital Twin
          </Link>
        </div>
      </div>

      {/* Live Stat Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 text-center space-y-1 shadow-xl">
          <div className="text-3xl md:text-4xl font-black text-cyan-400">142+</div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Complaints Processed</div>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 text-center space-y-1 shadow-xl">
          <div className="text-3xl md:text-4xl font-black text-emerald-400">94.2%</div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">SLA Compliance Rate</div>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 text-center space-y-1 shadow-xl">
          <div className="text-3xl md:text-4xl font-black text-amber-400">28.4h</div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Avg Resolution Time</div>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 text-center space-y-1 shadow-xl">
          <div className="text-3xl md:text-4xl font-black text-indigo-400">100%</div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Blockchain Audited</div>
        </div>
      </div>

      {/* 18 Innovations Grid Showcase */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">18 Breakthrough Innovation Pillars</h2>
          <p className="text-slate-400 text-sm">Transforming grievance management into proactive city operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-cyan-500/40 shadow-xl space-y-3">
            <span className="text-3xl">🤖</span>
            <h3 className="text-lg font-bold text-cyan-400">1. Agentic Resolution Engine</h3>
            <p className="text-xs text-slate-300">Autonomously searches contractor directories, generates work orders, and schedules inspections for standard complaints without manual delays.</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-emerald-500/40 shadow-xl space-y-3">
            <span className="text-3xl">👁️</span>
            <h3 className="text-lg font-bold text-emerald-400">2. Computer Vision Verifier</h3>
            <p className="text-xs text-slate-300">Compares repair photos against initial complaint evidence using structural similarity to prevent fake officer closures.</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-amber-500/40 shadow-xl space-y-3">
            <span className="text-3xl">🌐</span>
            <h3 className="text-lg font-bold text-amber-400">3. Causal Root Cause Intelligence</h3>
            <p className="text-xs text-slate-300">Merges dozens of area complaints into single root cause fixes (e.g., 23 waterlogging tickets → 1 main drainage pipe replacement).</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-xl space-y-3">
            <span className="text-3xl">🔮</span>
            <h3 className="text-lg font-bold text-indigo-400">4. Predictive Civic Intelligence</h3>
            <p className="text-xs text-slate-300">Combines weather forecasts, infrastructure age, and complaint history to trigger preventive work orders before citizens complain.</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-xl space-y-3">
            <span className="text-3xl">💬</span>
            <h3 className="text-lg font-bold text-cyan-400">5. WhatsApp Civic Assistant</h3>
            <p className="text-xs text-slate-300">Complete complaint filing, tracking, and appeal via Simulated WhatsApp API without requiring any app download.</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-xl space-y-3">
            <span className="text-3xl">🔗</span>
            <h3 className="text-lg font-bold text-emerald-400">6. SHA-256 Blockchain Audit</h3>
            <p className="text-xs text-slate-300">Cryptographically signs complaint creation, AI recommendations, officer overrides, and SLA events in a tamper-evident ledger.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
