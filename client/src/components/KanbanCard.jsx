import React from 'react';
import StatusBadge from './StatusBadge';
export default function KanbanCard({ complaint, onSelect }) { return (<div onClick={()=>onSelect?.(complaint)} className='bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-cyan-500 cursor-pointer mb-3'><div className='flex justify-between mb-2'><span className='text-xs text-cyan-400 font-mono'>{complaint.complaintId}</span><StatusBadge status={complaint.status} /></div><h4 className='font-semibold text-white text-sm'>{complaint.title}</h4><div className='flex justify-between mt-2 text-xs text-slate-400'><span>Ward {complaint.wardId}</span><span className='text-cyan-400'>{complaint.confidenceScore}% AI</span></div></div>); }

