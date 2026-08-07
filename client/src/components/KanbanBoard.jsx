import React from 'react';
import KanbanCard from './KanbanCard';
const COLS = ['New','Assigned','In Progress','Resolved'];
export default function KanbanBoard({ complaints = [], onSelect }) { return (<div className='grid grid-cols-4 gap-4'>{COLS.map(col => (<div key={col} className='bg-slate-900/60 p-4 rounded-2xl border border-slate-800 min-h-[400px]'><h3 className='font-semibold text-slate-200 mb-3'>{col}</h3>{complaints.filter(c=>c.status===col).map(c=><KanbanCard key={c.complaintId} complaint={c} onSelect={onSelect} />)}</div>))}</div>); }
