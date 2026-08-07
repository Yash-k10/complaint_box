import React, { useState } from 'react';

const WARDS_TWIN = [
  { id: 12, name: 'Ward 12 - Laxmi Nagar', healthScore: 91, riskLevel: 'Low Risk', activeComplaints: 14, riskColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10' },
  { id: 5, name: 'Ward 5 - Dharampeth', healthScore: 62, riskLevel: 'High Risk (Sewer Overflow)', activeComplaints: 42, riskColor: 'border-red-500/40 text-red-400 bg-red-500/10' },
  { id: 7, name: 'Ward 7 - Sadar', healthScore: 74, riskLevel: 'Medium Risk (Streetlights)', activeComplaints: 28, riskColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10' },
  { id: 1, name: 'Ward 1 - Sitabuldi', healthScore: 85, riskLevel: 'Low Risk', activeComplaints: 18, riskColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10' }
];

export default function DigitalTwinPage() {
  const [selectedWard, setSelectedWard] = useState(WARDS_TWIN[1]); // Default Ward 5

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
            🏙️ AI Civic Digital Twin Infrastructure Map
          </h2>
          <p className="text-slate-400 text-sm">Real-time predictive simulation of municipal infrastructure assets</p>
        </div>
        <div className="flex gap-2">
          {WARDS_TWIN.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWard(w)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedWard.id === w.id ? 'bg-cyan-500 text-slate-900 shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Ward {w.id}
            </button>
          ))}
        </div>
      </div>

      {/* Ward Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-1 shadow-xl">
          <span className="text-xs text-slate-400 font-medium">Selected Ward</span>
          <h3 className="text-xl font-bold text-white">{selectedWard.name}</h3>
        </div>

        <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-1 shadow-xl">
          <span className="text-xs text-slate-400 font-medium">Ward Health Index</span>
          <div className="text-2xl font-black text-cyan-400">{selectedWard.healthScore}/100</div>
        </div>

        <div className={`p-5 rounded-2xl border ${selectedWard.riskColor} space-y-1 shadow-xl`}>
          <span className="text-xs text-slate-400 font-medium">Predictive Alert Status</span>
          <div className="text-sm font-extrabold">{selectedWard.riskLevel}</div>
        </div>

        <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-1 shadow-xl">
          <span className="text-xs text-slate-400 font-medium">Active Complaints</span>
          <div className="text-2xl font-black text-amber-400">{selectedWard.activeComplaints} Tickets</div>
        </div>
      </div>

      {/* Dynamic Digital Twin Grid Map */}
      <div className="bg-slate-800/90 p-8 rounded-2xl border border-slate-700 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center border-b border-slate-700 pb-4">
          <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            📡 Live Infrastructure Grid Simulation (Ward {selectedWard.id})
          </h3>
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-mono">
            ● Live IoT Sensor Sync Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">🛣️ Road Network Sector A</span>
              <span className="text-xs text-emerald-400 font-mono">92% Normal</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full">
              <div className="bg-emerald-500 h-full rounded-full w-[92%]" />
            </div>
            <p className="text-xs text-slate-400">Resurfaced June 2025. Pothole risk low.</p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-red-500/40 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-red-400">🚰 Drainage Mainline #4</span>
              <span className="text-xs text-red-400 font-mono">48% High Failure Risk</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full">
              <div className="bg-red-500 h-full rounded-full w-[48%]" />
            </div>
            <p className="text-xs text-slate-300">Heavy monsoon rainfall forecast. Pre-emptive desilting order recommended.</p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">⚡ Electrical Grid Sector C</span>
              <span className="text-xs text-cyan-400 font-mono">88% Normal</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full">
              <div className="bg-cyan-500 h-full rounded-full w-[88%]" />
            </div>
            <p className="text-xs text-slate-400">12 smart LED poles operational.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
