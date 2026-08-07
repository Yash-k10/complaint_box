import React from 'react';
import HeatMap from '../components/HeatMap';
import AnalyticsCharts from '../components/AnalyticsCharts';
import PredictiveAlert from '../components/PredictiveAlert';

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 space-y-10">
      {/* Page Header Banner */}
      <div className="bg-slate-800/80 p-8 md:p-10 rounded-3xl border border-slate-700/60 shadow-2xl space-y-3">
        <div className="flex items-center gap-3 text-xs font-bold text-lime-accent uppercase tracking-widest">
          <span>CITY-WIDE ANALYTICS</span>
          <span className="text-slate-600">•</span>
          <span>PREDICTIVE CIVIC INTELLIGENCE</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
          📊 Civic Operations & Ward Analytics
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Real-time intelligence on resolution efficiency, department workloads, recurring failure hotspots, and predictive maintenance alerts.
        </p>
      </div>

      {/* Section 1: Predictive Alert Banner */}
      <PredictiveAlert />

      {/* Section 2: Ward Heatmap Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-300 uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-base">🗺️</span>
          Ward Infrastructure Failure Hotspots
        </h3>
        <HeatMap />
      </div>

      {/* Section 3: Monthly Trend Charts */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-300 uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-base">📈</span>
          Monthly Complaint Resolution & SLA Trends
        </h3>
        <AnalyticsCharts />
      </div>
    </div>
  );
}
