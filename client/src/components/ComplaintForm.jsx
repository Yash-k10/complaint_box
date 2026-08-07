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
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/80 p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h2 className="text-xl font-black text-lime-accent flex items-center gap-2">📝 Complaint Details</h2>
        <span className="bg-lime-accent/15 text-lime-accent border border-lime-accent/30 text-xs px-3.5 py-1 rounded-full font-mono font-bold">
          Innovation #13: Impact Score Enabled
        </span>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Complaint Title</label>
        <input
          className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-lime-accent/50 transition text-sm"
          placeholder="e.g. Deep pothole causing traffic issues near ABC School"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Detailed Description (Auto-populated from Voice Input)</label>
        <textarea
          className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-slate-500 h-32 outline-none focus:ring-2 focus:ring-lime-accent/50 transition text-sm"
          placeholder="Describe the problem, severity, and location details..."
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Category</label>
          <select
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none text-sm"
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
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Ward Selection</label>
          <select
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none text-sm"
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

      {/* Community Impact Score Calculation Box */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700 text-xs font-mono space-y-2">
        <div className="flex justify-between text-cyan-400 font-bold">
          <span>📊 AI Community Impact Multiplier</span>
          <span>Score: 9.4 / 10 (Critical Priority)</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
          <div className="bg-slate-800 p-2 rounded-xl text-center">🏫 School Nearby (+2.5)</div>
          <div className="bg-slate-800 p-2 rounded-xl text-center">🏥 Hospital Route (+3.0)</div>
          <div className="bg-slate-800 p-2 rounded-xl text-center">🚗 High Traffic (+3.9)</div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-lime-accent hover:opacity-90 text-slate-900 font-black py-4 rounded-2xl shadow-xl transition text-sm uppercase tracking-wider"
      >
        🚀 Submit Complaint with AI Triage
      </button>
    </form>
  );
}
