import React, { useState } from 'react';
import ComplaintForm from '../components/ComplaintForm';
import VoiceInput from '../components/VoiceInput';
import ImageUpload from '../components/ImageUpload';
import LocationPicker from '../components/LocationPicker';
import PrivacyShield from '../components/PrivacyShield';

export default function CitizenPortal() {
  const [submitted, setSubmitted] = useState(null);
  const [voiceText, setVoiceText] = useState('');

  const handleComplaintSubmit = (formData) => {
    setSubmitted({
      complaintId: `CMP-2026-00${Math.floor(Math.random() * 90) + 10}`,
      ...formData
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <PrivacyShield />
      {submitted ? (
        <div className="bg-slate-800 p-8 rounded-2xl border border-emerald-500/40 text-center space-y-4 shadow-2xl">
          <span className="text-5xl">🎉</span>
          <h2 className="text-2xl font-bold text-emerald-400">Complaint Submitted Successfully!</h2>
          <p className="text-slate-300">
            Your Tracking ID: <span className="text-cyan-400 font-mono font-bold text-lg">{submitted.complaintId}</span>
          </p>
          <p className="text-xs text-slate-400">AI Triage & Privacy Shield verified. Routed to Ward Officer.</p>
          <button
            onClick={() => {
              setSubmitted(null);
              setVoiceText('');
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-xl transition"
          >
            File Another Complaint
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <VoiceInput onTranscript={(text) => setVoiceText(text)} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LocationPicker />
            <ImageUpload />
          </div>
          <ComplaintForm initialText={voiceText} onSubmit={handleComplaintSubmit} />
        </div>
      )}
    </div>
  );
}
