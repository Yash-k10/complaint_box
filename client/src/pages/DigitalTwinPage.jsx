import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Building2, Activity, ShieldCheck, Camera, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import DigitalTwinMap from '../components/DigitalTwinMap';
import CitizenVerificationPanel from '../components/CitizenVerificationPanel';

const CITY_ZONES = [
  { id: 12, name: 'Laxmi Nagar Zone', healthScore: 91, riskLevel: 'Low Risk', activeComplaints: 14, riskColor: 'border-emerald-200 text-emerald-800 bg-emerald-50' },
  { id: 5, name: 'Dharampeth Zone', healthScore: 62, riskLevel: 'High Risk (Sewer Overflow)', activeComplaints: 42, riskColor: 'border-red-200 text-red-800 bg-red-50' },
  { id: 7, name: 'Sadar Zone', healthScore: 74, riskLevel: 'Medium Risk (Streetlights)', activeComplaints: 28, riskColor: 'border-amber-200 text-amber-800 bg-amber-50' },
  { id: 1, name: 'Sitabuldi Zone', healthScore: 85, riskLevel: 'Low Risk', activeComplaints: 18, riskColor: 'border-teal-200 text-teal-800 bg-teal-50' }
];

export default function DigitalTwinPage() {
  const [selectedZone, setSelectedZone] = useState(CITY_ZONES[1]); // Default Dharampeth
  const [pendingVerificationComplaints, setPendingVerificationComplaints] = useState([]);

  const loadVerificationFeed = async () => {
    let allComplaints = [];

    // Load from local storage cache first
    try {
      const saved = localStorage.getItem('civic_officer_complaints');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) allComplaints = parsed;
      }
    } catch (e) {}

    // Also fetch from API
    try {
      const res = await axios.get('/api/complaints');
      if (res.data && res.data.data && Array.isArray(res.data.data)) {
        const apiData = res.data.data;
        const map = new Map(allComplaints.map((c) => [c.complaintId, c]));
        apiData.forEach((c) => map.set(c.complaintId, { ...c, ...map.get(c.complaintId) }));
        allComplaints = Array.from(map.values());
      }
    } catch (err) {}

    // Filter complaints in Pending Verification or recently needing verification
    const pendingList = allComplaints.filter(
      (c) => c.status === 'Pending Verification' || (c.resolutionProof && c.verificationsCount < 3)
    );

    // If none found, provide sample ticket so verification stream is never empty
    if (pendingList.length === 0) {
      pendingList.push({
        complaintId: 'CMP-2026-004',
        title: 'Streetlight Junction Box Repair & Rewiring on Dharampeth Main Road',
        category: 'Electrical',
        zoneId: selectedZone.id,
        status: 'Pending Verification',
        resolutionProof: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=600&auto=format&fit=crop&q=80',
        resolutionNotes: 'Replaced burnt junction box transformer & tested high-voltage circuit. Site cleared.',
        aiSimilarityScore: 84,
        verifications: [
          { citizenName: 'Aarav Patel', comment: 'Inspected location, streetlights functioning fine!', verifiedAt: new Date().toISOString() },
          { citizenName: 'Priya Sharma', comment: 'Confirmed site work completed cleanly.', verifiedAt: new Date().toISOString() }
        ],
        verificationsCount: 2,
        requiredVerifications: 3
      });
    }

    setPendingVerificationComplaints(pendingList);
  };

  useEffect(() => {
    loadVerificationFeed();
    const interval = setInterval(loadVerificationFeed, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleVerificationUpdated = (updatedComplaint) => {
    setPendingVerificationComplaints((prev) =>
      prev.map((c) => (c.complaintId === updatedComplaint.complaintId ? updatedComplaint : c))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>AI SPATIAL TELEMETRY</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-950 flex items-center gap-2.5">
            <Building2 className="w-7 h-7 text-emerald-600" />
            <span>AI Civic Digital Twin Map</span>
          </h1>
          <p className="text-emerald-800 text-xs md:text-sm">Real-time predictive simulation of municipal infrastructure health</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {CITY_ZONES.map((z) => (
            <button
              key={z.id}
              onClick={() => setSelectedZone(z)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                selectedZone.id === z.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              {z.name}
            </button>
          ))}
        </div>
      </div>

      {/* Zone Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-1 shadow-xs">
          <span className="text-xs text-emerald-700 font-semibold block">Selected City Zone</span>
          <h3 className="text-lg font-bold text-emerald-950">{selectedZone.name}</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-1 shadow-xs">
          <span className="text-xs text-emerald-700 font-semibold block">Zone Health Index</span>
          <div className="text-2xl font-extrabold text-emerald-700">{selectedZone.healthScore}/100</div>
        </div>

        <div className={`p-5 rounded-2xl border ${selectedZone.riskColor} space-y-1 shadow-xs`}>
          <span className="text-xs text-emerald-700 font-semibold block">Predictive Risk Alert</span>
          <div className="text-sm font-bold">{selectedZone.riskLevel}</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-1 shadow-xs">
          <span className="text-xs text-emerald-700 font-semibold block">Active Verification Stream</span>
          <div className="text-2xl font-extrabold text-amber-600">
            {pendingVerificationComplaints.length} Needing Audit
          </div>
        </div>
      </div>

      {/* Interactive Google Map Telemetry Layer */}
      <DigitalTwinMap selectedZoneId={selectedZone.id} />

      {/* Dynamic Digital Twin Telemetry Grid */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 space-y-6 shadow-xs">
        <div className="flex justify-between items-center pb-3 border-b border-emerald-100">
          <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-600" />
            <span>Infrastructure Grid Telemetry ({selectedZone.name})</span>
          </h3>
          <span className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full font-semibold border border-emerald-200">
            IoT Live Sync Active ✓
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-emerald-950">Road Network Sector A</span>
              <span className="text-emerald-700 font-bold">92% Optimal</span>
            </div>
            <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full w-[92%]" />
            </div>
            <p className="text-xs text-emerald-800">Resurfaced recently. Pothole degradation risk low.</p>
          </div>

          <div className="bg-red-50/70 p-5 rounded-xl border border-red-200 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-red-900">Drainage Mainline #4</span>
              <span className="text-red-700 font-bold">48% High Risk</span>
            </div>
            <div className="w-full bg-red-200 h-2 rounded-full overflow-hidden">
              <div className="bg-red-600 h-full rounded-full w-[48%]" />
            </div>
            <p className="text-xs text-red-800">Monsoon forecast detected. Pre-emptive desilting work order recommended.</p>
          </div>

          <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-emerald-950">Electrical Grid Sector C</span>
              <span className="text-teal-700 font-bold">88% Optimal</span>
            </div>
            <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden">
              <div className="bg-teal-600 h-full rounded-full w-[88%]" />
            </div>
            <p className="text-xs text-emerald-800">12 smart LED streetlights operational.</p>
          </div>
        </div>
      </div>

      {/* AUTOMATIC LIVE CITY DIGITAL TWIN VERIFICATION STREAM */}
      <div className="space-y-6">
        <div className="bg-amber-50/80 border border-amber-200 p-6 rounded-2xl space-y-2 shadow-xs">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-extrabold text-amber-950 flex items-center gap-2">
              <Camera className="w-6 h-6 text-amber-600" />
              <span>City Digital Twin — Active Citizen Verification Stream</span>
            </h2>
            <span className="bg-amber-600 text-white text-xs font-extrabold px-3 py-1 rounded-full">
              {pendingVerificationComplaints.length} Active Audits
            </span>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            All tickets in <strong>Pending Verification</strong> status automatically stream to this section. Citizens can inspect officer photo proof, review AI Vision similarity scores (&lt; 90%), and audit work authenticity.
          </p>
        </div>

        <div className="space-y-6">
          {pendingVerificationComplaints.map((comp) => (
            <CitizenVerificationPanel
              key={comp.complaintId}
              complaint={comp}
              onVerificationUpdate={handleVerificationUpdated}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
