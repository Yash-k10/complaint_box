import React from 'react';
const C = { New: 'bg-blue-500', Assigned: 'bg-yellow-500', 'In Progress': 'bg-orange-500', Resolved: 'bg-green-500' };
export default function StatusBadge({ status }) { return <span className={`${C[status]||'bg-slate-500'} text-white text-xs px-3 py-1 rounded-full`}>{status}</span>; }
