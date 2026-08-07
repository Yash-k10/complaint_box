import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const PORTALS = [
    {
      id: 'citizen',
      title: 'Citizen Portal',
      icon: '📢',
      iconBg: 'bg-sky-100 text-sky-600',
      border: 'border-sky-200 hover:border-sky-500',
      desc: 'Report civic complaints (Potholes, Water, Electricity, Garbage), upload photos, and track resolution timelines live.',
      btnText: '➔ Citizen Login',
      btnBg: 'bg-sky-600 hover:bg-sky-700 text-white',
      link: '/login?role=citizen'
    },
    {
      id: 'worker',
      title: 'Worker Portal',
      icon: '👷',
      iconBg: 'bg-emerald-100 text-emerald-600',
      border: 'border-emerald-500 ring-2 ring-emerald-400/30', // Highlighted central card like in image
      desc: 'For dispatched municipal field workers. View assigned tasks, update progress stages, and upload completion photos.',
      btnText: '➔ Worker Login',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      link: '/login?role=worker'
    },
    {
      id: 'admin',
      title: 'Admin Command',
      icon: '👮',
      iconBg: 'bg-indigo-100 text-indigo-600',
      border: 'border-indigo-200 hover:border-indigo-500',
      desc: 'Executive command dashboard for municipal officers. Dispatch field workers, view AI explainability logs, and generate reports.',
      btnText: '➔ Admin Login',
      btnBg: 'bg-indigo-900 hover:bg-indigo-950 text-white',
      link: '/login?role=officer'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      {/* Top Banner (Matching Screenshot 4) */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full text-xs font-bold text-sky-700 shadow-sm">
          <span>🛡️</span>
          <span>OFFICIAL COMMUNITY REDRESSAL PLATFORM</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-sky-900 tracking-tight leading-tight">
          AI-Powered Civic Redressal & Redressal Planner
        </h1>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
          Report community issues, auto-detect locations, and track resolutions live. Please login to your specific portal to access your dashboard.
        </p>
      </div>

      {/* 3 Portal Selection Cards Grid (Matching Screenshot 4) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {PORTALS.map((p) => (
          <div
            key={p.id}
            className={`bg-white p-8 rounded-3xl border ${p.border} shadow-lg space-y-6 flex flex-col justify-between hover:shadow-xl transition duration-300 relative`}
          >
            <div className="space-y-4 text-center">
              <div className={`w-16 h-16 rounded-2xl ${p.iconBg} mx-auto flex items-center justify-center text-3xl shadow-sm`}>
                {p.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>

            <Link
              to={p.link}
              className={`w-full ${p.btnBg} font-extrabold text-sm py-3.5 rounded-xl transition text-center shadow-md flex items-center justify-center gap-2`}
            >
              {p.btnText}
            </Link>
          </div>
        ))}
      </div>

      {/* Floating Chat/Bot Button (Matching Screenshot) */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          to="/citizen"
          className="w-14 h-14 bg-sky-600 hover:bg-sky-700 text-white rounded-full flex items-center justify-center text-2xl shadow-xl transition hover:scale-105 border-2 border-white"
          title="Open AI Assistant"
        >
          🤖
        </Link>
      </div>
    </div>
  );
}
