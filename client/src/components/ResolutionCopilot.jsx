import React, { useState } from 'react';
import { CheckCircle2, Wrench, Bot, ShieldCheck, Play } from 'lucide-react';

export default function ResolutionCopilot() {
  const [agentStep, setAgentStep] = useState(0);
  const [agentRunning, setAgentRunning] = useState(false);

  const AGENT_STEPS = [
    "Searching Municipal Contractor Directory (Ward 12)...",
    "Generating Automated Work Order #WO-2026-889...",
    "Sending Dispatch Notification to Apex Infra Ltd...",
    "Booking Field Inspection Slot (Today 4:00 PM)...",
    "Polling Contractor Telemetry & GPS Tracker...",
    "Polling CLIP Structural Photo Verification Proof...",
    "Work Order Complete! Recommending Final Officer Sign-Off."
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
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 space-y-6 shadow-xs">
      {/* Title Header */}
      <div className="flex justify-between items-center pb-3 border-b border-emerald-100">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>AGENTIC DISPATCH COPILOT</span>
          </div>
          <h3 className="text-lg font-extrabold text-emerald-950 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-emerald-600" />
            <span>AI Resolution Copilot & Work Order Specs</span>
          </h3>
        </div>
        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold px-3 py-1 rounded-full">
          Autonomous Tier 1
        </span>
      </div>

      {/* Feature Grid: Repair Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-700 block font-medium">Recommended Repair Method</span>
          <span className="font-extrabold text-emerald-950 text-sm">Hot-Mix Asphalt Resurfacing</span>
        </div>
        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-700 block font-medium">Estimated Budget & SLA ETA</span>
          <span className="font-extrabold text-emerald-800 text-sm">₹18,500 | 6 Hours</span>
        </div>
        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-700 block font-medium">Required Equipment & Crew</span>
          <span className="font-extrabold text-emerald-950 text-sm">Asphalt Roller + 4 Crew</span>
        </div>
        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-700 block font-medium">Causal Root Cause Graph</span>
          <span className="font-extrabold text-emerald-800 text-sm">23 Tickets → 1 Drainage Fix</span>
        </div>
      </div>

      {/* Innovation 2: Computer Vision Verifier */}
      <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-emerald-950 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Computer Vision Resolution Verifier (CLIP AI)</span>
          </span>
          <span className="text-emerald-800 font-bold text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
            98% Structural Match Verified ✓
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-lg border border-emerald-100 space-y-1">
            <span className="text-red-700 font-bold block">Before (Complaint Photo)</span>
            <p className="text-[11px] text-emerald-800">Pothole Depth: 14cm | Hazard Detected</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-emerald-100 space-y-1">
            <span className="text-emerald-700 font-bold block">After (Repair Photo Proof)</span>
            <p className="text-[11px] text-emerald-800">Surface Flatness: 99.2% | Verified ✓</p>
          </div>
        </div>
      </div>

      {/* Innovation 1: Agentic Resolution Loop Trigger */}
      <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
            <Bot className="w-4 h-4 text-emerald-600" />
            <span>Agentic Dispatch Work Order Demo</span>
          </span>
          <button
            type="button"
            onClick={runAgentLoop}
            disabled={agentRunning}
            className="btn-emerald text-xs py-1.5 px-3"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{agentRunning ? 'Dispatching...' : 'Run 60s Agent Loop'}</span>
          </button>
        </div>

        <div className="bg-white p-3 rounded-lg border border-emerald-200 text-xs font-mono text-emerald-950">
          {AGENT_STEPS[agentStep]}
        </div>
      </div>
    </div>
  );
}
