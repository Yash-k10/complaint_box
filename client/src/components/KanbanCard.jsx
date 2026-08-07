import React, { useState } from 'react';
import StatusBadge from './StatusBadge';

export default function KanbanCard({ complaint, onSelect, onStatusChange }) {
  const [upvotes, setUpvotes] = useState(complaint.upvotes || Math.floor(Math.random() * 20) + 5);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvote = (e) => {
    e.stopPropagation();
    if (!hasUpvoted) {
      setUpvotes((prev) => prev + 1);
      setHasUpvoted(true);
    }
  };

  return (
    <div
      onClick={() => onSelect?.(complaint)}
      className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700/60 hover:border-lime-accent/60 cursor-pointer space-y-4 shadow-lg transition hover:-translate-y-1"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-lime-accent font-mono font-bold bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700">
          {complaint.complaintId}
        </span>
        <StatusBadge status={complaint.status} />
      </div>

      {/* Title */}
      <h4 className="font-bold text-white text-sm leading-relaxed">{complaint.title}</h4>

      {/* Description */}
      {complaint.description && (
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{complaint.description}</p>
      )}

      {/* Meta Row */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-700/40 text-xs">
        <span className="text-slate-400 font-medium">📍 Ward {complaint.wardId || 12}</span>
        <span className="text-cyan-400 font-bold font-mono">{complaint.confidenceScore || 95}% AI</span>
      </div>

      {/* Action Row */}
      <div className="flex items-center justify-between pt-2 gap-3">
        <button
          type="button"
          onClick={handleUpvote}
          className={`text-xs px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
            hasUpvoted
              ? 'bg-lime-accent text-slate-900'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          👍 {upvotes} {hasUpvoted ? 'Endorsed' : 'Endorse'}
        </button>

        {onStatusChange && (
          <div className="flex gap-2">
            {complaint.status !== 'In Progress' && complaint.status !== 'Resolved' && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onStatusChange(complaint.complaintId, 'In Progress');
                }}
                className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-xl transition"
              >
                Start
              </button>
            )}
            {complaint.status !== 'Resolved' && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onStatusChange(complaint.complaintId, 'Resolved');
                }}
                className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-xl transition"
              >
                Resolve
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
