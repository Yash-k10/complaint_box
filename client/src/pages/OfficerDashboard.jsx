import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from '../components/KanbanBoard';
import SLATimer from '../components/SLATimer';
import ResolutionCopilot from '../components/ResolutionCopilot';
import XAIPanel from '../components/XAIPanel';
import ResolutionProofModal from '../components/ResolutionProofModal';
import { ShieldCheck, LayoutDashboard, Clock, AlertCircle } from 'lucide-react';

const FALLBACK_MOCK = [
  {
    complaintId: 'CMP-2026-001',
    title: 'Severe road pothole near ABC School causing traffic hazards',
    description: 'Deep pothole on main school road. Multiple vehicles damaged over the weekend.',
    category: 'Road Damage',
    urgency: 'High Priority',
    status: 'In Progress',
    confidenceScore: 96,
    xaiData: {
      confidence: 96,
      reasoning: ['Matched road hazard keywords in Laxmi Nagar', 'School Zone Safety Priority Rule Applied'],
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
    confidenceScore: 94,
    xaiData: {
      confidence: 94,
      reasoning: ['Matched water leakage keywords in Dharampeth'],
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
    confidenceScore: 91,
    xaiData: {
      confidence: 91,
      reasoning: ['Sanitation dump keywords matched'],
      rulesApplied: ['Park Cleanliness Rule']
    }
  }
];

export default function OfficerDashboard() {
  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem('civic_officer_complaints');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return FALLBACK_MOCK;
  });

  const [selected, setSelected] = useState(() => complaints[0] || FALLBACK_MOCK[0]);
  const [resolvingComplaint, setResolvingComplaint] = useState(null);

  const saveComplaintsLocally = (newComplaints) => {
    setComplaints(newComplaints);
    try {
      localStorage.setItem('civic_officer_complaints', JSON.stringify(newComplaints));
    } catch (e) {}
  };

  const loadComplaints = async () => {
    try {
      const res = await axios.get('/api/complaints');
      if (res.data && res.data.data && res.data.data.length > 0) {
        const serverData = res.data.data;
        // Merge server data with local status overrides for 'Pending Verification'
        setComplaints((prevLocal) => {
          const localMap = new Map(prevLocal.map((c) => [c.complaintId, c]));
          const merged = serverData.map((serverComp) => {
            const localComp = localMap.get(serverComp.complaintId);
            if (localComp && localComp.status === 'Pending Verification' && serverComp.status !== 'Verified & Resolved') {
              return { ...serverComp, ...localComp, status: 'Pending Verification' };
            }
            return serverComp;
          });

          // Ensure local-only tickets are preserved
          prevLocal.forEach((lComp) => {
            if (!merged.find((m) => m.complaintId === lComp.complaintId)) {
              merged.unshift(lComp);
            }
          });

          try {
            localStorage.setItem('civic_officer_complaints', JSON.stringify(merged));
          } catch (e) {}

          return merged;
        });
      }
    } catch (err) {
      console.warn('API connection fallback, using local mock store:', err);
    }
  };

  const handleStatusChange = async (complaintId, newStatus) => {
    if (newStatus === 'Resolved') {
      const target = complaints.find((c) => c.complaintId === complaintId);
      if (target) {
        setResolvingComplaint(target);
        return;
      }
    }

    try {
      await axios.patch(`/api/complaints/${complaintId}/status`, { status: newStatus });
    } catch (err) {}

    const updated = complaints.map((c) => (c.complaintId === complaintId ? { ...c, status: newStatus } : c));
    saveComplaintsLocally(updated);
  };

  const handleResolutionSubmit = async (resolutionPayload) => {
    const startedAt = new Date().toISOString();
    const finalStatus = resolutionPayload.status || (resolutionPayload.aiSimilarityScore >= 90 ? 'Verified & Resolved' : 'Pending Verification');

    try {
      await axios.patch(`/api/complaints/${resolutionPayload.complaintId}/status`, {
        status: finalStatus,
        resolutionProof: resolutionPayload.resolutionProof,
        resolutionNotes: resolutionPayload.resolutionNotes,
        aiSimilarityScore: resolutionPayload.aiSimilarityScore,
        pendingVerificationStartedAt: startedAt,
        verificationWindowDays: 7
      });
    } catch (err) {}

    const updated = complaints.map((c) =>
      c.complaintId === resolutionPayload.complaintId
        ? {
            ...c,
            status: finalStatus,
            resolutionProof: resolutionPayload.resolutionProof,
            resolutionNotes: resolutionPayload.resolutionNotes,
            aiSimilarityScore: resolutionPayload.aiSimilarityScore,
            verifications: finalStatus === 'Verified & Resolved' ? (c.verifications?.length >= 3 ? c.verifications : [{ citizenName: 'AI Vision Match (≥90%)', comment: `Auto-verified via AI image similarity (${resolutionPayload.aiSimilarityScore}% match)`, verifiedAt: startedAt }, { citizenName: 'System Audit', comment: 'Direct AI Verification Passed', verifiedAt: startedAt }, { citizenName: 'Automated Certification', comment: 'Quality threshold met', verifiedAt: startedAt }]) : (c.verifications || []),
            verificationsCount: finalStatus === 'Verified & Resolved' ? 3 : (c.verificationsCount || 0),
            requiredVerifications: 3,
            pendingVerificationStartedAt: c.pendingVerificationStartedAt || startedAt,
            verificationWindowDays: 7
          }
        : c
    );

    saveComplaintsLocally(updated);
    setResolvingComplaint(null);
  };

  useEffect(() => {
    loadComplaints();
    const interval = setInterval(loadComplaints, 2000);

    const handleStorageChange = (e) => {
      if (e.key === 'civic_officer_complaints' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) {
            setComplaints(parsed);
          }
        } catch (err) {}
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
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
            <span>NAGPUR MUNICIPAL ZONE</span>
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

      {/* Section 1: Grievance Triage Kanban Board (Full Width Top Flow) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-1 pb-2 border-b border-emerald-100">
          <div>
            <h2 className="text-lg font-extrabold text-emerald-950 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>Grievance Triage Kanban Flow</span>
            </h2>
            <p className="text-xs text-emerald-800">5-Stage Municipal Lifecycle • Drag or click cards to inspect AI Copilot specs</p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            5 Active Telemetry Columns
          </span>
        </div>

        <KanbanBoard
          complaints={complaints}
          onSelect={(c) => setSelected(c)}
          onStatusChange={handleStatusChange}
        />
      </div>

      {/* Section 2: Selected Ticket Inspection & AI Copilot Grid (3 Columns Below Flow) */}
      <div className="space-y-4 pt-4 border-t border-emerald-100">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-emerald-950 uppercase tracking-wider">
            Ticket AI Diagnostics & Copilot Inspector
          </h3>
          {selected && (
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
              Inspecting: {selected.complaintId}
            </span>
          )}
        </div>

        {selected ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Column 1: Ticket Overview */}
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 space-y-4 shadow-xs">
              <div className="flex justify-between items-center pb-2 border-b border-emerald-100">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  {selected.complaintId}
                </span>
                <span className="text-xs font-bold text-emerald-950 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
                  {selected.category}
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-emerald-950 text-base">{selected.title}</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">{selected.description}</p>
              </div>

              {selected.resolutionProof && (
                <div className="pt-2 border-t border-emerald-100 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-950 block">Officer Resolution Photo Proof:</span>
                  <img src={selected.resolutionProof} alt="Proof" className="w-full h-36 object-cover rounded-xl border border-emerald-200 shadow-xs" />
                  {selected.resolutionNotes && (
                    <p className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 italic">
                      "{selected.resolutionNotes}"
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Column 2: Explainable AI Rationale Panel */}
            <XAIPanel xaiData={selected.xaiData} />

            {/* Column 3: AI Resolution Copilot Engine */}
            <ResolutionCopilot />
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl border border-emerald-100 text-center space-y-2">
            <AlertCircle className="w-8 h-8 text-emerald-400 mx-auto" />
            <p className="text-xs text-emerald-800">Select any grievance card above to inspect AI Copilot recommendations.</p>
          </div>
        )}
      </div>

      {/* Resolution Photo Proof Modal */}
      {resolvingComplaint && (
        <ResolutionProofModal
          complaint={resolvingComplaint}
          onClose={() => setResolvingComplaint(null)}
          onSubmitResolution={handleResolutionSubmit}
        />
      )}
    </div>
  );
}
