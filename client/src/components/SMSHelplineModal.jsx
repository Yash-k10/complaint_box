import React, { useState } from 'react';
import axios from 'axios';
import { PhoneCall, MessageSquare, Send, CheckCircle2, X, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

const PRESET_SMS_TEXTS = [
  {
    label: 'Road Pothole SMS',
    text: 'Severe road pothole near ABC School Dharampeth causing traffic hazards and vehicle damage.',
    phone: '+91 98765 12345'
  },
  {
    label: 'Water Leakage SMS',
    text: 'Major water mainline pipe leak on Sadar Main Road, gushing water on street.',
    phone: '+91 98123 45678'
  },
  {
    label: 'Garbage Dump SMS',
    text: 'Solid waste uncollected for 4 days near Laxmi Nagar public park area.',
    phone: '+91 97654 32109'
  }
];

export default function SMSHelplineModal({ onClose, onSuccess }) {
  const [phone, setPhone] = useState('+91 98765 43210');
  const [message, setMessage] = useState(PRESET_SMS_TEXTS[0].text);
  const [loading, setLoading] = useState(false);
  const [autoReplyResponse, setAutoReplyResponse] = useState(null);
  const [createdTicket, setCreatedTicket] = useState(null);

  const handleSendSMS = async (e) => {
    e.preventDefault();
    if (!message.trim()) return alert('Please enter an SMS complaint message');

    setLoading(true);
    setAutoReplyResponse(null);

    try {
      const res = await axios.post('/api/complaints/sms-webhook', {
        From: phone,
        Body: message
      });

      if (res.data && res.data.data) {
        const ticketData = res.data.data;
        setCreatedTicket(ticketData);
        setAutoReplyResponse(res.data.autoReply);

        // Update local storage so Officer Dashboard and Digital Twin update instantly
        try {
          const saved = localStorage.getItem('civic_officer_complaints');
          let currentList = saved ? JSON.parse(saved) : [];
          currentList.unshift(ticketData);
          localStorage.setItem('civic_officer_complaints', JSON.stringify(currentList));
        } catch (e) {}

        onSuccess?.(ticketData);
      }
    } catch (err) {
      alert('Error sending SMS intake request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-emerald-950/50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl border border-emerald-200 shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="flex justify-between items-start p-5 sm:p-6 pb-3 border-b border-emerald-100 shrink-0 bg-white">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>OMNI-CHANNEL HELPLINE SMS INTAKE</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-emerald-950 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span>Text Message (SMS) Complaint Helpline</span>
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Municipal Phone Hotline Banner */}
          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl space-y-1 text-xs text-emerald-950">
            <div className="flex justify-between items-center font-extrabold">
              <span className="flex items-center gap-1.5 text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>NMC Toll-Free SMS Hotline: 1800-AWAZ-AI</span>
              </span>
              <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-md font-mono">
                +91 98765 43210
              </span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Citizens without smartphones can text any complaint to our SMS helpline. Text messages are auto-classified by AI and instantly posted to the main command center!
            </p>
          </div>

          {!autoReplyResponse ? (
            <form onSubmit={handleSendSMS} className="space-y-4">
              {/* Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-emerald-900 block">Try Sample SMS Text Presets:</span>
                <div className="flex flex-wrap gap-2">
                  {PRESET_SMS_TEXTS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setMessage(preset.text);
                        setPhone(preset.phone);
                      }}
                      className="px-2.5 py-1 rounded-lg border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100 text-emerald-900 text-[10.5px] font-semibold transition"
                    >
                      <span>{preset.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sender Phone Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-emerald-950">Sender Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-emerald-50/40 border border-emerald-200 rounded-xl px-4 py-2.5 text-emerald-950 text-xs font-mono font-bold outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* SMS Text Message Box */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-emerald-950">SMS Text Message Body</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-emerald-50/40 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-950 outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  placeholder="Type your SMS complaint text here (e.g. 'Pothole on main school road...')"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-emerald text-xs py-3 justify-center shadow-md font-bold"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Processing SMS Webhook...' : '📱 Send Text Message to Helpline'}</span>
              </button>
            </form>
          ) : (
            /* Auto-SMS Response Confirmation Screen */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-emerald-500 text-white p-4 rounded-2xl space-y-2 shadow-md">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span>SMS Complaint Registered Successfully!</span>
                </div>
                <p className="text-xs text-emerald-50 leading-relaxed font-mono bg-emerald-700/40 p-3 rounded-xl border border-emerald-400/30">
                  {autoReplyResponse}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-emerald-200 space-y-2 text-xs">
                <span className="font-extrabold text-emerald-950 block">Registered Ticket Details:</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div><span className="text-emerald-700 font-medium">Ticket ID:</span> <strong className="font-mono">{createdTicket?.complaintId}</strong></div>
                  <div><span className="text-emerald-700 font-medium">Category:</span> <strong>{createdTicket?.category}</strong></div>
                  <div><span className="text-emerald-700 font-medium">Source:</span> <span>SMS Helpline</span></div>
                  <div><span className="text-emerald-700 font-medium">AI Confidence:</span> <strong>{createdTicket?.confidenceScore}%</strong></div>
                </div>
                <p className="text-[10.5px] text-emerald-800 pt-1 italic border-t border-emerald-100">
                  ✓ Ticket CMP-2026-008 is now live on the Officer Command Center &amp; City Digital Twin Map.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full btn-emerald text-xs py-3 justify-center shadow-md font-bold"
              >
                <span>Done &amp; View on Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
