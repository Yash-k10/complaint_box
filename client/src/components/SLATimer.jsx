import React from 'react';
export default function SLATimer({ hoursRemaining = 34, totalHours = 48 }) { const pct = Math.max(0,(hoursRemaining/totalHours)*100); const urgent = hoursRemaining <= 12; return (<div className='bg-slate-800 p-4 rounded-xl border border-slate-700'><div className='flex justify-between text-sm mb-2'><span className='text-slate-400'>SLA Timer</span><span className={urgent ? 'text-red-400 animate-pulse' : 'text-cyan-400'}>⏳ {hoursRemaining}h left</span></div><div className='w-full bg-slate-700 h-2 rounded-full'><div className={`h-full ${urgent ? 'bg-red-500' : 'bg-cyan-400'}`} style={{width:`${pct}%`}} /></div></div>); }


