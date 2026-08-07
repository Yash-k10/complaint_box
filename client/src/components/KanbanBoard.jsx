import React from 'react';
import KanbanCard from './KanbanCard';

const COLS = ['New', 'Assigned', 'In Progress', 'Resolved'];

const COL_STYLES = {
  'New': 'border-cyan-500/30',
  'Assigned': 'border-amber-500/30',
  'In Progress': 'border-blue-500/30',
  'Resolved': 'border-emerald-500/30'
};

export default function KanbanBoard({ complaints = [], onSelect, onStatusChange }) {
  return (
    <div className="space-y-6">
      {/* Top Differentiators Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Innovation 6: Community Coalition */}
        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-xl">👥</span>
            <div>
              <span className="text-slate-400 font-semibold block">Innovation #6: Community Coalition Mode</span>
              <span className="text-white font-bold">247 Citizens Affected • 12 Reports Auto-Clustered</span>
            </div>
          </div>
          <span className="bg-pink-500/20 text-pink-300 border border-pink-500/30 px-2.5 py-1 rounded-full font-bold text-[10px]">
            Community Petition 🔥
          </span>
        </div>

        {/* Innovation 12: Citizen Trust Index */}
        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-xl">⭐</span>
            <div>
              <span className="text-slate-400 font-semibold block">Innovation #12: Citizen Trust Index</span>
              <span className="text-white font-bold">Ward 12 Roads Dept • 92 / 100 Score</span>
            </div>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold text-[10px]">
            Top Tier SLA Compliance ✓
          </span>
        </div>
      </div>

      {/* Kanban Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COLS.map((col) => (
          <div
            key={col}
            className={`bg-slate-900/60 p-5 rounded-3xl border ${COL_STYLES[col] || 'border-slate-800'} min-h-[320px] space-y-4`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-extrabold text-white text-sm">{col}</h3>
              <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-0.5 rounded-lg">
                {complaints.filter((c) => c.status === col).length}
              </span>
            </div>
            <div className="space-y-4">
              {complaints
                .filter((c) => c.status === col)
                .map((c) => (
                  <KanbanCard
                    key={c.complaintId}
                    complaint={c}
                    onSelect={onSelect}
                    onStatusChange={onStatusChange}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
