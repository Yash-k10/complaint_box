import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from '../components/KanbanBoard';
import SLATimer from '../components/SLATimer';
import ResolutionCopilot from '../components/ResolutionCopilot';
import XAIPanel from '../components/XAIPanel';
import { ShieldCheck, LayoutDashboard, Clock, AlertCircle } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>OFFICER TRIAGE DASHBOARD</span>
            <span className="text-emerald-300">•</span>
            <span>WARD 12 JURISDICTION</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-950 flex items-center gap-2.5">
            <LayoutDashboard className="w-7 h-7 text-emerald-600" />
            <span>Municipal Operations Command</span>
          </h1>
          <p className="text-emerald-800 text-xs md:text-sm">
            Er. Rajesh Sharma • Head Officer, Roads & Infrastructure Department
          </p>
        </div>

        <div className="w-full md:w-auto">
          <SLATimer hoursRemaining={34} totalHours={48} />
        </div>
      </div>

      {/* Main Grid: Kanban Triage Board + Detail Inspector Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Interactive Kanban Triage Board (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>Grievance Triage Kanban Board</span>
            </h2>
            <span className="text-xs text-emerald-800 font-medium">Click card to inspect AI Copilot specs</span>
          </div>

          <KanbanBoard
            complaints={complaints}
            onSelect={(c) => setSelected(c)}
            onStatusChange={handleStatusChange}
          />
        </div>

        {/* Right Column: Selected Ticket Inspector Panel (XAI + Resolution Copilot) */}
        <div className="space-y-6">
          {selected ? (
            <>
              {/* Selected Ticket Summary Badge */}
              <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-2 shadow-xs">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {selected.complaintId}
                  </span>
                  <span className="text-xs font-bold text-emerald-950 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
                    {selected.category}
                  </span>
                </div>
                <h3 className="font-extrabold text-emerald-950 text-sm">{selected.title}</h3>
                <p className="text-xs text-emerald-800">{selected.description}</p>
              </div>

              {/* Explainable AI Rationale Panel */}
              <XAIPanel xaiData={selected.xaiData} />

              {/* AI Resolution Copilot Engine */}
              <ResolutionCopilot />
            </>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-emerald-100 text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-emerald-400 mx-auto" />
              <p className="text-xs text-emerald-800">Select any grievance card on the left to inspect AI Copilot recommendations.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
