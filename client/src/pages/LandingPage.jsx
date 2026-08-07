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
            <div className="w-full lg:w-8/12 px-4 space-y-6">
              <span className="bg-lime-accent/20 text-lime-accent border border-lime-accent/40 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-widest inline-block shadow">
                PRAGATI 2.O • TRACK 3 SDG-01
              </span>

              <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                We spark life back into your city infrastructure.
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
      {/* 2. THREE FLOATING FEATURE CARDS (Notus JS Template Pattern)   */}
      {/* ------------------------------------------------------------- */}
      <section className="pb-20 bg-slate-100 -mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap">
            {/* Card 1: Red Icon */}
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl p-8 hover:-translate-y-2 transition duration-300 border border-slate-200">
                <div className="px-4 py-5 flex-auto space-y-4">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 shadow-lg rounded-full bg-red-500 mx-auto text-2xl">
                    🚩
                  </div>
                  <h6 className="text-xl font-extrabold text-slate-800">Awarded Triage Agency</h6>
                  <p className="mt-2 mb-4 text-slate-500 text-sm leading-relaxed">
                    Divide details about your product or civic complaints into actionable steps. Multilingual voice speech-to-text with auto urgency scoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Cyan Icon (Elevated Middle Card) */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-xl rounded-2xl p-8 hover:-translate-y-2 transition duration-300 border border-cyan-100">
                <div className="px-4 py-5 flex-auto space-y-4">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 shadow-lg rounded-full bg-cyan-500 mx-auto text-2xl">
                    🧠
                  </div>
                  <h6 className="text-xl font-extrabold text-slate-800">Explainable AI (XAI)</h6>
                  <p className="mt-2 mb-4 text-slate-500 text-sm leading-relaxed">
                    Keep citizens engaged by providing meaningful audit reasoning. 96% AI confidence score with 1-click human officer override capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Emerald Icon */}
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl p-8 hover:-translate-y-2 transition duration-300 border border-slate-200">
                <div className="px-4 py-5 flex-auto space-y-4">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 shadow-lg rounded-full bg-emerald-500 mx-auto text-2xl">
                    🛡️
                  </div>
                  <h6 className="text-xl font-extrabold text-slate-800">Verified Blockchain Audit</h6>
                  <p className="mt-2 mb-4 text-slate-500 text-sm leading-relaxed">
                    Write a few lines about each resolution step. SHA-256 cryptographically verifiable block hash for total government transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* 3. "WORKING WITH US IS A PLEASURE" (2-Column Feature Section)  */}
          {/* ------------------------------------------------------------- */}
          <div className="flex flex-wrap items-center mt-16">
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
                    The Arctic Ocean freezes every winter and much of the sea ice thaws every summer. Our automated AI triage handles road, water, and sanitation complaints 24/7 without delay.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. "A GROWING CIVIC ECOSYSTEM" (Reversed 2-Column Section)     */}
      {/* ------------------------------------------------------------- */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="items-center flex flex-wrap">
            {/* Left Image */}
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-10 md:mb-0">
              <img
                alt="Civic Ecosystem"
                className="max-w-full rounded-3xl shadow-2xl border border-slate-200"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              />
            </div>

            {/* Right Details */}
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4 space-y-6">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 shadow-lg rounded-full bg-pink-500 text-2xl">
                🚀
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                A growing civic ecosystem
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                The platform comes with 18 interactive modules to help you get started faster. You can customize the rules, categories, and SLA thresholds and you're good to go.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm shrink-0">
                    01
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-800 text-sm">Carefully crafted AI models</h5>
                    <p className="text-xs text-slate-500 mt-1">NLP intent detection, severity classifier & spatial duplicate check.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-sm shrink-0">
                    02
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-800 text-sm">18+ Live interactive demo flows</h5>
                    <p className="text-xs text-slate-500 mt-1">Citizen portal, officer Kanban triage, SLA alert timers & analytics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                    03
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-800 text-sm">Dynamic ward heatmaps</h5>
                    <p className="text-xs text-slate-500 mt-1">Real-time infrastructure failure density map for municipal planning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. "HERE ARE OUR HEROES" (Team Section - Notus JS Template)   */}
      {/* ------------------------------------------------------------- */}
      <section className="pt-20 pb-48 bg-slate-100">
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4 hover:-translate-y-2 transition duration-300">
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
