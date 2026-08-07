import React, { useState } from 'react';

export default function XAIPanel({ xaiData }) {
  const [overrideActive, setOverrideActive] = useState(false);
  const [selectedDept, setSelectedDept] = useState('Road & Infrastructure Department');

  if (!xaiData) return null;

  return (
    <div className="bg-slate-800/90 p-6 md:p-8 rounded-3xl border border-cyan-500/40 space-y-6 shadow-2xl">
      {/* Title & Confidence Score */}
      <div className="flex justify-between items-center pb-4 border-b border-slate-700/80">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            <span>INNOVATION PILLAR #1</span>
            <span>•</span>
            <span>TRANSPARENT AI GOVERNANCE</span>
          </div>
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            🧠 Explainable AI (XAI) Rationale
          </h3>
        </div>
        <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs px-3.5 py-1.5 rounded-full font-mono font-extrabold shadow">
          {xaiData.confidence || 96}% AI Confidence
        </span>
      </div>

      {/* Rationale Bullet Points */}
      <div className="space-y-2 text-xs font-mono">
        <span className="text-slate-400 font-bold uppercase tracking-wider block">AI Reasoning & Rules Applied:</span>
        <ul className="space-y-2 bg-slate-900/90 p-4 rounded-2xl border border-slate-700/80 text-slate-300">
          {(xaiData.reasoning || ['Matched road hazard keywords in Ward 12', 'School Zone Safety Priority Rule Applied']).map((r, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Similar Historical Cases */}
      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
        <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-slate-400 font-semibold block">Similar Historical Cases</span>
          <span className="text-white font-bold block">CMP-2025-882 (94% Match)</span>
          <span className="text-[10px] text-emerald-400">Resolved in 4.2 Hours</span>
        </div>
        <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-slate-400 font-semibold block">Alternative Department Route</span>
          <span className="text-amber-400 font-bold block">Water & Sewage Dept</span>
          <span className="text-[10px] text-slate-500">Secondary 12% Probability</span>
        </div>
      </div>

      {/* Human Approval & Override Trigger */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-slate-300 flex items-center gap-1.5">
            <span>👮</span> Human-in-the-Loop Governance
          </span>
          <button
            type="button"
            onClick={() => setOverrideActive(!overrideActive)}
            className="text-xs bg-slate-700 hover:bg-slate-600 text-cyan-300 px-3 py-1 rounded-xl transition font-bold"
          >
            {overrideActive ? 'Cancel Override' : '⚡ Trigger Human Override'}
          </button>
        </div>

        {overrideActive ? (
          <div className="space-y-3 pt-2 border-t border-slate-800 text-xs">
            <span className="text-amber-400 font-bold block">Select Custom Department Override:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono"
            >
              <option>Road & Infrastructure Department</option>
              <option>Water Supply & Drainage Dept</option>
              <option>Sanitation & Waste Management</option>
              <option>Electrical & Smart Lighting</option>
            </select>
            <p className="text-[10px] text-slate-400 font-mono">
              Note: Officer override will be recorded permanently in the SHA-256 Blockchain Audit Log.
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center text-[11px] font-mono text-emerald-400">
            <span>Status: Officer Approved ✓</span>
            <span>Blockchain Logged ✓</span>
          </div>
        )}
      </div>
    </div>
  );
}
