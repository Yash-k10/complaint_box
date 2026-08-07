import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DEMO_TICKETS = [
  { id: 'CMP-2026-001', title: 'Severe road pothole near ABC School', status: 'In Progress', ward: 'Ward 12' },
  { id: 'CMP-2026-002', title: 'Major water pipe leakage', status: 'Assigned', ward: 'Ward 5' },
  { id: 'CMP-2026-004', title: 'Broken pipeline near Central Market', status: 'New', ward: 'Ward 5' }
];

export default function TrackComplaint() {
  const [complaintId, setComplaintId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!complaintId) return alert('Please enter a Complaint Reference ID');
    navigate(`/complaint/${complaintId}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8">
      <div className="space-y-2">
        <span className="bg-lime-accent/10 text-lime-accent border border-lime-accent/30 text-xs px-3 py-1 rounded-full font-semibold">
          Figma Node 52-2 Status Tracker
        </span>
        <h2 className="text-4xl font-extrabold text-white">Track Your Complaint Status</h2>
        <p className="text-slate-400 text-sm">Enter your reference ID to view real-time AI triage & SHA-256 blockchain audit details</p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto">
        <input
          className="flex-1 bg-slate-800 border border-slate-700 px-5 py-3.5 rounded-xl text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-lime-accent font-mono text-sm"
          placeholder="e.g. CMP-2026-001"
          value={complaintId}
          onChange={(e) => setComplaintId(e.target.value)}
        />
        <button
          type="submit"
          className="bg-lime-accent hover:opacity-90 text-slate-900 font-extrabold px-8 py-3.5 rounded-xl text-sm transition shadow-lg"
        >
          Track Issue →
        </button>
      </form>

      {/* Demo Tickets Quick Access */}
      <div className="pt-6 border-t border-slate-800 space-y-4">
        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Or click a sample complaint to test Figma Node 52-2 layout:</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DEMO_TICKETS.map((t) => (
            <button
              key={t.id}
              onClick={() => navigate(`/complaint/${t.id}`)}
              className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-lime-accent text-left transition space-y-2 shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-lime-accent font-bold">{t.id}</span>
                <span className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded text-[10px]">{t.status}</span>
              </div>
              <p className="text-xs font-bold text-white line-clamp-2">{t.title}</p>
              <span className="text-[10px] text-slate-400 block">📍 {t.ward}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
