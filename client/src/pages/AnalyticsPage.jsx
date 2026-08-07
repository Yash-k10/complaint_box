import React from 'react';
import HeatMap from '../components/HeatMap';
import AnalyticsCharts from '../components/AnalyticsCharts';
import PredictiveAlert from '../components/PredictiveAlert';
import { BarChart3, MapPin, TrendingUp, ShieldCheck } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header Banner */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>CITY-WIDE ANALYTICS</span>
          <span className="text-emerald-300">•</span>
          <span>PREDICTIVE CIVIC INTELLIGENCE</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-950 flex items-center gap-2.5">
          <BarChart3 className="w-7 h-7 text-emerald-600" />
          <span>Civic Operations & City Zone Analytics</span>
        </h1>
        <p className="text-emerald-800 text-xs md:text-sm max-w-2xl leading-relaxed">
          Real-time intelligence on resolution efficiency, department workloads, recurring failure hotspots, and predictive maintenance alerts.
        </p>
      </div>

      {/* Section 1: Predictive Alert Banner */}
      <PredictiveAlert />

      {/* Section 2: City Infrastructure Heatmap Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>City Infrastructure Failure Hotspots</span>
        </h3>
        <HeatMap />
      </div>

      {/* Section 3: Monthly Trend Charts */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span>Monthly Complaint Resolution & SLA Trends</span>
        </h3>
        <AnalyticsCharts />
      </div>
    </div>
  );
}
