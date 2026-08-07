import React from 'react';
import HeatMap from '../components/HeatMap';
import AnalyticsCharts from '../components/AnalyticsCharts';
import PredictiveAlert from '../components/PredictiveAlert';

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Page Header Banner */}
      <div className="bg-slate-800/90 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-xl space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-lime-accent uppercase tracking-wider">
          <span>CITY-WIDE ANALYTICS</span>
          <span>•</span>
          <span>PREDICTIVE CIVIC INTELLIGENCE</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
          📊 Civic Operations & Ward Analytics
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl">
          Real-time intelligence on resolution efficiency, department workloads, recurring failure hotspots, and predictive maintenance alerts.
        </p>
      </div>

      {/* Section 1: Predictive Alert Banner */}
      <PredictiveAlert />

      {/* Section 2: Ward Heatmap Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
          🗺️ Ward Infrastructure Failure Hotspots
        </h3>
        <HeatMap />
      </div>

      {/* Section 3: Monthly Trend Charts */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
          📈 Monthly Complaint Resolution & SLA Trends
        </h3>
        <AnalyticsCharts />
      </div>
    </div>
  );
}
