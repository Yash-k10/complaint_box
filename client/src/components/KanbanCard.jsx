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
      className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-lime-accent cursor-pointer space-y-3 shadow-lg transition hover:-translate-y-1"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs text-lime-accent font-mono font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
          {complaint.complaintId}
        </span>
        <StatusBadge status={complaint.status} />
      </div>

      <h4 className="font-bold text-white text-sm leading-snug line-clamp-2">{complaint.title}</h4>

      {complaint.description && (
        <p className="text-xs text-slate-400 line-clamp-2">{complaint.description}</p>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 text-xs">
        <span className="text-slate-400 font-medium">📍 Ward {complaint.wardId || 12}</span>
        <span className="text-cyan-400 font-bold font-mono">{complaint.confidenceScore || 95}% AI</span>
      </div>

      {/* Urban Feedback Citizen Endorsement & Action Bar */}
      <div className="flex items-center justify-between pt-1 gap-2">
        <button
          type="button"
          onClick={handleUpvote}
          className={`text-xs px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
            hasUpvoted
              ? 'bg-lime-accent text-slate-900'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          👍 {upvotes} {hasUpvoted ? 'Endorsed' : 'Endorse'}
        </button>

        {onStatusChange && (
          <div className="flex gap-1">
            {complaint.status !== 'In Progress' && complaint.status !== 'Resolved' && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onStatusChange(complaint.complaintId, 'In Progress');
                }}
                className="text-[10px] bg-blue-600 hover:bg-blue-500 text-white font-bold px-2 py-1 rounded"
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
                className="text-[10px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2 py-1 rounded"
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
