import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return alert('Please enter your name and email');
    setContactSubmitted(true);
  };

  const INNOVATION_PILLARS = [
    {
      id: 1,
      title: "1. Explainable AI Governance",
      desc: "Every AI recommendation is 100% transparent with confidence scores, matched rules, historical cases, and human-in-the-loop override.",
      icon: "🧠",
      border: "border-cyan-500/40",
      accent: "text-cyan-400"
    },
    {
      id: 2,
      title: "2. Predictive Civic Intelligence",
      desc: "AI predicts SLA breaches, weather/infra age risks, and emerging failure hotspots before citizens complain, enabling proactive maintenance.",
      icon: "⚠️",
      border: "border-amber-500/40",
      accent: "text-amber-400"
    },
    {
      id: 3,
      title: "3. Blockchain Trust Layer",
      desc: "Every critical workflow event is cryptographically verifiable via SHA-256 hashes, providing immutable accountability without exposing PII.",
      icon: "🛡️",
      border: "border-emerald-500/40",
      accent: "text-emerald-400"
    },
    {
      id: 4,
      title: "4. AI Digital Twin & Knowledge Graph",
      desc: "A live operational view of city infrastructure combined with relationship-aware routing enables smarter planning and cross-department coordination.",
      icon: "🏙️",
      border: "border-lime-accent/40",
      accent: "text-lime-accent"
    },
    {
      id: 5,
      title: "5. AI Resolution Copilot",
      desc: "Recommends repair methods, materials, equipment, crew size, estimated cost (₹18,500), and ETAs to assist field engineers directly.",
      icon: "🔧",
      border: "border-purple-500/40",
      accent: "text-purple-400"
    }
  ];

  const EIGHTEEN_INNOVATIONS = [
    { num: "01", title: "Agentic Resolution Loop", desc: "AI autonomously searches contractors, issues work orders, books inspections, polls progress, and collects photo proof without human intervention.", icon: "🤖" },
    { num: "02", title: "Computer Vision Verifier", desc: "CLIP/YOLO structural image comparison verifies pothole/water leak removal before/after repair to prevent fake closures.", icon: "📷" },
    { num: "03", title: "Causal Root Cause Intelligence", desc: "Connects 23 separate complaints in a street to 1 underground drainage failure, issuing 1 root repair order instead of 23 tickets.", icon: "🔍" },
    { num: "04", title: "Predictive Grievance Prevention", desc: "Combines weather forecasts + road age + history to auto-generate preventive maintenance requests before citizens complain.", icon: "🌧️" },
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

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-6 lg:px-10 py-10">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION (Sleek Dark Glassmorphism Hero)               */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-800/80 p-8 md:p-14 rounded-3xl border border-slate-700/80 shadow-2xl space-y-8 relative overflow-hidden">
        {/* Subtle Decorative Ambient Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-4xl mx-auto text-center">
          {/* Pulsing Badge */}
          <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-lime-accent/40 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-lime-accent shadow-lg">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
            <span>PRAGATI 2.O • TRACK 3 SDG-01 • 18 AI DEMOS LIVE</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Transforming City Operations with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-accent via-cyan-400 to-emerald-400">
              Explainable AI & Digital Twins
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Your trusted AI partner for intelligent civic redressal. Where Explainable AI meets municipal precision, and resident complaints find immediate accountability.
          </p>

          {/* Action Button Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/citizen"
              className="bg-lime-accent hover:opacity-90 text-slate-900 font-black px-8 py-4 rounded-2xl text-sm transition shadow-2xl inline-flex items-center gap-2 uppercase tracking-wider"
            >
              🚨 Report a Civic Issue
            </Link>
            <Link
              to="/officer"
              className="bg-slate-900 hover:bg-slate-950 text-white font-extrabold px-8 py-4 rounded-2xl text-sm transition border border-slate-700 inline-flex items-center gap-2 uppercase tracking-wider shadow-lg"
            >
              👮 Officer Operations Dashboard
            </Link>
          </div>

          {/* Stat Badges Row */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono max-w-3xl mx-auto">
            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-700/80 space-y-0.5">
              <span className="text-slate-400 block text-[10px]">AI Accuracy</span>
              <span className="text-lime-accent font-extrabold text-sm">96% Confidence</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-700/80 space-y-0.5">
              <span className="text-slate-400 block text-[10px]">Audit Trail</span>
              <span className="text-cyan-400 font-extrabold text-sm">SHA-256 Verified</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-700/80 space-y-0.5">
              <span className="text-slate-400 block text-[10px]">Digital Twin</span>
              <span className="text-emerald-400 font-extrabold text-sm">Ward 5 Telemetry</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-700/80 space-y-0.5">
              <span className="text-slate-400 block text-[10px]">Resolution Agent</span>
              <span className="text-amber-400 font-extrabold text-sm">60s Agentic Loop</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. PITCH-READY USP STATEMENT BANNER                           */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-lime-accent uppercase tracking-widest">
          <span>PITCH-READY FINAL USP STATEMENT</span>
          <span>•</span>
          <span>BEYOND BASELINE SDG-01</span>
        </div>
        <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium">
          "Unlike conventional grievance portals that simply register and route complaints, <span className="text-lime-accent font-extrabold">CivicFlow AI-X</span> combines <span className="text-cyan-400 font-bold">Explainable AI</span>, a <span className="text-cyan-400 font-bold">Civic Knowledge Graph</span>, a <span className="text-cyan-400 font-bold">Digital Twin</span>, <span className="text-cyan-400 font-bold">Predictive Civic Intelligence</span>, <span className="text-cyan-400 font-bold">AI Resolution Copilot</span>, and a <span className="text-cyan-400 font-bold">Blockchain Trust Layer</span> to transform complaint management into transparent, proactive, and data-driven civic operations. Every recommendation is explainable, every workflow is accountable, every critical event is verifiable, and every final decision remains under authorized human control."
        </p>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. 5 CORE INNOVATION PILLARS                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div className="space-y-1">
            <span className="text-xs font-mono text-lime-accent font-bold uppercase tracking-widest">CORE ARCHITECTURE</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">5 Core Innovation Strategy Pillars</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            Differentiated from baseline SDG-01 expectations
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INNOVATION_PILLARS.map((p) => (
            <div
              key={p.id}
              className={`bg-slate-800/80 p-6 rounded-3xl border ${p.border} space-y-4 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition duration-300`}
            >
              <div className="space-y-3">
                <div className="text-3xl">{p.icon}</div>
                <h4 className={`text-base font-extrabold ${p.accent} leading-snug`}>{p.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. 18 AI INNOVATION DIFFERENTIATORS SHOWCASE MATRIX          */}
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
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-3 hover:border-lime-accent/60 transition duration-300 shadow-xl"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-lime-accent font-bold bg-slate-900 px-3 py-1 rounded-xl border border-slate-700">
                  #{item.num}
                </span>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h4 className="text-base font-extrabold text-white">{item.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. LIVE DEMO PORTAL QUICK ACCESS                              */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">LIVE INTERACTIVE MODULES</span>
          <h2 className="text-2xl md:text-3xl font-black text-white">Explore Portal Operations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Module 1 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl">🏡</span>
              <h3 className="text-lg font-extrabold text-white">Resident Intake</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multilingual speech-to-text, photo upload, WhatsApp bot & Privacy Shield masking.
              </p>
            </div>
            <Link
              to="/citizen"
              className="inline-block text-center bg-slate-900 hover:bg-slate-950 text-lime-accent text-xs font-extrabold py-3 rounded-xl border border-slate-700 transition shadow"
            >
              Launch Resident Intake →
            </Link>
          </div>

          {/* Module 2 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl">👮</span>
              <h3 className="text-lg font-extrabold text-white">Officer Kanban</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live complaint triage, SLA countdown timers, Copilot estimates & human override.
              </p>
            </div>
            <Link
              to="/officer"
              className="inline-block text-center bg-slate-900 hover:bg-slate-950 text-cyan-400 text-xs font-extrabold py-3 rounded-xl border border-slate-700 transition shadow"
            >
              Launch Officer Triage →
            </Link>
          </div>

          {/* Module 3 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl">🏙️</span>
              <h3 className="text-lg font-extrabold text-white">Ward Digital Twin</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Virtual city infrastructure health (Roads 62%, Water 91%, Sanitation 48%) & telemetry.
              </p>
            </div>
            <Link
              to="/digital-twin"
              className="inline-block text-center bg-slate-900 hover:bg-slate-950 text-emerald-400 text-xs font-extrabold py-3 rounded-xl border border-slate-700 transition shadow"
            >
              Launch Digital Twin →
            </Link>
          </div>

          {/* Module 4 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl">📊</span>
              <h3 className="text-lg font-extrabold text-white">Analytics & Heatmap</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Predictive maintenance alerts, failure density heatmaps & department SLA compliance.
              </p>
            </div>
            <Link
              to="/analytics"
              className="inline-block text-center bg-slate-900 hover:bg-slate-950 text-amber-400 text-xs font-extrabold py-3 rounded-xl border border-slate-700 transition shadow"
            >
              Launch Analytics →
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. "HERE ARE OUR HEROES" TEAM SHOWCASE                        */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-lime-accent font-bold uppercase tracking-widest">ENGINEERING TEAM</span>
          <h2 className="text-3xl md:text-4xl font-black text-white">Here Are Our Heroes</h2>
          <p className="text-xs text-slate-400">
            Dedicated team driving the Pragati 2.O vision for municipal infrastructure excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 text-center hover:border-lime-accent/60 transition shadow-xl">
            <div className="w-20 h-20 rounded-full bg-slate-900 text-lime-accent mx-auto flex items-center justify-center font-black text-2xl border-4 border-lime-accent shadow-lg">
              PM
            </div>
            <div>
              <h5 className="text-lg font-extrabold text-white">Prathamesh Mowade</h5>
              <p className="text-xs font-bold text-lime-accent uppercase tracking-widest mt-0.5">Team Lead & Architect</p>
            </div>
            <div className="flex justify-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span>Full-Stack</span> • <span>AI Routing</span>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 text-center hover:border-cyan-400/60 transition shadow-xl">
            <div className="w-20 h-20 rounded-full bg-slate-900 text-cyan-400 mx-auto flex items-center justify-center font-black text-2xl border-4 border-cyan-400 shadow-lg">
              DB
            </div>
            <div>
              <h5 className="text-lg font-extrabold text-white">Dhanshree Bhorkar</h5>
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mt-0.5">AI/ML Engineer</p>
            </div>
            <div className="flex justify-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span>NLP Speech</span> • <span>XAI Models</span>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 text-center hover:border-emerald-400/60 transition shadow-xl">
            <div className="w-20 h-20 rounded-full bg-slate-900 text-emerald-400 mx-auto flex items-center justify-center font-black text-2xl border-4 border-emerald-400 shadow-lg">
              NM
            </div>
            <div>
              <h5 className="text-lg font-extrabold text-white">Neha Musale</h5>
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mt-0.5">Frontend UX Lead</p>
            </div>
            <div className="flex justify-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span>UI/UX Design</span> • <span>React Core</span>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 text-center hover:border-amber-400/60 transition shadow-xl">
            <div className="w-20 h-20 rounded-full bg-slate-900 text-amber-400 mx-auto flex items-center justify-center font-black text-2xl border-4 border-amber-400 shadow-lg">
              YK
            </div>
            <div>
              <h5 className="text-lg font-extrabold text-white">Yash Kawale</h5>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-0.5">DevOps & Systems</p>
            </div>
            <div className="flex justify-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span>CI/CD Pipelines</span> • <span>Blockchain</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. CONTACT / GET IN TOUCH FORM SECTION                        */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-800/90 p-8 md:p-12 rounded-3xl border border-slate-700/80 shadow-2xl max-w-4xl mx-auto space-y-6">
        <div className="space-y-1 text-center">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">GET IN TOUCH</span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Want to deployment CivicFlow AI-X in your ward?</h3>
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
