import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TrackingTimeline from '../components/TrackingTimeline';
import XAIPanel from '../components/XAIPanel';
import BlockchainAudit from '../components/BlockchainAudit';

const SAMPLE_DETAIL = {
  complaintId: 'CMP-2026-001',
  title: 'Severe road pothole near ABC School causing accidents',
  description: 'Deep pothole on main school road. Multiple vehicles damaged over the weekend. Immediate resurfacing required.',
  category: 'Road Damage',
  urgency: 'High Priority',
  status: 'In Progress',
  wardId: 12,
  wardName: 'Ward 12 - Laxmi Nagar',
  department: 'Roads & Infrastructure Department',
  assignedOfficer: 'Er. Rajesh Sharma',
  upvotes: 24,
  confidenceScore: 96,
  createdAt: '2026-08-07 10:14 AM',
  estimatedCompletion: '2026-08-08 04:00 PM',
  blockchainHash: '054d3ce7fe530088f41e6d31bfb79da20f8cf3eec68366e03bc1887584d47ac3',
  xaiData: {
    confidence: 96,
    reasoning: [
      'Matched road hazard keywords: "pothole", "accident", "school zone"',
      'Mapped to Ward 12 Laxmi Nagar Jurisdiction',
      'Historical precedence: 4 similar pothole repairs completed in Ward 12'
    ],
    rulesApplied: ['School & Hospital Safety Zone Priority Rule (SLA 24h)'],
    similarCases: ['CMP-2025-8891', 'CMP-2025-9102']
  }
};

export default function ComplaintPage() {
  const { id } = useParams();
  const [complaint] = useState(SAMPLE_DETAIL);
  const [upvotes, setUpvotes] = useState(complaint.upvotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [appealSent, setAppealSent] = useState(false);

  const handleEndorse = () => {
    if (!hasUpvoted) {
      setUpvotes((v) => v + 1);
      setHasUpvoted(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Back Navigation */}
      <div className="flex justify-between items-center">
        <Link to="/track" className="text-xs text-lime-accent font-bold hover:underline flex items-center gap-1">
          ← Back to Complaint Search
        </Link>
        <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700 font-mono">
          Figma Node 52-2 Standard View
        </span>
      </div>

      {/* Main Complaint Header Card (Figma Style) */}
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl space-y-6">
        <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-slate-700">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold bg-lime-accent text-slate-900 px-3 py-1 rounded-lg">
                {complaint.complaintId}
              </span>
              <span className="bg-red-500/20 text-red-400 border border-red-500/40 text-xs font-bold px-3 py-1 rounded-full">
                🚨 {complaint.urgency}
              </span>
              <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-bold px-3 py-1 rounded-full">
                ⚙️ {complaint.status}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white pt-2">{complaint.title}</h1>
          </div>

          <button
            onClick={handleEndorse}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg ${
              hasUpvoted ? 'bg-lime-accent text-slate-900' : 'bg-slate-700 hover:bg-slate-600 text-white'
            }`}
          >
            👍 {upvotes} {hasUpvoted ? 'Community Endorsed' : 'Endorse Issue'}
          </button>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 space-y-1">
            <span className="text-slate-400 font-medium block">Category</span>
            <span className="font-bold text-white text-sm">🛣️ {complaint.category}</span>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 space-y-1">
            <span className="text-slate-400 font-medium block">Location Jurisdiction</span>
            <span className="font-bold text-white text-sm">📍 {complaint.wardName}</span>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 space-y-1">
            <span className="text-slate-400 font-medium block">Assigned Department</span>
            <span className="font-bold text-cyan-400 text-sm">{complaint.department}</span>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 space-y-1">
            <span className="text-slate-400 font-medium block">Assigned Officer</span>
            <span className="font-bold text-amber-400 text-sm">👤 {complaint.assignedOfficer}</span>
          </div>
        </div>

        {/* Issue Description */}
        <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/80 space-y-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Resident Complaint Statement</h4>
          <p className="text-sm text-slate-200 leading-relaxed">{complaint.description}</p>
        </div>

        {/* 5-Step Visual Tracking Timeline */}
        <div className="pt-4 border-t border-slate-700 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-bold text-white">📡 Live Workflow Tracking Progress</h3>
            <span className="text-xs text-cyan-400 font-mono">Estimated Completion: {complaint.estimatedCompletion}</span>
          </div>
          <TrackingTimeline currentStep={3} />
        </div>
      </div>

      {/* Explainable AI Rationale */}
      <XAIPanel xaiData={complaint.xaiData} />

      {/* SHA-256 Blockchain Audit Trail */}
      <BlockchainAudit hash={complaint.blockchainHash} />

      {/* Resident Action Toolbar (Figma Node 52-2 Buttons) */}
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-wrap justify-between items-center gap-4 shadow-xl">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white">Resident Governance Options</h4>
          <p className="text-xs text-slate-400">Need to update information or request supervisor appeal?</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => alert('Evidence update form opened!')}
            className="bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white px-4 py-2.5 rounded-xl transition"
          >
            📷 Add Evidence / Photo
          </button>

          <button
            onClick={() => {
              setAppealSent(true);
              alert('Appeal submitted! Escalated to Ward Supervisor review queue.');
            }}
            className={`text-xs font-bold px-4 py-2.5 rounded-xl transition ${
              appealSent
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            ⚖️ {appealSent ? 'Appeal Under Supervisor Review' : 'Request Human Appeal'}
          </button>
        </div>
      </div>
    </div>
  );
}
