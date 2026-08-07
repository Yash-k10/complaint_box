import React, { useState } from 'react';
import { Brain, CheckCircle2, UserCheck } from 'lucide-react';

export default function XAIPanel({ xaiData }) {
  const [overrideActive, setOverrideActive] = useState(false);
  const [selectedDept, setSelectedDept] = useState('Road & Infrastructure Department');

  if (!xaiData) return null;

  return (
    <div className="bg-white p-6 rounded-2xl border border-emerald-100 space-y-5 shadow-xs">
      {/* Title & Confidence Score */}
      <div className="flex justify-between items-center pb-2 border-b border-emerald-100">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            <span>EXPLAINABLE AI (XAI)</span>
          </div>
          <h3 className="text-base font-extrabold text-emerald-950 flex items-center gap-2">
            <Brain className="w-5 h-5 text-emerald-600" />
            <span>AI Triage Rationale</span>
          </h3>
        </div>
        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] px-3 py-1 rounded-full font-bold">
          {xaiData.confidence || 96}% AI Confidence
        </span>
      </div>

      {/* Rationale Bullet Points */}
      <div className="space-y-2 text-xs">
        <span className="text-emerald-800 font-semibold uppercase tracking-wider block text-[11px]">AI Reasoning & Applied Rules:</span>
        <ul className="space-y-2 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 text-emerald-950">
          {(xaiData.reasoning || ['Matched road hazard keywords in Laxmi Nagar area', 'School Zone Safety Priority Rule Applied']).map((r, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Similar Historical Cases */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 space-y-0.5">
          <span className="text-emerald-700 font-medium block text-[11px]">Historical Match</span>
          <span className="font-bold text-emerald-950">CMP-2025-882 (94%)</span>
          <span className="text-[10px] text-emerald-700 block font-semibold">Resolved in 4.2 Hours</span>
        </div>
        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 space-y-0.5">
          <span className="text-emerald-700 font-medium block text-[11px]">Alt Route</span>
          <span className="font-bold text-amber-700">Water & Sewage Dept</span>
          <span className="text-[10px] text-emerald-700 block">12% Secondary Prob</span>
        </div>
      </div>

      {/* Human Approval & Override Trigger */}
      <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-emerald-950 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>Human Override Control</span>
          </span>
          <button
            type="button"
            onClick={() => setOverrideActive(!overrideActive)}
            className="text-xs bg-white hover:bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg transition font-semibold border border-emerald-200"
          >
            {overrideActive ? 'Cancel Override' : 'Trigger Override'}
          </button>
        </div>

        {overrideActive ? (
          <div className="space-y-2 pt-2 border-t border-emerald-200 text-xs">
            <span className="text-amber-800 font-semibold block">Select Custom Department Override:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full bg-white border border-emerald-200 rounded-lg px-3 py-2 text-emerald-950 text-xs outline-none font-medium"
            >
              <option>Road & Infrastructure Department</option>
              <option>Water Supply & Drainage Dept</option>
              <option>Sanitation & Waste Management</option>
              <option>Electrical & Smart Lighting</option>
            </select>
            <p className="text-[10px] text-emerald-700">
              Note: Officer override will be permanently recorded in the SHA-256 Blockchain Audit Log.
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center text-[11px] font-semibold text-emerald-800">
            <span>Status: Officer Approved ✓</span>
            <span>Blockchain Logged ✓</span>
          </div>
        )}
      </div>
    </div>
  );
}
