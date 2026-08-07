import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DigitalTwinMap from '../components/DigitalTwinMap';
import {
  ShieldCheck,
  Brain,
  Wrench,
  Building2,
  Lock,
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Activity,
  FileText,
  Users,
  MapPin,
  TrendingUp,
  Cpu
} from 'lucide-react';

const ARCHITECTURAL_PILLARS = [
  {
    icon: Brain,
    title: 'Multi-Modal Voice & Text Intention AI',
    desc: 'Native Speech-to-Text in English, Hindi, and Marathi with localized dialect intent mapping.',
    badge: 'PILLAR 1'
  },
  {
    icon: Activity,
    title: 'Explainable AI (XAI) & Community Score',
    desc: 'Transparent priority confidence scoring based on proximity to schools, hospitals, and high-traffic zones.',
    badge: 'PILLAR 2'
  },
  {
    icon: Wrench,
    title: '60s Agentic Resolution Copilot',
    desc: 'Autonomous contractor directory lookup, auto work order generation, and photo CLIP verification.',
    badge: 'PILLAR 3'
  },
  {
    icon: Building2,
    title: 'AI City Digital Twin Simulation',
    desc: 'Real-time municipal telemetry map predicting infrastructure failure hotspots before citizens complain.',
    badge: 'PILLAR 4'
  }
];

const RESOLUTION_WORKFLOW = [
  { step: '01', title: 'Resident Intake', desc: 'Voice or text entry in EN/HI/MR with auto GPS map pinpointing.' },
  { step: '02', title: 'XAI Multi-Class Triage', desc: 'Categorized into Road, Water, Sanitation, Electrical with 96% AI confidence.' },
  { step: '03', title: 'Community Weighting', desc: 'Auto upvoted and clustered by nearby affected citizens.' },
  { step: '04', title: 'Agentic Work Order', desc: '60s autonomous dispatch to city municipal contractors.' },
  { step: '05', title: 'Officer Sign-Off', desc: 'Human-in-the-loop override & execution supervision.' },
  { step: '06', title: 'CLIP Photo Proof', desc: 'Computer vision pre-and-post repair structural verification.' },
  { step: '07', title: 'SHA-256 Audit Log', desc: 'Tamper-evident public ledger block recording.' }
];

export default function LandingPage() {
  const [activeZoneFilter, setActiveZoneFilter] = useState(12);

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setContactSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-white p-8 md:p-12 rounded-2xl border border-emerald-100 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800">
              <img src="/logo.png" alt="awaaz.ai" className="w-5 h-5 object-contain" />
              <span>awaaz.ai • Every Voice Heard. Every Issue Resolved.</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-emerald-950 leading-tight">
              awaaz<span className="text-emerald-600 font-extrabold">.ai</span> — AI-Powered Civic Grievance Triage
            </h1>
            <p className="text-emerald-800 text-xs md:text-sm leading-relaxed">
              <strong>Har Awaaz Suni Jayegi, Har Samasya Suljhayi Jayegi.</strong> Empowering citizens and city authorities with multi-language voice intake, Explainable AI triage, 60s agentic dispatch, Google Maps telemetry, and 3-citizen verification.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/citizen" className="btn-emerald text-xs py-3 px-6">
                <FileText className="w-4 h-4" />
                <span>Submit Grievance</span>
              </Link>
              <Link to="/officer" className="btn-emerald-outline text-xs py-3 px-6">
                <Cpu className="w-4 h-4" />
                <span>Officer Dashboard</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Badge Container */}
          <div className="w-full lg:w-80 bg-emerald-50 p-6 rounded-2xl border border-emerald-200 space-y-4 shadow-xs">
            <div className="flex justify-between items-center pb-2 border-b border-emerald-200">
              <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>System Status</span>
              </span>
              <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">Operational</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-emerald-800 font-medium">
                <span>Avg SLA Resolution:</span>
                <span className="font-bold text-emerald-950">4.2 Hours</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-medium">
                <span>AI Confidence Score:</span>
                <span className="font-bold text-emerald-950">96.4%</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-medium">
                <span>Blockchain Blocks:</span>
                <span className="font-bold text-emerald-950">1,420 Verifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Architectural Pillars Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-emerald-950">Core System Architecture</h2>
          <p className="text-emerald-800 text-xs md:text-sm">Built on 4 pillars of civic artificial intelligence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ARCHITECTURAL_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-emerald-100 space-y-3 shadow-xs">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2.5 py-0.5 rounded border border-emerald-200">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-bold text-emerald-950 text-sm">{pillar.title}</h3>
                <p className="text-xs text-emerald-800 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Google Map City Telemetry Preview */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-extrabold text-emerald-950 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>Live Google Maps City Telemetry Layer</span>
            </h2>
            <p className="text-xs text-emerald-800">Pinpointing active grievances and municipal infrastructure risk scores</p>
          </div>
          <Link to="/digital-twin" className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1">
            <span>Explore Full Digital Twin</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <DigitalTwinMap selectedZoneId={activeZoneFilter} />
      </section>

      {/* 7-Step Resolution Workflow */}
      <section className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-xs space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-emerald-950">7-Step Autonomous Resolution Lifecycle</h2>
          <p className="text-emerald-800 text-xs">End-to-end transparent grievance processing pipeline</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESOLUTION_WORKFLOW.map((item, idx) => (
            <div key={idx} className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-emerald-700">{item.step}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-bold text-emerald-950 text-xs">{item.title}</h4>
              <p className="text-[11px] text-emerald-800 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Municipal Contact & Feedback Form */}
      <section className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-xs space-y-6" id="contact">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-emerald-950">Municipal Desk & Technical Contact</h2>
          <p className="text-emerald-800 text-xs">Reach out for municipal partnership or technical support</p>
        </div>

        {contactSubmitted ? (
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-emerald-950 text-sm">Message Transmitted Successfully</h3>
            <p className="text-xs text-emerald-800">Our civic engineering team will respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-emerald-900">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-2.5 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  placeholder="Er. Rajesh Sharma"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-emerald-900">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-2.5 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  placeholder="contact@nagpur.gov.in"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-emerald-900">Message / Inquiry</label>
              <textarea
                required
                className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-2.5 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 h-24 font-medium"
                placeholder="Describe municipal inquiry or feedback..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
            </div>

            <button type="submit" className="w-full btn-emerald text-xs py-3 justify-center">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
