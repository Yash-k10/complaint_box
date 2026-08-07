import React from 'react';

export default function PrivacyShield() {
  return (
    <div className="bg-slate-800/80 p-6 rounded-3xl border border-emerald-500/40 shadow-xl space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-2xl shrink-0 shadow-inner">
            🛡️
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <span>INNOVATION PILLAR #10</span>
              <span>•</span>
              <span>PRIVACY-BY-DESIGN</span>
            </div>
            <h4 className="font-extrabold text-white text-lg">Constitutional AI Safety Shield Active</h4>
            <p className="text-xs text-slate-300">Auto PII Redaction, Face Blurring, Aadhaar Masking & Doxxing Quarantine Filter</p>
          </div>
        </div>

        <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3.5 py-1.5 rounded-full font-mono font-bold shrink-0">
          100% Compliant ✓
        </span>
      </div>

      {/* Safety Specs Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-[11px] font-mono">
        <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700 text-slate-300">
          <span className="text-emerald-400 font-bold block">🔒 PII Masking</span>
          <span>Aadhaar & Phone Auto Redacted</span>
        </div>
        <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700 text-slate-300">
          <span className="text-emerald-400 font-bold block">📷 Face Blur AI</span>
          <span>YOLO Face & License Plate Blur</span>
        </div>
        <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700 text-slate-300">
          <span className="text-emerald-400 font-bold block">⚡ Doxxing Shield</span>
          <span>Targeting & Personal Info Blocked</span>
        </div>
        <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700 text-slate-300">
          <span className="text-emerald-400 font-bold block">📄 Safety Audit Log</span>
          <span>Quarantine Log Hash Recorded</span>
        </div>
      </div>
    </div>
  );
}
