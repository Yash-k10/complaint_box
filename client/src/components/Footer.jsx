import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-slate-200 pt-8 pb-6 text-slate-700 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Left Side: Brand & Social Links */}
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0 space-y-4">
            <h4 className="text-3xl font-extrabold text-slate-800">
              Let's keep in touch!
            </h4>
            <h5 className="text-sm mt-0 text-slate-600 max-w-md">
              Find us on any of these platforms, we respond 1-2 business days for civic issues & inquiries.
            </h5>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                className="bg-white text-cyan-500 shadow-md font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-lg transition"
              >
                🌐
              </button>
              <button
                type="button"
                className="bg-white text-blue-600 shadow-md font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-lg transition"
              >
                📘
              </button>
              <button
                type="button"
                className="bg-white text-pink-500 shadow-md font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-lg transition"
              >
                🎨
              </button>
              <button
                type="button"
                className="bg-white text-slate-800 shadow-md font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-lg transition"
              >
                💻
              </button>
            </div>
          </div>

          {/* Right Side: Quick Links Columns */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full sm:w-6/12 px-4 ml-auto mb-6 sm:mb-0">
                <span className="block uppercase text-slate-500 text-xs font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled space-y-2 text-xs font-semibold">
                  <li>
                    <Link className="text-slate-600 hover:text-slate-900 transition" to="/">
                      Overview & Hero
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600 hover:text-slate-900 transition" to="/citizen">
                      Resident Intake Portal
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600 hover:text-slate-900 transition" to="/officer">
                      Officer Triage Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600 hover:text-slate-900 transition" to="/digital-twin">
                      AI Ward Digital Twin
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full sm:w-6/12 px-4">
                <span className="block uppercase text-slate-500 text-xs font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled space-y-2 text-xs font-semibold">
                  <li>
                    <a className="text-slate-600 hover:text-slate-900 transition" href="https://github.com/prathameshmowade/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner" target="_blank" rel="noreferrer">
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-600">MIT License</span>
                  </li>
                  <li>
                    <span className="text-slate-600">Terms & Conditions</span>
                  </li>
                  <li>
                    <span className="text-slate-600">Privacy Shield Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-xs text-slate-500 font-semibold py-1">
              Copyright © 2026 <span className="text-slate-700 font-bold">UrbanFeedback AI-X</span> by CodeRush Team (Pragati 2.O). Inspired by Creative Tim Notus JS.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
