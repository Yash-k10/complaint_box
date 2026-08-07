import React from 'react';
import KanbanBoard from '../components/KanbanBoard';
import SLATimer from '../components/SLATimer';
import ResolutionCopilot from '../components/ResolutionCopilot';
const MOCK = [{complaintId:'CMP-2026-001',title:'Severe road pothole near ABC School',status:'In Progress',wardId:12,confidenceScore:96},{complaintId:'CMP-2026-002',title:'Major water pipe leakage',status:'Assigned',wardId:5,confidenceScore:94},{complaintId:'CMP-2026-003',title:'Uncollected garbage',status:'New',wardId:5,confidenceScore:91}];
export default function OfficerDashboard() { return (<div className='max-w-7xl mx-auto px-4 py-8 space-y-6'><div className='flex justify-between items-center'><h2 className='text-2xl font-bold text-white'>Officer Dashboard</h2><SLATimer /></div><KanbanBoard complaints={MOCK} /><ResolutionCopilot /></div>); }
