import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

export default function SLATimer({ hoursRemaining = 34, totalHours = 48 }) {
  const pct = Math.max(0, (hoursRemaining / totalHours) * 100);
  const urgent = hoursRemaining <= 12;

  return (
    <div className="bg-white p-4 rounded-xl border border-emerald-100 space-y-2 shadow-xs">
      <div className="flex justify-between items-center text-xs">
        <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>SLA Countdown Timer</span>
        </span>
        <span className={`font-bold font-mono px-2 py-0.5 rounded text-[11px] flex items-center gap-1 ${
          urgent
            ? 'bg-red-50 text-red-700 animate-pulse border border-red-200'
            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
        }`}>
          {urgent && <AlertTriangle className="w-3 h-3 text-red-600" />}
          <span>{hoursRemaining}h remaining ({totalHours}h SLA)</span>
        </span>
      </div>

      <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 rounded-full ${
            urgent ? 'bg-red-500' : 'bg-emerald-600'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
