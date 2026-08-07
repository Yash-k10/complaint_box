import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Code, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-emerald-50/50 pt-10 pb-8 text-emerald-950 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Left Side: Brand & Social Links */}
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="awaaz.ai logo" className="h-9 w-auto object-contain" />
              <div>
                <h4 className="text-xl font-black text-emerald-950 tracking-tight">
                  awaaz<span className="text-emerald-600 font-extrabold">.ai</span>
                </h4>
                <span className="text-[11px] font-bold text-emerald-700 block">
                  Every Voice Heard. Every Issue Resolved.
                </span>
              </div>
            </div>
            <p className="text-xs text-emerald-800 max-w-md leading-relaxed">
              Empowering citizens and municipal officers with voice & text AI intake, Explainable AI triage, 60s agentic dispatch, Google Maps telemetry, and SHA-256 cryptographic audit logs.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://github.com/prathameshmowade/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-emerald-700 hover:text-emerald-900 border border-emerald-200 h-9 w-9 flex items-center justify-center rounded-xl transition shadow-xs"
                title="GitHub Repository"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="bg-white text-emerald-700 hover:text-emerald-900 border border-emerald-200 h-9 w-9 flex items-center justify-center rounded-xl transition shadow-xs"
                title="Portal Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@awaaz.ai"
                className="bg-white text-emerald-700 hover:text-emerald-900 border border-emerald-200 h-9 w-9 flex items-center justify-center rounded-xl transition shadow-xs"
                title="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:1800112233"
                className="bg-white text-emerald-700 hover:text-emerald-900 border border-emerald-200 h-9 w-9 flex items-center justify-center rounded-xl transition shadow-xs"
                title="Toll-Free Helpline"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Side: Quick Links Columns */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full sm:w-6/12 px-4 ml-auto mb-6 sm:mb-0">
                <span className="block uppercase text-emerald-800 text-xs font-bold mb-3">
                  Useful Navigation
                </span>
                <ul className="list-unstyled space-y-2 text-xs font-semibold">
                  <li>
                    <Link className="text-emerald-700 hover:text-emerald-950 transition" to="/">
                      Overview & Architecture
                    </Link>
                  </li>
                  <li>
                    <Link className="text-emerald-700 hover:text-emerald-950 transition" to="/citizen">
                      Resident Intake Portal
                    </Link>
                  </li>
                  <li>
                    <Link className="text-emerald-700 hover:text-emerald-950 transition" to="/officer">
                      Officer Command Center
                    </Link>
                  </li>
                  <li>
                    <Link className="text-emerald-700 hover:text-emerald-950 transition" to="/digital-twin">
                      AI City Digital Twin
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full sm:w-6/12 px-4">
                <span className="block uppercase text-emerald-800 text-xs font-bold mb-3">
                  System Transparency
                </span>
                <ul className="list-unstyled space-y-2 text-xs font-semibold">
                  <li>
                    <a className="text-emerald-700 hover:text-emerald-950 transition" href="https://github.com/prathameshmowade/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner" target="_blank" rel="noreferrer">
                      Open Source GitHub
                    </a>
                  </li>
                  <li>
                    <span className="text-emerald-700">MIT Open Source License</span>
                  </li>
                  <li>
                    <span className="text-emerald-700">SHA-256 Blockchain Audit</span>
                  </li>
                  <li>
                    <span className="text-emerald-700">DPDP Act Privacy Shield</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-emerald-200" />

        <div className="flex flex-wrap items-center md:justify-between justify-center text-xs font-medium text-emerald-700">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            © 2026 awaaz.ai • Every Voice Heard. Every Issue Resolved.
          </div>
        </div>
      </div>
    </footer>
  );
}
