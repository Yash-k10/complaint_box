import React from 'react';
import TrackingTimeline from '../components/TrackingTimeline';
import XAIPanel from '../components/XAIPanel';
import BlockchainAudit from '../components/BlockchainAudit';
export default function ComplaintPage() { return (<div className='max-w-4xl mx-auto px-4 py-8 space-y-6'><div className='bg-slate-800 p-6 rounded-2xl border border-slate-700'><span className='text-xs text-cyan-400 font-mono'>CMP-2026-001</span><h2 className='text-2xl font-bold text-white'>Severe road pothole near ABC School</h2><TrackingTimeline currentStep={3} /></div><XAIPanel xaiData={{confidence:96,reasoning:['Road hazard keywords','Ward 12 mapping']}} /><BlockchainAudit /></div>); }
