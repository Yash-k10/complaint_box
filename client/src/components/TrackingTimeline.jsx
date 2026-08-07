import React from 'react';
const STEPS = ['📩 Submitted','🤖 AI Analyzed','👤 Assigned','🔧 In Progress','✅ Resolved'];
export default function TrackingTimeline({ currentStep = 2 }) { return (<div className='flex items-center gap-1'>{STEPS.map((s,i) => (<div key={i} className='flex items-center'><span className={i <= currentStep ? 'text-cyan-400' : 'text-slate-500'}>{s}</span>{i < STEPS.length-1 && <div className={`w-8 h-0.5 mx-1 ${i < currentStep ? 'bg-cyan-400' : 'bg-slate-600'}`} />}</div>))}</div>); }
