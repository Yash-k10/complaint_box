import React, { useState } from 'react';

export default function OfficerDashboard() {
  const [activeTab, setActiveTab] = useState('matrix'); // 'matrix' | 'analytics' | 'fleet'
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Sample Reports Data (Matching Image 5)
  const [reports, setReports] = useState([
    {
      id: 'CF-2026-9430',
      citizen: 'Gunjan Ramteke',
      category: 'Roads',
      priority: 'High',
      confidence: '89%',
      status: 'Pending',
      worker: 'Awaiting Dispatch',
      location: 'Ward 12'
    },
    {
      id: 'CF-2026-9802',
      citizen: 'Rahul Sharma',
      category: 'Garbage',
      priority: 'High',
      confidence: '94%',
      status: 'Pending',
      worker: 'Awaiting Dispatch',
      location: 'Ward 12'
    },
    {
      id: 'CF-2026-1044',
      citizen: 'Amit Patel',
      category: 'Water',
      priority: 'Medium',
      confidence: '96%',
      status: 'In Progress',
      worker: 'Ramesh Kumar (Plumber)',
      location: 'Ward 5'
    },
    {
      id: 'CF-2026-0881',
      citizen: 'Priya Verma',
      category: 'Electrical',
      priority: 'Low',
      confidence: '98%',
      status: 'Resolved',
      worker: 'Suresh Patil (Lineman)',
      location: 'Ward 7'
    }
  ]);

  const [workers, setWorkers] = useState([
    { id: 'W-101', name: 'Ramesh Kumar', skill: 'Water & Sewage Specialist', phone: '9822114455', status: 'On Duty' },
    { id: 'W-102', name: 'Suresh Patil', skill: 'Electrical Engineer', phone: '9822114466', status: 'Available' },
    { id: 'W-103', name: 'Vijay Deshmukh', skill: 'Road Maintenance Lead', phone: '9822114477', status: 'On Duty' }
  ]);

  // Dispatch Action Handler
  const handleAssignWorker = (reportId, workerName) => {
    setReports(reports.map(r => r.id === reportId ? { ...r, worker: workerName, status: 'In Progress' } : r));
    alert(`Worker ${workerName} dispatched to report ${reportId}!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
      {/* Header Bar (Matching Image 5) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-3xl font-black text-sky-900">Municipal Admin Command Center</h1>
          <p className="text-slate-500 text-sm font-medium">
            Dispatch field workers, view AI decision explainability, and generate municipal reports.
          </p>
        </div>

        {/* Action Buttons (Matching Image 5) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => alert('Municipal Reports CSV Exported')}
            className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-sm"
          >
            <span>📄</span> Export CSV Report
          </button>
          <button
            type="button"
            onClick={() => {
              const wName = prompt('Enter new field worker name:');
              if (wName) setWorkers([...workers, { id: `W-${100 + workers.length + 1}`, name: wName, skill: 'General Specialist', phone: '9800000000', status: 'Available' }]);
            }}
            className="text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-sm"
          >
            <span>👤+</span> Add Worker
          </button>
        </div>
      </div>

      {/* 4 Summary Stat Cards (Matching Image 5) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center text-xl font-bold">
            📋
          </div>
          <div>
            <span className="text-2xl font-black text-slate-800">{reports.length}</span>
            <span className="text-xs font-semibold text-slate-500 block">Total Reports</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl font-bold">
            ⏳
          </div>
          <div>
            <span className="text-2xl font-black text-slate-800">
              {reports.filter(r => r.status === 'Pending').length}
            </span>
            <span className="text-xs font-semibold text-slate-500 block">Pending Triage</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
            ✅
          </div>
          <div>
            <span className="text-2xl font-black text-slate-800">
              {reports.filter(r => r.status === 'Resolved').length}
            </span>
            <span className="text-xs font-semibold text-slate-500 block">Resolved Reports</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold">
            🛡️
          </div>
          <div>
            <span className="text-2xl font-black text-slate-800">100%</span>
            <span className="text-xs font-semibold text-slate-500 block">SLA Compliance Rate</span>
          </div>
        </div>
      </div>

      {/* Tabs Row (Matching Image 5) */}
      <div className="flex border-b border-slate-200 text-xs font-bold">
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-5 py-3 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'matrix' ? 'border-sky-600 text-sky-700 bg-white font-extrabold' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>📑</span> Complaints Matrix
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-5 py-3 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'analytics' ? 'border-sky-600 text-sky-700 bg-white font-extrabold' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>🗺️</span> Heatmap & Analytics
        </button>
        <button
          onClick={() => setActiveTab('fleet')}
          className={`px-5 py-3 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'fleet' ? 'border-sky-600 text-sky-700 bg-white font-extrabold' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>👥</span> Worker Fleet
        </button>
      </div>

      {/* TAB 1: COMPLAINTS MATRIX (Matching Image 5) */}
      {activeTab === 'matrix' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4 p-6">
          {/* Filters Bar (Matching Image 5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <input
              type="text"
              className="civic-input text-xs col-span-1 lg:col-span-2"
              placeholder="Search ticket #, title, citizen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className="civic-input text-xs"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Roads">Roads</option>
              <option value="Water">Water</option>
              <option value="Garbage">Garbage</option>
              <option value="Electrical">Electrical</option>
            </select>

            <select
              className="civic-input text-xs"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="All">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <button
              onClick={() => { setSearchQuery(''); setCategoryFilter('All'); setPriorityFilter('All'); }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl border border-slate-300 transition flex items-center justify-center gap-1"
            >
              <span>🔄</span> Refresh
            </button>
          </div>

          {/* Table (Matching Image 5) */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Ticket ID</th>
                  <th className="p-3.5">Citizen</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Priority</th>
                  <th className="p-3.5">AI Confidence</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5">Assigned Worker</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
                {reports.map((rep) => (
                  <tr key={rep.id} className="hover:bg-slate-50 transition">
                    <td className="p-3.5 font-bold text-sky-700">{rep.id}</td>
                    <td className="p-3.5 font-semibold">{rep.citizen}</td>
                    <td className="p-3.5 text-slate-600">{rep.category}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${rep.priority === 'High' ? 'badge-high' : 'badge-medium'}`}>
                        {rep.priority}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-600 font-mono">{rep.confidence}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${rep.status === 'Resolved' ? 'badge-resolved' : rep.status === 'In Progress' ? 'badge-progress' : 'badge-pending'}`}>
                        {rep.status}
                      </span>
                    </td>
                    <td className="p-3.5 font-semibold text-slate-700">{rep.worker}</td>
                    <td className="p-3.5 text-right">
                      <select
                        onChange={(e) => handleAssignWorker(rep.id, e.target.value)}
                        defaultValue=""
                        className="bg-slate-100 border border-slate-200 rounded-lg text-[10px] font-bold px-2 py-1 outline-none cursor-pointer"
                      >
                        <option value="" disabled>Dispatch Worker...</option>
                        {workers.map(w => (
                          <option key={w.id} value={w.name}>{w.name}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: ANALYTICS PREVIEW */}
      {activeTab === 'analytics' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-3">
          <span className="text-4xl block">🗺️</span>
          <h3 className="text-xl font-bold text-slate-800">Spatial Hotspot Heatmap & Ward Telemetry</h3>
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            Live telemetry tracking infrastructure degradation across Ward 12, Ward 5, and Ward 7.
          </p>
        </div>
      )}

      {/* TAB 3: WORKER FLEET */}
      {activeTab === 'fleet' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="text-lg font-bold text-slate-800">Municipal Field Worker Fleet</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workers.map(w => (
              <div key={w.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs font-medium">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sky-700">{w.id}</span>
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold">{w.status}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{w.name}</h4>
                <p className="text-slate-600">{w.skill}</p>
                <p className="text-slate-500 font-mono">{w.phone}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
