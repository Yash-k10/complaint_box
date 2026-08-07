import React from 'react';

export default function HeatMap() {
  return (
    <div className="bg-slate-800/90 p-6 md:p-8 rounded-3xl border border-slate-700/80 space-y-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center text-2xl shrink-0 shadow-inner">
            🏙️
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              <span>INNOVATION PILLAR #4</span>
              <span>•</span>
              <span>AI CIVIC DIGITAL TWIN</span>
            </div>
            <h4 className="font-extrabold text-white text-xl">Live Ward Infrastructure Health Representation</h4>
            <p className="text-xs text-slate-300">Real-time asset telemetry, infrastructure failure probability & dynamic ward heatmaps</p>
          </div>
        </div>

        <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3.5 py-1.5 rounded-full font-mono font-bold shrink-0">
          Ward 5 Health: 67/100
        </span>
      </div>

      {/* Infrastructure Health Gauges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-amber-500/30 space-y-2">
          <div className="flex justify-between font-bold">
            <span className="text-slate-300">🛣️ Road Health</span>
            <span className="text-amber-400">62%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full rounded-full" style={{ width: '62%' }} />
          </div>
          <span className="text-[10px] text-slate-500 block">Pothole Density: High</span>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-2xl border border-emerald-500/30 space-y-2">
          <div className="flex justify-between font-bold">
            <span className="text-slate-300">🚰 Water Mainlines</span>
            <span className="text-emerald-400">91%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full" style={{ width: '91%' }} />
          </div>
          <span className="text-[10px] text-slate-500 block">Pressure Normal</span>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-2xl border border-red-500/30 space-y-2">
          <div className="flex justify-between font-bold">
            <span className="text-slate-300">🧹 Sanitation</span>
            <span className="text-red-400">48%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-red-400 h-full rounded-full" style={{ width: '48%' }} />
          </div>
          <span className="text-[10px] text-slate-500 block">Dump Cleanup Needed</span>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-2xl border border-cyan-500/30 space-y-2">
          <div className="flex justify-between font-bold">
            <span className="text-slate-300">⚡ Smart Lighting</span>
            <span className="text-cyan-400">88%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-cyan-400 h-full rounded-full" style={{ width: '88%' }} />
          </div>
          <span className="text-[10px] text-slate-500 block">Grid Stable</span>
        </div>
      </div>

      {/* Visual Interactive Map Placeholder Box */}
      <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-700/80 text-center space-y-2">
        <span className="text-4xl block">🗺️</span>
        <h5 className="font-extrabold text-white text-sm">Interactive Ward 5 Infrastructure Telemetry Map</h5>
        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          AI predicts a <span className="text-amber-400 font-bold">88% probability of drainage failure</span> near Dharampeth Main Road during monsoon peak. Pre-emptive maintenance order queued.
        </p>
      </div>
    </div>
  );
}
