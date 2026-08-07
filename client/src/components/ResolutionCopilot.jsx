import React, { useState } from 'react';

export default function ResolutionCopilot() {
  const [agentStep, setAgentStep] = useState(0);
  const [agentRunning, setAgentRunning] = useState(false);
  const [cvVerified, setCvVerified] = useState(true);

  const AGENT_STEPS = [
    "🔍 Searching Municipal Contractor Directory (Ward 12)...",
    "📄 Generating Automated Work Order #WO-2026-889...",
    "✉️ Sending Dispatch Notification to Apex Infra Ltd...",
    "📅 Booking Field Inspection Slot (Today 4:00 PM)...",
    "📡 Polling Contractor Telemetry & GPS Tracker...",
    "📸 Polling CLIP Structural Photo Verification Proof...",
    "✅ Work Order Complete! Recommending Final Officer Sign-Off."
  ];

  const runAgentLoop = () => {
    setAgentRunning(true);
    setAgentStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step >= AGENT_STEPS.length) {
        clearInterval(interval);
        setAgentRunning(false);
      } else {
        setAgentStep(step);
      }
    }, 800);
  };

  return (
    <div className="bg-slate-800/90 p-6 md:p-8 rounded-3xl border border-indigo-500/40 space-y-6 shadow-2xl">
      {/* Title Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
            <span>INNOVATION PILLAR #5</span>
            <span>•</span>
            <span>AGENTIC OPERATIONS</span>
          </div>
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            🔧 AI Resolution Copilot & Agentic Engine
          </h3>
        </div>
        <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-mono px-2.5 py-1 rounded-full font-bold">
          Autonomous Tier 1
        </span>
      </div>

      {/* Feature Grid: Repair Details */}
      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-slate-400 block font-semibold">Recommended Repair Method</span>
          <span className="font-extrabold text-white text-sm">Hot-Mix Asphalt Resurfacing</span>
        </div>
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-slate-400 block font-semibold">Estimated Cost & SLA ETA</span>
          <span className="font-extrabold text-cyan-400 text-sm">₹18,500 | 6 Hours</span>
        </div>
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-slate-400 block font-semibold">Required Equipment & Crew</span>
          <span className="font-extrabold text-amber-400 text-sm">Asphalt Roller + 4 Crew</span>
        </div>
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-slate-400 block font-semibold">Causal Root Cause Graph</span>
          <span className="font-extrabold text-purple-400 text-sm">23 Tickets → 1 Drainage Fix</span>
        </div>
      </div>

      {/* Innovation 2: Computer Vision Verifier */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-slate-300 flex items-center gap-1.5">
            <span>📷</span> Computer Vision Resolution Verifier (CLIP AI)
          </span>
          <span className="text-emerald-400 font-mono font-bold text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
            98% Structural Match Verified ✓
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
          <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-slate-300 space-y-1">
            <span className="text-red-400 font-bold block">Before (Complaint Photo)</span>
            <p className="text-[10px] text-slate-400">Pothole Depth: 14cm | Hazard Detected</p>
          </div>
          <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-slate-300 space-y-1">
            <span className="text-emerald-400 font-bold block">After (Repair Photo Proof)</span>
            <p className="text-[10px] text-slate-400">Surface Flatness: 99.2% | Verified ✓</p>
          </div>
        </div>
      </div>

      {/* Innovation 1: Agentic Resolution Loop Trigger */}
      <div className="bg-indigo-950/40 p-4 rounded-2xl border border-indigo-500/30 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
            <span>🤖</span> Agentic Resolution Loop Demo
          </span>
          <button
            type="button"
            onClick={runAgentLoop}
            disabled={agentRunning}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow disabled:opacity-50"
          >
            {agentRunning ? '⚡ Running Loop...' : '🚀 Trigger 60s Agentic Loop'}
          </button>
        </div>

        {(agentRunning || agentStep > 0) && (
          <div className="bg-slate-900 p-3 rounded-xl border border-indigo-500/40 text-xs font-mono space-y-1 animate-pulse">
            <span className="text-indigo-400 font-bold block">Step {agentStep + 1} / 7</span>
            <p className="text-slate-200">{AGENT_STEPS[agentStep]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
