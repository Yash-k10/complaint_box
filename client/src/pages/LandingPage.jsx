import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="pb-20 space-y-16">
      {/* Top Notification Banner Sub-bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-3.5 px-6 md:px-12 flex flex-wrap justify-between items-center gap-4 text-slate-400">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-lime-accent font-bold">📍 Nagpur Municipal Corporation</span>
          <span>•</span>
          <span>⏰ 24/7 Live AI Triage Active</span>
        </div>
        <div className="flex items-center gap-4 font-semibold text-slate-300">
          <span>Track 3 SDG-01</span>
          <span>•</span>
          <span>Pragati 2.O</span>
        </div>
      </div>

      {/* Main Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="bg-slate-800/80 p-8 md:p-12 rounded-3xl border border-slate-700/80 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Hero Details */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-lime-accent uppercase tracking-widest">
                TRUSTED CIVIC OPERATIONS PLATFORM
              </span>
              <span className="bg-lime-accent text-slate-900 font-black px-3.5 py-1 rounded-full text-xs shadow">
                18 AI DEMOS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              We spark life back into your city infrastructure
            </h1>

            <p className="text-slate-300 text-base leading-relaxed max-w-xl">
              Your trusted AI partner for intelligent civic redressal. Where Explainable AI meets municipal precision, and resident complaints find immediate accountability.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/citizen"
                className="bg-lime-accent hover:opacity-90 text-slate-900 font-black px-8 py-4 rounded-2xl text-sm transition shadow-lg inline-flex items-center gap-2"
              >
                🚨 Report a Civic Issue
              </Link>
              <Link
                to="/officer"
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-7 py-4 rounded-2xl text-sm transition inline-flex items-center gap-2"
              >
                👮 Officer Dashboard
              </Link>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="bg-slate-900/90 p-10 rounded-3xl border border-slate-700 flex flex-col items-center justify-center text-center space-y-5 shadow-2xl">
            <div className="w-20 h-20 rounded-2xl bg-lime-accent/10 border border-lime-accent/40 flex items-center justify-center text-4xl shadow-inner">
              🏙️
            </div>
            <div className="space-y-2 max-w-xs">
              <h3 className="text-xl font-extrabold text-white">AI Civic Digital Twin</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time infrastructure failure prediction & dynamic ward heatmaps.
              </p>
            </div>
            <Link
              to="/digital-twin"
              className="inline-block bg-slate-800 hover:bg-slate-700 text-lime-accent text-xs font-extrabold px-6 py-3 rounded-xl border border-slate-700 transition shadow mt-2"
            >
              Explore Ward 5 Digital Twin →
            </Link>
          </div>
        </div>
      </section>

      {/* Numbered Category Grid Section (01, 02, 03, 04) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* Card 01 */}
          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 space-y-6 shadow-xl flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-500 font-bold block text-right">01</span>
              <div className="text-4xl">🛣️</div>
              <h3 className="text-xl font-extrabold text-white">Road & Pothole Repair</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hot-mix asphalt patching, road resurfacing & safety barrier repair.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 space-y-6 shadow-xl flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-500 font-bold block text-right">02</span>
              <div className="text-4xl">🚰</div>
              <h3 className="text-xl font-extrabold text-white">Water & Sewage Mainlines</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hydro pipe leakage repair, drainage clearance & sewer overflow containment.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 space-y-6 shadow-xl flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-500 font-bold block text-right">03</span>
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-extrabold text-white">Electrical & Lighting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Smart LED pole repair, transformer load balancing & blackout prevention.
              </p>
            </div>
          </div>

          {/* Card 04 (Highlight Lime Card) */}
          <div className="bg-lime-accent text-slate-900 p-8 rounded-3xl space-y-6 shadow-2xl flex flex-col justify-between min-h-[260px]">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-800 font-bold block text-right">04</span>
              <div className="text-4xl">🎧</div>
              <h3 className="text-xl font-black">24/7 AI Citizen Helpdesk</h3>
              <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                Multilingual speech-to-text, photo verification & auto PII Privacy Shield.
              </p>
            </div>
            <Link
              to="/citizen"
              className="inline-block text-center bg-slate-900 text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-slate-800 transition shadow"
            >
              Start Voice Complaint →
            </Link>
          </div>
        </div>
      </section>

      {/* "Why Choose Us" Checkmark Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 mb-20">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-lime-accent font-bold uppercase tracking-widest">TOP REASONS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Why Choose CivicFlow AI-X</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 flex gap-5 items-start shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center text-lime-accent font-black text-xl shrink-0 shadow-md">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white">Explainable AI (XAI)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  96% confidence score with transparent rules applied and 1-click officer human override.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 flex gap-5 items-start shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center text-lime-accent font-black text-xl shrink-0 shadow-md">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white">AI Resolution Copilot</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Instant repair strategies, estimated cost breakdowns (₹18,500), and crew sizes for field engineers.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 flex gap-5 items-start shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center text-lime-accent font-black text-xl shrink-0 shadow-md">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white">SHA-256 Blockchain Audit</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cryptographically verifiable, tamper-evident record logging for complete government trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
