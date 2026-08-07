import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [activeTab, setActiveTab] = useState('all');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return alert('Please enter your name and email');
    setContactSubmitted(true);
  };

  const INNOVATION_PILLARS = [
    {
      id: 1,
      title: "1. Explainable AI Governance",
      desc: "Every AI recommendation is transparent, explainable with confidence scores, matched rules, historical cases, and reviewable by authorized human officers.",
      icon: "🧠",
      tag: "Governance"
    },
    {
      id: 2,
      title: "2. Predictive Civic Intelligence",
      desc: "AI predicts SLA breaches, recurring infrastructure failures, and emerging hotspots before citizens complain, enabling proactive maintenance.",
      icon: "⚠️",
      tag: "Proactive"
    },
    {
      id: 3,
      title: "3. Blockchain Trust Layer",
      desc: "Every critical workflow event is cryptographically verifiable via SHA-256 hashes, providing immutable accountability without exposing PII.",
      icon: "🛡️",
      tag: "Cryptographic"
    },
    {
      id: 4,
      title: "4. AI Digital Twin & Knowledge Graph",
      desc: "A live operational view of city infrastructure combined with relationship-aware routing enables smarter planning and cross-department coordination.",
      icon: "🏙️",
      tag: "City Brain"
    },
    {
      id: 5,
      title: "5. AI Resolution Copilot",
      desc: "The platform not only routes complaints but recommends repair strategies, equipment, materials, crew size, cost estimates (₹18,500), and ETAs.",
      icon: "🔧",
      tag: "Field Ops"
    }
  ];

  const EIGHTEEN_INNOVATIONS = [
    { num: "01", title: "Agentic Resolution Loop", desc: "AI autonomously searches contractors, issues work orders, books inspections, polls progress, and collects photo proof without human intervention.", icon: "🤖" },
    { num: "02", title: "Computer Vision Resolution Verifier", desc: "CLIP/YOLO structural image comparison verifies pothole/water leak removal before/after repair to prevent fake closures.", icon: "📷" },
    { num: "03", title: "Causal Root Cause Intelligence", desc: "Connects 23 separate complaints in a street to 1 underground drainage failure, issuing 1 root repair order instead of 23 tickets.", icon: "🔍" },
    { num: "04", title: "Predictive Grievance Prevention", desc: "Combines weather forecasts + road age + history to auto-generate preventive maintenance requests before citizens complain.", icon: "🌧️" },
    { num: "05", title: "WhatsApp Civic Assistant Bot", desc: "Full complaint lifecycle via WhatsApp: text/photo submission, reference ID, live tracking, and appeal without app download.", icon: "💬" },
    { num: "06", title: "Community Coalition / Petition Mode", desc: "Auto-upgrades issue to 'Community Petition' when 10+ citizens report, triggering council escalation and 24h response SLA.", icon: "👥" },
    { num: "07", title: "Constitutional AI Safety Guardrails", desc: "Secondary LLM pass automatically redacts Aadhaar, phone numbers, faces, license plates, doxxing, and hate speech.", icon: "🔐" },
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
    { num: "18", title: "Federated Learning City Network", desc: "Privacy-preserving shared AI model knowledge across Nagpur, Pune, Delhi, and Bengaluru without exposing citizen PII.", icon: "🌐" }
  ];

  return (
    <div className="relative text-slate-800 bg-slate-100 min-h-screen">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION (Notus JS Dark Overlay & Heading)             */}
      {/* ------------------------------------------------------------- */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh] bg-slate-900 overflow-hidden">
        {/* Background Overlay Image Pattern */}
        <div className="absolute top-0 w-full h-full bg-center bg-cover opacity-30 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80')]" />
        <div className="absolute top-0 w-full h-full bg-slate-900/80" />

        <div className="container relative mx-auto px-6 z-10">
          <div className="items-center flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-9/12 px-4 space-y-6">
              <span className="bg-lime-accent/20 text-lime-accent border border-lime-accent/40 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-widest inline-block shadow">
                PRAGATI 2.O • TRACK 3 SDG-01 • 18 AI INNOVATION DEMOS
              </span>

              <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                We spark life back into your city infrastructure.
              </h1>

              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Your trusted AI partner for intelligent civic redressal. Where Explainable AI meets municipal precision, and resident complaints find immediate accountability.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  to="/citizen"
                  className="bg-lime-accent hover:bg-lime-400 text-slate-900 font-extrabold px-8 py-4 rounded-xl text-sm transition shadow-2xl uppercase tracking-wider inline-flex items-center gap-2"
                >
                  🚨 Report a Civic Issue
                </Link>
                <Link
                  to="/officer"
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm transition border border-slate-700 uppercase tracking-wider inline-flex items-center gap-2"
                >
                  👮 Officer Operations
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Slope Divider */}
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16 transform translate-z-0">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-slate-100 fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. PITCH-READY USP STATEMENT & 5 INNOVATION PILLARS            */}
      {/* ------------------------------------------------------------- */}
      <section className="pb-20 bg-slate-100 -mt-24">
        <div className="container mx-auto px-6">
          {/* Pitch Statement Card */}
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-800 space-y-4 mb-16 max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-lime-accent uppercase tracking-widest">
              <span>PITCH-READY FINAL USP STATEMENT</span>
              <span>•</span>
              <span>BEYOND BASELINE SDG-01</span>
            </div>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium">
              "Unlike conventional grievance portals that simply register and route complaints, <span className="text-lime-accent font-extrabold">CivicFlow AI-X</span> combines <span className="text-cyan-400 font-bold">Explainable AI</span>, a <span className="text-cyan-400 font-bold">Civic Knowledge Graph</span>, a <span className="text-cyan-400 font-bold">Digital Twin</span>, <span className="text-cyan-400 font-bold">Predictive Civic Intelligence</span>, <span className="text-cyan-400 font-bold">AI Resolution Copilot</span>, and a <span className="text-cyan-400 font-bold">Blockchain Trust Layer</span> to transform complaint management into transparent, proactive, and data-driven civic operations. Every recommendation is explainable, every workflow is accountable, every critical event is verifiable, and every final decision remains under authorized human control."
            </p>
          </div>

          {/* 5 Innovation Pillars Grid */}
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-mono text-cyan-600 font-bold uppercase tracking-widest">THE 5 CORE PILLARS</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Innovation Strategy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {INNOVATION_PILLARS.map((p) => (
              <div
                key={p.id}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-3 flex flex-col justify-between hover:-translate-y-2 transition duration-300"
              >
                <div className="space-y-3">
                  <div className="text-3xl">{p.icon}</div>
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full uppercase inline-block">
                    {p.tag}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">{p.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. 18 AI INNOVATION DIFFERENTIATORS SHOWCASE MATRIX          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-pink-600 font-bold uppercase tracking-widest">COMPLETE DEMO MATRIX</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">18 AI Innovation Differentiators</h2>
            <p className="text-sm text-slate-600">
              Features built beyond standard problem statement expectations — empowering proactive, verifiable, and intelligent civic governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EIGHTEEN_INNOVATIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 hover:border-cyan-400 hover:bg-white hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="w-10 h-10 rounded-2xl bg-slate-900 text-lime-accent flex items-center justify-center font-mono font-black text-sm">
                    {item.num}
                  </span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. "WORKING WITH US IS A PLEASURE" (2-Column Feature Section)  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            {/* Left Details */}
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto space-y-5">
              <div className="text-slate-700 p-3 text-center inline-flex items-center justify-center w-14 h-14 shadow-md rounded-full bg-white text-2xl">
                👥
              </div>

              <h3 className="text-3xl font-extrabold leading-tight text-slate-900">
                Working with us is a pleasure
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                Don't let your citizens guess by attaching tooltips and complex popovers to any element. Just make sure you enable voice input or photo evidence reporting first.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                The platform comes with 18 pre-built interactive demos to help municipal officers get started faster. You can inspect confidence rationale and you're good to go.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-lime-500 text-slate-900 flex items-center justify-center text-xs font-black">✓</span>
                  Multilingual Speech-to-Text Intake (Hindi, Marathi, English)
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-lime-500 text-slate-900 flex items-center justify-center text-xs font-black">✓</span>
                  Automatic PII Privacy Shield (Aadhaar & Phone Masking)
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-lime-500 text-slate-900 flex items-center justify-center text-xs font-black">✓</span>
                  Real-Time SLA Countdown Timers & Field Copilot Estimates
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  to="/digital-twin"
                  className="font-extrabold text-cyan-600 hover:text-cyan-700 text-sm flex items-center gap-1 transition"
                >
                  Explore Ward 5 Digital Twin Heatmap →
                </Link>
              </div>
            </div>

            {/* Right Card Image */}
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-10 md:mt-0">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-2xl bg-pink-600 overflow-hidden">
                <img
                  alt="Municipal Services"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  className="w-full align-middle rounded-t-2xl h-64 object-cover"
                />
                <blockquote className="relative p-8 mb-4 bg-pink-600 text-white space-y-2">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-9"
                  >
                    <polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current" />
                  </svg>
                  <h4 className="text-xl font-extrabold text-white">Top Notch Services</h4>
                  <p className="text-xs leading-relaxed text-white/90">
                    Our automated AI triage handles road, water, and sanitation complaints 24/7 without delay, with computer vision verification and blockchain audit logs.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. "HERE ARE OUR HEROES" (Team Section - Notus JS Template)   */}
      {/* ------------------------------------------------------------- */}
      <section className="pt-20 pb-48 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4 space-y-3">
              <h2 className="text-4xl font-extrabold text-slate-900">Here are our heroes</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                According to municipal excellence standards, our dedicated engineering team drives the Pragati 2.O vision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hero 1 */}
            <div className="w-full px-4 text-center">
              <div className="bg-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
                <div className="w-24 h-24 rounded-full bg-slate-900 text-lime-accent mx-auto flex items-center justify-center font-black text-2xl shadow-md border-4 border-lime-accent">
                  PM
                </div>
                <div>
                  <h5 className="text-lg font-extrabold text-slate-800">Prathamesh Mowade</h5>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Team Lead & Architect</p>
                </div>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs">🌐</span>
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">📘</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs">💻</span>
                </div>
              </div>
            </div>

            {/* Hero 2 */}
            <div className="w-full px-4 text-center">
              <div className="bg-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
                <div className="w-24 h-24 rounded-full bg-slate-900 text-cyan-400 mx-auto flex items-center justify-center font-black text-2xl shadow-md border-4 border-cyan-400">
                  DB
                </div>
                <div>
                  <h5 className="text-lg font-extrabold text-slate-800">Dhanshree Bhorkar</h5>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">AI/ML Engineer</p>
                </div>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">🔴</span>
                  <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs">🌐</span>
                </div>
              </div>
            </div>

            {/* Hero 3 */}
            <div className="w-full px-4 text-center">
              <div className="bg-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
                <div className="w-24 h-24 rounded-full bg-slate-900 text-emerald-400 mx-auto flex items-center justify-center font-black text-2xl shadow-md border-4 border-emerald-400">
                  NM
                </div>
                <div>
                  <h5 className="text-lg font-extrabold text-slate-800">Neha Musale</h5>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Frontend UX Lead</p>
                </div>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs">🎨</span>
                  <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs">🌐</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs">📷</span>
                </div>
              </div>
            </div>

            {/* Hero 4 */}
            <div className="w-full px-4 text-center">
              <div className="bg-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
                <div className="w-24 h-24 rounded-full bg-slate-900 text-amber-400 mx-auto flex items-center justify-center font-black text-2xl shadow-md border-4 border-amber-400">
                  YK
                </div>
                <div>
                  <h5 className="text-lg font-extrabold text-slate-800">Yash Kawale</h5>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">DevOps & Systems</p>
                </div>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs">🏀</span>
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">🔴</span>
                  <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. "WANT TO WORK WITH US?" CONTACT FORM (Notus JS Overlay Form) */}
      {/* ------------------------------------------------------------- */}
      <section className="pb-20 relative block bg-slate-900 text-white">
        {/* Diagonal Top Shape */}
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 transform translate-z-0">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-slate-900 fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-6">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4 space-y-3">
              <h2 className="text-4xl font-extrabold text-white">Build something with us</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Put the power of Explainable AI & Municipal Triage to work in your ward. Fill out the contact form below and our engineering team will get in touch within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Card floating over dark footer section */}
      <section className="relative block py-12 lg:pt-0 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-32 -mt-20">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-3xl bg-white p-8 md:p-10 border border-slate-200">
                {contactSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <span className="text-6xl block">✉️</span>
                    <h4 className="text-2xl font-black text-slate-800">Message Received!</h4>
                    <p className="text-sm text-slate-600">
                      Thank you for contacting <span className="font-bold text-slate-800">{contactForm.name}</span>. Our municipal engineering team will respond to <span className="font-mono text-cyan-600 font-bold">{contactForm.email}</span> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactSubmitted(false)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h4 className="text-2xl font-extrabold text-slate-800">Want to work with us?</h4>
                      <p className="leading-relaxed text-slate-500 text-xs">
                        Complete this form and we will get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="relative w-full mb-3 space-y-2">
                      <label className="block uppercase text-slate-600 text-xs font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="border-0 px-4 py-3.5 placeholder-slate-400 text-slate-700 bg-slate-100 rounded-xl text-sm shadow focus:outline-none focus:ring-2 focus:ring-slate-400 w-full transition"
                        placeholder="Full Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      />
                    </div>

                    <div className="relative w-full mb-3 space-y-2">
                      <label className="block uppercase text-slate-600 text-xs font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="border-0 px-4 py-3.5 placeholder-slate-400 text-slate-700 bg-slate-100 rounded-xl text-sm shadow focus:outline-none focus:ring-2 focus:ring-slate-400 w-full transition"
                        placeholder="Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      />
                    </div>

                    <div className="relative w-full mb-3 space-y-2">
                      <label className="block uppercase text-slate-600 text-xs font-bold">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-4 py-3.5 placeholder-slate-400 text-slate-700 bg-slate-100 rounded-xl text-sm shadow focus:outline-none focus:ring-2 focus:ring-slate-400 w-full transition"
                        placeholder="Type a message..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        type="submit"
                        className="bg-slate-900 text-white hover:bg-slate-800 text-sm font-extrabold uppercase px-8 py-4 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none w-full transition tracking-wider"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
