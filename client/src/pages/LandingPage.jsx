import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="pb-16 space-y-12">
      {/* Top Notification Banner Sub-bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 md:px-8 flex flex-wrap justify-between items-center gap-2 text-slate-400">
        <div className="flex items-center gap-2 flex-wrap">
          <span>📍 Nagpur Municipal Corporation</span>
          <span>•</span>
          <span>⏰ 24/7 Live AI Triage Active</span>
        </div>
        <div className="flex items-center gap-3 font-semibold text-slate-300">
          <span>Track 3 SDG-01</span>
          <span>•</span>
          <span>Pragati 2.O</span>
        </div>
      </div>

      {/* Main Hero Container Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-slate-800 p-6 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Floating Badge (18 AI Demos) */}
          <div className="hidden lg:flex absolute top-6 right-8 bg-lime-accent text-slate-900 w-28 h-28 rounded-full font-black flex-col items-center justify-center shadow-2xl z-20 border-4 border-slate-900 transform hover:scale-105 transition">
            <span className="text-2xl leading-none">18</span>
            <span className="text-[10px] uppercase tracking-wider font-extrabold">AI DEMOS</span>
          </div>

          <div className="space-y-6 z-10">
            <span className="text-xs font-bold text-lime-accent uppercase tracking-widest block">
              TRUSTED CIVIC OPERATIONS PLATFORM
            </span>

            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              We spark life back into your city infrastructure
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              Your trusted AI partner for intelligent civic redressal. Where Explainable AI meets municipal precision, and resident complaints find immediate accountability.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/citizen"
                className="bg-lime-accent hover:opacity-90 text-slate-900 font-extrabold px-6 md:px-8 py-3.5 rounded-xl text-sm transition shadow-lg inline-flex items-center gap-2"
              >
                🚨 Report a Civic Issue
              </Link>
              <Link
                to="/officer"
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition inline-flex items-center gap-2"
              >
                👮 Officer Dashboard
              </Link>
            </div>
          </div>

          {/* Hero Right Visual Box */}
          <div className="bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-700 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-lime-accent/10 border-2 border-lime-accent flex items-center justify-center text-3xl">
              🏙️
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">AI Civic Digital Twin</h3>
              <p className="text-xs text-slate-400 max-w-xs">
                Real-time infrastructure failure prediction & dynamic ward heatmaps.
              </p>
            </div>
            <Link
              to="/digital-twin"
              className="text-xs text-lime-accent font-bold hover:underline"
            >
              Explore Ward 5 Digital Twin →
            </Link>
          </div>
        </div>
      </section>

      {/* Numbered Category Grid Section (01, 02, 03, 04) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 01 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 font-bold block text-right">01</span>
              <div className="text-3xl">🛣️</div>
              <h3 className="text-lg font-bold text-white">Road & Pothole Repair</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hot-mix asphalt patching, road resurfacing & safety barrier repair.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 font-bold block text-right">02</span>
              <div className="text-3xl">🚰</div>
              <h3 className="text-lg font-bold text-white">Water & Sewage Mainlines</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hydro pipe leakage repair, drainage clearance & sewer overflow containment.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 font-bold block text-right">03</span>
              <div className="text-3xl">⚡</div>
              <h3 className="text-lg font-bold text-white">Electrical & Lighting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Smart LED pole repair, transformer load balancing & blackout prevention.
              </p>
            </div>
          </div>

          {/* Card 04 (Highlight Lime Card) */}
          <div className="bg-lime-accent text-slate-900 p-6 rounded-2xl space-y-4 shadow-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-800 font-bold block text-right">04</span>
              <div className="text-3xl">🎧</div>
              <h3 className="text-lg font-black">24/7 AI Citizen Helpdesk</h3>
              <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                Multilingual speech-to-text, photo verification & auto PII Privacy Shield.
              </p>
            </div>
            <Link
              to="/citizen"
              className="inline-block text-center bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-slate-800 transition shadow"
            >
              Start Voice Complaint →
            </Link>
          </div>
        </div>
      </section>

      {/* "Why Choose Us" Checkmark Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-lime-accent font-bold uppercase">TOP REASONS</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Why Choose CivicFlow AI-X</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4 items-start shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-lime-accent font-black text-lg shrink-0">
                ✓
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Explainable AI (XAI)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  96% confidence score with transparent rules applied and 1-click officer human override.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4 items-start shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-lime-accent font-black text-lg shrink-0">
                ✓
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">AI Resolution Copilot</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Instant repair strategies, estimated cost breakdowns (₹18,500), and crew sizes for field engineers.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex gap-4 items-start shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-lime-accent font-black text-lg shrink-0">
                ✓
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">SHA-256 Blockchain Audit</h3>
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
