import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from '../components/KanbanBoard';
import SLATimer from '../components/SLATimer';
import ResolutionCopilot from '../components/ResolutionCopilot';

const FALLBACK_MOCK = [
  { complaintId: 'CMP-2026-001', title: 'Severe road pothole near ABC School', description: 'Deep pothole causing accidents.', status: 'In Progress', wardId: 12, confidenceScore: 96 },
  { complaintId: 'CMP-2026-002', title: 'Major water pipe leakage', description: 'Water gushing out of broken pipeline.', status: 'Assigned', wardId: 5, confidenceScore: 94 },
  { complaintId: 'CMP-2026-003', title: 'Uncollected garbage accumulation', description: 'Not picked up for 4 days.', status: 'New', wardId: 5, confidenceScore: 91 }
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
      console.warn('API error, using fallback state:', err);
    }
  };

  useEffect(() => {
    loadComplaints();
    const interval = setInterval(loadComplaints, 5000); // Polling every 5 seconds for live updates
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            👮 Officer Operations Dashboard
          </h2>
          <p className="text-xs text-slate-400">Er. Rajesh Sharma • Ward 12 Roads Department • Live DB Sync Active</p>
        </div>
        <SLATimer hoursRemaining={34} totalHours={48} />
      </div>
      <KanbanBoard complaints={complaints} onSelect={setSelected} />
      {selected && <ResolutionCopilot />}
    </div>
  );
}
