import React from 'react';

export default function PredictiveAlert() {
  return (
    <div className="bg-amber-950/30 border border-amber-500/40 p-6 md:p-8 rounded-3xl space-y-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl shrink-0 shadow-inner">
            ⚠️
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              <span>INNOVATION PILLAR #2 & #8</span>
              <span>•</span>
              <span>PREDICTIVE CIVIC INTELLIGENCE</span>
            </div>
            <h4 className="font-extrabold text-white text-xl">Predictive Infrastructure & Policy Intelligence Alert</h4>
            <p className="text-xs text-slate-300">AI predicts failure hotspots before citizens complain & suggests capital budget allocation</p>
          </div>
        </div>

        <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1.5 rounded-full font-mono font-bold shrink-0">
          Monsoon Risk Score: High (88%)
        </span>
      </div>

      {/* Grid of Predictive Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        {/* Insight 1 */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex justify-between text-amber-400 font-bold">
            <span>🌧️ Weather & Infra Age Sync</span>
            <span>Ward 5</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            3-Day heavy rain forecast + 8-yr drainage pipe age. AI has auto-scheduled pre-emptive clearance before 40+ complaints occur.
          </p>
        </div>

        {/* Insight 2 */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex justify-between text-cyan-400 font-bold">
            <span>💡 AI Policy Advisor</span>
            <span>Capital Upgrade</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Recommends allocating ₹18 Lakh for Ward 7 mainline resurfacing instead of 34 repeated pothole patches. Projected 48% complaint drop.
          </p>
        </div>

        {/* Insight 3 */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex justify-between text-emerald-400 font-bold">
            <span>🌐 Federated City Network</span>
            <span>Multi-City Brain</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Privacy-preserving AI trained across Nagpur, Pune & Bengaluru. Instant pattern transfer for waterlogging mitigation.
          </p>
        </div>
      </div>
    </div>
  );
}
