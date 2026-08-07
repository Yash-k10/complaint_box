import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [activeMapFilter, setActiveMapFilter] = useState('All');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return alert('Please enter your name and email');
    setContactSubmitted(true);
  };

  const KPI_CARDS = [
    { value: "98.6%", label: "AI Accuracy", trend: "+2.5% this month", color: "from-violet-500 to-indigo-600" },
    { value: "1.2 min", label: "Avg AI Triage", trend: "Instant Routing", color: "from-blue-500 to-cyan-500" },
    { value: "96%", label: "SLA Success Rate", trend: "SHA-256 Verified", color: "from-emerald-500 to-teal-600" },
    { value: "24/7", label: "AI Assistant", trend: "WhatsApp + Speech", color: "from-amber-500 to-orange-600" }
  ];

  const LIVE_STATS_STRIP = [
    { label: "Active Complaints", count: 124, dot: "bg-emerald-400 animate-ping", text: "text-emerald-400" },
    { label: "Under Review", count: 32, dot: "bg-amber-400", text: "text-amber-400" },
    { label: "Resolved Today", count: 18, dot: "bg-cyan-400", text: "text-cyan-400" },
    { label: "Critical Escalated", count: 4, dot: "bg-red-500 animate-pulse", text: "text-red-400" }
  ];

  const WHY_CIVICFLOW_CARDS = [
    {
      title: "Explainable AI (XAI)",
      desc: "Every recommendation includes confidence score (96%), reasoning rules, and human officer override logs.",
      icon: "🧠",
      border: "border-cyan-500/40"
    },
    {
      title: "AI Civic Digital Twin",
      desc: "Live city infrastructure telemetry (Ward 5 Road 62%, Water 91%) visualizing spatial degradation in real time.",
      icon: "🏙️",
      border: "border-purple-500/40"
    },
    {
      title: "Blockchain Trust Audit",
      desc: "Immutable SHA-256 event hashes for every complaint creation, AI recommendation, and repair verification.",
      icon: "🛡️",
      border: "border-emerald-500/40"
    },
    {
      title: "Predictive Analytics",
      desc: "Weather & asset age integration predicts failure hotspots before citizens complain, saving municipal budgets.",
      icon: "⚠️",
      border: "border-amber-500/40"
    }
  ];

  const WORKFLOW_STEPS = [
    { step: "01", name: "Citizen Report", desc: "Speech, Text, Photo, or WhatsApp Bot", icon: "📱" },
    { step: "02", name: "AI Classification", desc: "NLP entity extraction & PII masking", icon: "🧠" },
    { step: "03", name: "Department Route", desc: "Ward & jurisdiction rules applied", icon: "🔀" },
    { step: "04", name: "Officer Triage", desc: "Kanban board & Copilot cost specs", icon: "👮" },
    { step: "05", name: "Field Worker", desc: "60s Agentic contractor dispatch", icon: "🔧" },
    { step: "06", name: "Visual Verification", desc: "CLIP/YOLO photo match before closure", icon: "📷" },
    { step: "07", name: "Resolved", desc: "Citizen feedback & Blockchain hash", icon: "✅" }
  ];

  const EIGHTEEN_INNOVATIONS = [
    { num: "01", title: "Agentic Resolution Loop", desc: "AI autonomously searches contractors, issues work orders, books inspections, polls progress, and collects photo proof.", icon: "🤖" },
    { num: "02", title: "Computer Vision Verifier", desc: "CLIP/YOLO structural image comparison verifies pothole/water leak removal before/after repair to prevent fake closures.", icon: "📷" },
    { num: "03", title: "Causal Root Cause Intelligence", desc: "Connects 23 separate complaints in a street to 1 underground drainage failure, issuing 1 root repair order.", icon: "🔍" },
    { num: "04", title: "Predictive Grievance Prevention", desc: "Combines weather forecasts + road age + history to auto-generate preventive maintenance requests before complaints arrive.", icon: "🌧️" },
    { num: "05", title: "WhatsApp Civic Assistant Bot", desc: "Full complaint lifecycle via WhatsApp: text/photo submission, reference ID, live tracking, and appeal without app download.", icon: "💬" },
    { num: "06", title: "Community Coalition Mode", desc: "Auto-upgrades issue to 'Community Petition' when 10+ citizens report, triggering council escalation and 24h response SLA.", icon: "👥" },
    { num: "07", title: "Constitutional Safety Shield", desc: "Secondary LLM pass automatically redacts Aadhaar, phone numbers, faces, license plates, doxxing, and hate speech.", icon: "🔐" },
    { num: "08", title: "Explainable AI (XAI) Engine", desc: "Provides confidence scores (96%), matched keywords, applied rules, alternative department routes, and human override logs.", icon: "🧠" },
    { num: "09", title: "Resolution Knowledge Graph", desc: "Dynamic graph linking complaints, government assets, departments, officers, contractors, and historical repair data.", icon: "🕸️" },
    { num: "10", title: "Learning City Brain", desc: "Every resolved complaint feeds back repair duration, cost, contractor rating, and citizen satisfaction to optimize future routing.", icon: "💡" },
    { num: "11", title: "AI Civic Digital Twin", desc: "Virtual ward infrastructure health tracking: Ward 5 Road 62%, Water 91%, Sanitation 48% with predictive risk map.", icon: "🏙️" },
    { num: "12", title: "Citizen Trust Index", desc: "Rates municipal departments on SLA compliance, transparency, resolution quality, citizen feedback, and appeal rates.", icon: "⭐" },
    { num: "13", title: "Community Impact Score", desc: "Prioritizes complaints based on affected citizens, nearby schools/hospitals, traffic disruption, and duplicate reports.", icon: "📊" },
    { num: "14", title: "AI Resolution Copilot", desc: "Recommends repair methods (Hot-mix asphalt), equipment, crew size (4 crew), estimated cost (₹18,500), and SLA ETA (6 Hours).", icon: "🔧" },
    { num: "15", title: "Blockchain Trust Layer", desc: "Stores immutable SHA-256 hashes of complaint creation, AI recommendations, officer overrides, SLA events, and resolution proof.", icon: "⛓️" },
    { num: "16", title: "Predictive Maintenance", desc: "Recommends complete road resurfacing after 34 repeated pothole complaints, saving long-term municipal budgets.", icon: "🛣️" },
    { num: "17", title: "AI Policy Advisor", desc: "Generates executive recommendations: 'Allocate ₹18 Lakh for Ward 7 drainage upgrade for projected 48% complaint drop'.", icon: "🏛️" },
    { num: "18", title: "Federated City Network", desc: "Privacy-preserving shared AI model knowledge across Nagpur, Pune, Delhi, and Bengaluru without exposing citizen PII.", icon: "🌐" }
  ];

  const TECH_CHIPS = ["AI NLP", "YOLO Computer Vision", "Blockchain SHA-256", "GIS Telemetry", "Machine Learning", "Knowledge Graph", "Digital Twin", "React 18", "Node.js", "Express API"];

  const USP_BULLETS = [
    "Explainable AI (96% Confidence)",
    "Blockchain SHA-256 Audit Trail",
    "Ward Infrastructure Digital Twin",
    "Predictive Maintenance & Weather Sync",
    "60s Agentic Resolution Loop",
    "Civic Knowledge Graph Integration",
    "Human-in-the-Loop Override Log",
    "Multilingual Speech-to-Text (EN, HI, MR)",
    "Constitutional Privacy Shield (PII Masking)"
  ];

  return (
    <div className="space-y-20 pb-20 max-w-7xl mx-auto px-6 lg:px-10 py-10 relative">
      {/* Background Animated Gradient Atmosphere */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-violet-600/15 via-blue-600/15 to-emerald-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION (2-Column Split with Digital Twin Graphic)   */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-800/80 p-8 md:p-14 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, CTAs, Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-lime-accent/40 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-lime-accent shadow-lg">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
              <span>PRAGATI 2.O • TRACK 3 SDG-01 • 18 AI DEMOS LIVE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Transforming City Operations with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-accent via-cyan-400 to-emerald-400">
                Explainable AI & Digital Twins
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Where Explainable AI meets municipal precision. Report community issues with speech, auto-detect locations, and track resolutions live with cryptographic trust.
            </p>

            {/* High-Impact CTA Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <Link
                to="/citizen"
                className="bg-lime-accent hover:opacity-90 text-slate-900 font-black px-4 py-3.5 rounded-2xl text-xs transition shadow-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
              >
                🚨 Report Issue
              </Link>
              <Link
                to="/citizen?tab=track"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-extrabold px-4 py-3.5 rounded-2xl text-xs transition shadow-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
              >
                📍 Live Tracking
              </Link>
              <Link
                to="/officer"
                className="bg-slate-900 hover:bg-slate-950 text-white font-extrabold px-4 py-3.5 rounded-2xl text-xs transition border border-slate-700 shadow-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
              >
                🤖 AI Demo
              </Link>
              <Link
                to="/analytics"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-black px-4 py-3.5 rounded-2xl text-xs transition shadow-xl text-center flex items-center justify-center gap-1.5 uppercase tracking-wider"
              >
                📊 Dashboard
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Digital Twin IoT Interactive City Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 p-6 rounded-3xl border border-cyan-500/30 shadow-2xl space-y-4 font-mono text-xs relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  WARD 5 DIGITAL TWIN TELEMETRY
                </span>
                <span className="text-[10px] text-slate-500">LIVE FEED ✓</span>
              </div>

              {/* Infrastructure Nodes Graphic */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
                  <span className="text-slate-400 text-[10px] block">🛣️ Roads Health</span>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-extrabold">62%</span>
                    <span className="text-[9px] text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">Risk Alert</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-[62%]" />
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
                  <span className="text-slate-400 text-[10px] block">💧 Water Grid</span>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-400 font-extrabold">91%</span>
                    <span className="text-[9px] text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded">Optimal</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[91%]" />
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
                  <span className="text-slate-400 text-[10px] block">🧹 Sanitation</span>
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 font-extrabold">48%</span>
                    <span className="text-[9px] text-red-300 bg-red-400/20 px-2 py-0.5 rounded">Action Required</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[48%]" />
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
                  <span className="text-slate-400 text-[10px] block">💡 Smart Lighting</span>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-extrabold">88%</span>
                    <span className="text-[9px] text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded">Connected</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[88%]" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <span className="text-lime-accent font-bold">🤖 Agentic Resolution Loop:</span>
                <p>Contractor dispatched for CMP-2026-882 • Hot-mix asphalt asphalt ordered • 6h SLA countdown live.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. KPI METRIC CARDS ROW (Point #1)                             */}
      {/* ------------------------------------------------------------- */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-800/90 p-6 rounded-3xl border border-slate-700 shadow-xl space-y-2 relative overflow-hidden group hover:border-lime-accent/50 transition duration-300"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.color} opacity-10 rounded-full blur-xl`} />
            <span className="text-3xl md:text-4xl font-black text-white block">{card.value}</span>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">{card.label}</h4>
            <span className="text-[10px] font-mono text-lime-accent font-bold block pt-1">{card.trend}</span>
          </div>
        ))}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. LIVE DASHBOARD STRIP (Point #2)                            */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-900/90 p-6 rounded-3xl border border-slate-700/80 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center font-mono">
          {LIVE_STATS_STRIP.map((item, idx) => (
            <div key={idx} className="pt-3 md:pt-0 space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${item.dot}`} />
                <span className="text-xs text-slate-400 font-semibold">{item.label}</span>
              </div>
              <span className={`text-3xl font-black ${item.text}`}>{item.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. WHY CIVICFLOW AI-X? (Point #3 & #4 Progress Bars)          */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-lime-accent font-bold uppercase tracking-widest">KEY DIFFERENTIATORS</span>
          <h2 className="text-3xl md:text-4xl font-black text-white">Why CivicFlow AI-X?</h2>
          <p className="text-xs md:text-sm text-slate-400">
            Engineered specifically to solve municipal bottlenecks with Explainable AI, Digital Twins, and Blockchain accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CIVICFLOW_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`bg-slate-800/80 p-6 rounded-3xl border ${card.border} space-y-4 shadow-xl hover:-translate-y-1 transition duration-300`}
            >
              <div className="text-3xl">{card.icon}</div>
              <h4 className="text-lg font-extrabold text-white">{card.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Gradient Progress Bars (Point #4) */}
        <div className="bg-slate-800/90 p-8 rounded-3xl border border-slate-700 shadow-2xl space-y-6 max-w-4xl mx-auto">
          <h3 className="text-sm font-mono font-bold text-lime-accent uppercase tracking-widest text-center">
            PERFORMANCE & ACCURACY BENCHMARKS
          </h3>

          <div className="space-y-4 text-xs font-mono">
            {/* Bar 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-slate-200">
                <span>AI Categorization & Route Accuracy</span>
                <span className="text-lime-accent font-bold">98.6% <span className="text-emerald-400 text-[10px]">↑ +2.5%</span></span>
              </div>
              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-700 p-0.5">
                <div className="bg-gradient-to-r from-violet-500 to-blue-500 h-full rounded-full w-[98.6%]" />
              </div>
            </div>

            {/* Bar 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-slate-200">
                <span>Municipal SLA Compliance Rate</span>
                <span className="text-cyan-400 font-bold">96.2% <span className="text-emerald-400 text-[10px]">↑ +4.1%</span></span>
              </div>
              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-700 p-0.5">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full w-[96.2%]" />
              </div>
            </div>

            {/* Bar 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-slate-200">
                <span>Computer Vision Verification Match</span>
                <span className="text-amber-400 font-bold">94.8% <span className="text-emerald-400 text-[10px]">↑ +3.0%</span></span>
              </div>
              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-700 p-0.5">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full w-[94.8%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. PLATFORM WORKFLOW HORIZONTAL TIMELINE (Point #6)           */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">END-TO-END PIPELINE</span>
          <h2 className="text-3xl md:text-4xl font-black text-white">Platform Resolution Workflow</h2>
          <p className="text-xs text-slate-400">From resident report to verifiable completion in 7 automated steps.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {WORKFLOW_STEPS.map((w, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center space-y-2 hover:border-cyan-400 transition"
            >
              <span className="text-xs font-mono text-lime-accent font-bold block">{w.step}</span>
              <span className="text-2xl block">{w.icon}</span>
              <h5 className="text-xs font-extrabold text-white">{w.name}</h5>
              <p className="text-[10px] text-slate-400 leading-tight">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. IMPACT NUMBERS BANNER (Point #7)                           */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-gradient-to-r from-violet-900/60 via-slate-900 to-blue-900/60 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-black text-lime-accent block">25,000+</span>
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Complaints Processed</span>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-black text-cyan-400 block">96%</span>
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Citizen Satisfaction</span>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-black text-emerald-400 block">18</span>
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Departments Connected</span>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-5xl font-black text-amber-400 block">12 sec</span>
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Avg AI Classification</span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. INTERACTIVE SMART CITY MAP PREVIEW (Point #9)              */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">SPATIAL TELEMETRY</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">🗺️ Smart City Heatmap Preview</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 text-xs font-mono">
            {['All', 'Roads', 'Garbage', 'Water', 'Electricity'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveMapFilter(cat)}
                className={`px-3 py-1.5 rounded-xl border transition ${
                  activeMapFilter === cat
                    ? 'bg-lime-accent text-slate-900 border-lime-accent font-bold'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                ● {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Map Card */}
        <div className="bg-slate-800/90 p-6 rounded-3xl border border-slate-700 shadow-2xl space-y-4">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[220px] flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-cyan-400 font-bold">LIVE MAP TELEMETRY • NAKSHATRA WARD 12</span>
              <span className="text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/50">
                12 Active Pins Layered
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs font-mono text-center">
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-bold">● Pothole Cluster</span>
                <span className="text-slate-400 block text-[10px]">Laxmi Nagar Main Rd</span>
              </div>
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                <span className="text-cyan-400 font-bold">● Pipe Leakage</span>
                <span className="text-slate-400 block text-[10px]">Ward 5 Market Rd</span>
              </div>
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-bold">● Garbage Bin</span>
                <span className="text-slate-400 block text-[10px]">Ward 7 Public Park</span>
              </div>
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                <span className="text-purple-400 font-bold">● Streetlight Out</span>
                <span className="text-slate-400 block text-[10px]">Ward 12 Sector 4</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link
                to="/digital-twin"
                className="inline-block bg-lime-accent text-slate-900 font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:opacity-90 transition"
              >
                Launch Full Digital Twin Map →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. 18 AI INNOVATION DIFFERENTIATORS CATALOG                   */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">COMPLETE DEMO CATALOG</span>
          <h2 className="text-3xl md:text-4xl font-black text-white">18 AI Innovation Differentiators</h2>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Every feature engineered to answer: "What can CivicFlow AI-X do that traditional platforms cannot?"
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EIGHTEEN_INNOVATIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-3 hover:border-lime-accent/60 transition duration-300 shadow-xl group"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-lime-accent font-bold bg-slate-900 px-3 py-1 rounded-xl border border-slate-700">
                  #{item.num}
                </span>
                <span className="text-2xl group-hover:scale-110 transition">{item.icon}</span>
              </div>
              <h4 className="text-base font-extrabold text-white">{item.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. WHY WE'RE DIFFERENT CHECKMARK GRID (Point #11)             */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-900/90 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-lime-accent font-bold uppercase tracking-widest">SUMMARY COMPARISON</span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Why We're Different</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2">
          {USP_BULLETS.map((bullet, idx) => (
            <div key={idx} className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-lime-accent font-extrabold text-sm">✓</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10. POWERED BY TECHNOLOGY CHIPS (Point #12)                   */}
      {/* ------------------------------------------------------------- */}
      <section className="text-center space-y-4">
        <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest">POWERED BY MODERN TECH STACK</span>
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {TECH_CHIPS.map((chip, idx) => (
            <span
              key={idx}
              className="bg-slate-800 text-cyan-300 text-xs font-mono font-bold px-4 py-2 rounded-xl border border-slate-700 shadow"
            >
              ⚡ {chip}
            </span>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 11. MUNICIPAL OFFICER TESTIMONIAL (Point #13)                 */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-800/90 p-8 rounded-3xl border border-slate-700 text-center max-w-3xl mx-auto space-y-3 shadow-2xl">
        <div className="text-amber-400 text-lg font-bold">★★★★★</div>
        <p className="text-base text-slate-200 font-medium italic">
          "The complaint reached our dispatch team instantly with exact AI priority, CLIP photo verification, and estimated repair materials. Resolved the drainage blockage in 6 hours."
        </p>
        <span className="text-xs font-mono text-lime-accent font-bold block">
          — Er. Rajesh Sharma, Executive Municipal Engineer, Ward 12 Nagpur
        </span>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 12. CONTACT FORM SECTION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-800/90 p-8 md:p-12 rounded-3xl border border-slate-700/80 shadow-2xl max-w-4xl mx-auto space-y-6">
        <div className="space-y-1 text-center">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">GET IN TOUCH</span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Want to deploy CivicFlow AI-X in your ward?</h3>
          <p className="text-xs text-slate-400">Complete this form and our municipal engineering team will get back to you within 24 hours.</p>
        </div>

        {contactSubmitted ? (
          <div className="text-center py-8 space-y-4 bg-slate-900/90 p-8 rounded-2xl border border-emerald-500/40">
            <span className="text-6xl block">✉️</span>
            <h4 className="text-2xl font-black text-emerald-400">Message Received!</h4>
            <p className="text-sm text-slate-300">
              Thank you for contacting <span className="font-bold text-white">{contactForm.name}</span>. Our municipal engineering team will respond to <span className="font-mono text-cyan-400 font-bold">{contactForm.email}</span> shortly.
            </p>
            <button
              type="button"
              onClick={() => setContactSubmitted(false)}
              className="bg-lime-accent hover:opacity-90 text-slate-900 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block uppercase text-slate-300 text-xs font-bold font-mono">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm"
                  placeholder="Full Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="block uppercase text-slate-300 text-xs font-bold font-mono">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm"
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block uppercase text-slate-300 text-xs font-bold font-mono">Message / Municipal Requirement</label>
              <textarea
                rows="4"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm"
                placeholder="Type your municipal requirements or feedback..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-accent hover:opacity-90 text-slate-900 text-sm font-black uppercase py-4 rounded-2xl shadow-xl transition tracking-wider"
            >
              🚀 Send Message to Municipal Team
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
