import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from '../components/KanbanBoard';
import SLATimer from '../components/SLATimer';
import ResolutionCopilot from '../components/ResolutionCopilot';
import XAIPanel from '../components/XAIPanel';

const FALLBACK_MOCK = [
  {
    complaintId: 'CMP-2026-001',
    title: 'Severe road pothole near ABC School causing traffic hazards',
    description: 'Deep pothole on main school road. Multiple vehicles damaged over the weekend.',
    category: 'Road Damage',
    urgency: 'High Priority',
    status: 'In Progress',
    wardId: 12,
    confidenceScore: 96,
    xaiData: {
      confidence: 96,
      reasoning: ['Matched road hazard keywords in Ward 12', 'School Zone Safety Priority Rule Applied'],
      rulesApplied: ['Emergency School Zone Priority Rule']
    }
  },
  {
    complaintId: 'CMP-2026-002',
    title: 'Major water pipe leakage on Dharampeth Main Road',
    description: 'Water gushing out of broken 12-inch mainline.',
    category: 'Water Supply',
    urgency: 'Critical Priority',
    status: 'Assigned',
    wardId: 5,
    confidenceScore: 94,
    xaiData: {
      confidence: 94,
      reasoning: ['Matched water leakage keywords in Ward 5'],
      rulesApplied: ['Water Supply Mainline Escalation Rule']
    }
  },
  {
    complaintId: 'CMP-2026-003',
    title: 'Uncollected garbage accumulation near public park',
    description: 'Waste dump not cleared for 4 days.',
    category: 'Sanitation',
    urgency: 'Medium Priority',
    status: 'New',
    wardId: 5,
    confidenceScore: 91,
    xaiData: {
      confidence: 91,
      reasoning: ['Sanitation dump keywords matched'],
      rulesApplied: ['Park Cleanliness Rule']
    }
  }
];

export default function OfficerDashboard() {
  const [complaints, setComplaints] = useState(FALLBACK_MOCK);
  const [selected, setSelected] = useState(FALLBACK_MOCK[0]);

  const loadComplaints = async () => {
    try {
      const res = await axios.get('/api/complaints');
      if (res.data && res.data.data && res.data.data.length > 0) {
        setComplaints(res.data.data);
      }
    } catch (err) {
      console.warn('API connection fallback, using local mock store:', err);
    }
  };

  const handleStatusChange = async (complaintId, newStatus) => {
    try {
      await axios.patch(`/api/complaints/${complaintId}/status`, { status: newStatus });
    } catch (err) {}
    setComplaints((prev) =>
      prev.map((c) => (c.complaintId === complaintId ? { ...c, status: newStatus } : c))
    );
  };

  useEffect(() => {
    loadComplaints();
    const interval = setInterval(loadComplaints, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Organized Page Header */}
      <div className="bg-slate-800/90 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-lime-accent uppercase tracking-wider">
            <span>OFFICER TRIAGE DASHBOARD</span>
            <span>•</span>
            <span>WARD 12 JURISDICTION</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
            👮 Municipal Operations Control
          </h1>
          <p className="text-slate-300 text-xs md:text-sm">
            Er. Rajesh Sharma • Head Officer, Roads & Infrastructure Department
          </p>
        </div>

        <SLATimer hoursRemaining={34} totalHours={48} />
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1 shadow-lg">
          <span className="text-xs text-slate-400 font-medium">Total Complaints</span>
          <div className="text-2xl font-black text-white">{complaints.length} Active</div>
        </div>
        <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1 shadow-lg">
          <span className="text-xs text-slate-400 font-medium">New Unassigned</span>
          <div className="text-2xl font-black text-cyan-400">
            {complaints.filter((c) => c.status === 'New').length} Tickets
          </div>
        </div>
        <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1 shadow-lg">
          <span className="text-xs text-slate-400 font-medium">In Progress</span>
          <div className="text-2xl font-black text-amber-400">
            {complaints.filter((c) => c.status === 'In Progress').length} Active
          </div>
        </div>
        <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1 shadow-lg">
          <span className="text-xs text-slate-400 font-medium">Resolved Today</span>
          <div className="text-2xl font-black text-emerald-400">
            {complaints.filter((c) => c.status === 'Resolved').length} Closed
          </div>
        </div>
      </div>

      {/* Interactive Kanban Board */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">📋 Live Complaint Workflow Kanban</h3>
          <span className="text-xs text-slate-400 font-mono">Click any card to view XAI Rationale & Resolution Plan</span>
        </div>
        <KanbanBoard
          complaints={complaints}
          onSelect={setSelected}
          onStatusChange={handleStatusChange}
        />
      </div>

      {/* Selected Complaint Inspection Box */}
      {selected && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <ResolutionCopilot />
          <XAIPanel xaiData={selected.xaiData || { confidence: 95, reasoning: ['Matched road hazard keywords'] }} />
        </div>
      )}
    </div>
  );
}
