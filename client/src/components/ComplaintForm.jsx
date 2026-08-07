import React, { useState, useEffect } from 'react';

export default function ComplaintForm({ initialText = '', onSubmit }) {
  const [form, setForm] = useState({
    title: '',
    description: initialText,
    category: 'Road Damage',
    wardId: 12,
    language: 'en'
  });

  useEffect(() => {
    if (initialText) {
      setForm((prev) => ({
        ...prev,
        description: initialText,
        title: prev.title || initialText.substring(0, 45) + '...'
      }));
    }
  }, [initialText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title && !form.description) return alert('Please provide complaint details');
    onSubmit?.(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
      <h2 className="text-xl font-bold text-cyan-400 flex items-center gap-2">📝 Complaint Details</h2>
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">Complaint Title</label>
        <input
          className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500 transition"
          placeholder="e.g. Deep pothole causing traffic issues near ABC School"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">Detailed Description (Auto-populated from Voice Input)</label>
        <textarea
          className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 h-28 outline-none focus:ring-2 focus:ring-cyan-500 transition"
          placeholder="Describe the problem, severity, and location details..."
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
          <select
            className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white outline-none"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option>Road Damage</option>
            <option>Water Supply</option>
            <option>Sanitation</option>
            <option>Electrical</option>
            <option>Parks</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Ward Selection</label>
          <select
            className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white outline-none"
            value={form.wardId}
            onChange={(e) => setForm({ ...form, wardId: Number(e.target.value) })}
          >
            <option value={12}>Ward 12 - Laxmi Nagar</option>
            <option value={5}>Ward 5 - Dharampeth</option>
            <option value={7}>Ward 7 - Sadar</option>
            <option value={1}>Ward 1 - Sitabuldi</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-bold py-3.5 rounded-xl shadow-lg transition"
      >
        🚀 Submit Complaint
      </button>
    </form>
  );
}
