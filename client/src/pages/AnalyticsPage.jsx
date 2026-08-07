import React from 'react';
import HeatMap from '../components/HeatMap';
import AnalyticsCharts from '../components/AnalyticsCharts';
import PredictiveAlert from '../components/PredictiveAlert';
export default function AnalyticsPage() { return (<div className='max-w-7xl mx-auto px-4 py-8 space-y-6'><h2 className='text-2xl font-bold text-white'>Civic Analytics</h2><PredictiveAlert /><HeatMap /><AnalyticsCharts /></div>); }
