import React, { useState } from 'react';
import { Building2, Activity, ShieldCheck } from 'lucide-react';
import DigitalTwinMap from '../components/DigitalTwinMap';

const WARDS_TWIN = [
  { id: 12, name: 'Ward 12 - Laxmi Nagar', healthScore: 91, riskLevel: 'Low Risk', activeComplaints: 14, riskColor: 'border-emerald-200 text-emerald-800 bg-emerald-50' },
  { id: 5, name: 'Ward 5 - Dharampeth', healthScore: 62, riskLevel: 'High Risk (Sewer Overflow)', activeComplaints: 42, riskColor: 'border-red-200 text-red-800 bg-red-50' },
  { id: 7, name: 'Ward 7 - Sadar', healthScore: 74, riskLevel: 'Medium Risk (Streetlights)', activeComplaints: 28, riskColor: 'border-amber-200 text-amber-800 bg-amber-50' },
  { id: 1, name: 'Ward 1 - Sitabuldi', healthScore: 85, riskLevel: 'Low Risk', activeComplaints: 18, riskColor: 'border-teal-200 text-teal-800 bg-teal-50' }
];

export default function DigitalTwinPage() {
  const [selectedWard, setSelectedWard] = useState(WARDS_TWIN[1]); // Default Ward 5

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
          {WARDS_TWIN.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWard(w)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                selectedWard.id === w.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              Ward {w.id}
            </button>
          ))}
        </div>
      </div>

      {/* Ward Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-1 shadow-xs">
          <span className="text-xs text-emerald-700 font-semibold block">Selected Jurisdiction</span>
          <h3 className="text-lg font-bold text-emerald-950">{selectedWard.name}</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-1 shadow-xs">
          <span className="text-xs text-emerald-700 font-semibold block">Ward Health Index</span>
          <div className="text-2xl font-extrabold text-emerald-700">{selectedWard.healthScore}/100</div>
        </div>

        <div className={`p-5 rounded-2xl border ${selectedWard.riskColor} space-y-1 shadow-xs`}>
          <span className="text-xs text-emerald-700 font-semibold block">Predictive Risk Alert</span>
          <div className="text-sm font-bold">{selectedWard.riskLevel}</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-1 shadow-xs">
          <span className="text-xs text-emerald-700 font-semibold block">Active Grievances</span>
          <div className="text-2xl font-extrabold text-amber-600">{selectedWard.activeComplaints} Tickets</div>
        </div>
      </div>

      {/* Interactive Google Map Telemetry Layer */}
      <DigitalTwinMap selectedWardId={selectedWard.id} />

      {/* Dynamic Digital Twin Telemetry Grid */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 space-y-6 shadow-xs">
        <div className="flex justify-between items-center pb-3 border-b border-emerald-100">
          <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-600" />
            <span>Infrastructure Grid Telemetry (Ward {selectedWard.id})</span>
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
    </div>
  );
}
