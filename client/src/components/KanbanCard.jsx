import React, { useState } from 'react';
import StatusBadge from './StatusBadge';
import { ThumbsUp, MapPin, Sparkles } from 'lucide-react';

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
      className="bg-white p-4 rounded-xl border border-emerald-100 hover:border-emerald-400 cursor-pointer space-y-3 shadow-xs transition hover:-translate-y-0.5"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          {complaint.complaintId}
        </span>
        <StatusBadge status={complaint.status} />
      </div>

      {/* Title */}
      <h4 className="font-bold text-emerald-950 text-xs leading-snug">{complaint.title}</h4>

      {/* Description */}
      {complaint.description && (
        <p className="text-[11px] text-emerald-800 leading-relaxed line-clamp-2">{complaint.description}</p>
      )}

      {/* Meta Row */}
      <div className="flex items-center justify-between pt-2 border-t border-emerald-100 text-[11px]">
        <span className="text-emerald-800 font-medium flex items-center gap-1">
          <MapPin className="w-3 h-3 text-emerald-600" />
          <span>Ward {complaint.wardId || 12}</span>
        </span>
        <span className="text-emerald-700 font-bold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-emerald-600" />
          <span>{complaint.confidenceScore || 95}% AI</span>
        </span>
      </div>

      {/* Action Row */}
      <div className="flex items-center justify-between pt-1 gap-2">
        <button
          type="button"
          onClick={handleUpvote}
          className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
            hasUpvoted
              ? 'bg-emerald-600 text-white'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
          }`}
        >
          <ThumbsUp className="w-3 h-3" />
          <span>{upvotes}</span>
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
                className="text-[11px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded-lg transition border border-emerald-200"
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
                className="text-[11px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-2.5 py-1 rounded-lg transition"
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
