import React, { useState } from 'react';
import { ShieldCheck, Camera, CheckCircle2, X, Building2, Upload, AlertCircle } from 'lucide-react';

const SAMPLE_PROOF_PRESETS = [
  {
    name: 'Road Resurfacing Completed',
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=600&auto=format&fit=crop&q=80',
    desc: 'Hot-mix asphalt patch laid & leveled, site cleared.'
  },
  {
    name: 'Pipeline & Sewer Fixed',
    url: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
    desc: 'Mainline joint replaced, pressure restored to 4.2 bar.'
  },
  {
    name: 'Waste Dump Cleared',
    url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop&q=80',
    desc: 'Solid waste removed via JCB & bin disinfected.'
  }
];

export default function ResolutionProofModal({ complaint, onClose, onSubmitResolution }) {
  const [photoUrl, setPhotoUrl] = useState(SAMPLE_PROOF_PRESETS[0].url);
  const [notes, setNotes] = useState(SAMPLE_PROOF_PRESETS[0].desc);
  const [loading, setLoading] = useState(false);
  const [customFile, setCustomFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomFile(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photoUrl) {
      alert('Please upload or select a resolution photo proof');
      return;
    }
    setLoading(true);
    await onSubmitResolution({
      complaintId: complaint.complaintId,
      resolutionProof: photoUrl,
      resolutionNotes: notes,
      status: 'Pending Verification'
    });
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl border border-emerald-200 shadow-2xl max-w-lg w-full p-6 space-y-6 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-emerald-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>OFFICER RESOLUTION PROOF PROTOCOL</span>
            </div>
            <h3 className="text-xl font-extrabold text-emerald-950 flex items-center gap-2">
              <Camera className="w-5 h-5 text-emerald-600" />
              <span>Verify Work Authenticity</span>
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

        {/* Ticket Summary */}
        <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100 space-y-1 text-xs">
          <div className="flex justify-between font-bold text-emerald-900">
            <span>Ticket: {complaint?.complaintId}</span>
            <span className="bg-white px-2 py-0.5 rounded border border-emerald-200">{complaint?.category}</span>
          </div>
          <p className="font-extrabold text-emerald-950">{complaint?.title}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Photo Proof Upload or Preset Select */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-emerald-950 flex items-center justify-between">
              <span>Resolution Photo Proof (Required)</span>
              <span className="text-[11px] text-emerald-700 font-medium">GPS & Timestamp Tagged</span>
            </label>

            {/* Photo Preview Box */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-emerald-200 bg-emerald-50/40 h-44 flex items-center justify-center group">
              {photoUrl ? (
                <>
                  <img src={photoUrl} alt="Resolution Proof" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Proof Attached</span>
                  </div>
                </>
              ) : (
                <div className="text-center p-4 space-y-2">
                  <Upload className="w-8 h-8 text-emerald-500 mx-auto" />
                  <span className="text-xs font-semibold text-emerald-800 block">Click or Drop Photo Proof</span>
                </div>
              )}
            </div>

            {/* Preset Selector or Device Upload */}
            <div className="flex items-center gap-2 pt-1">
              <label className="flex-1 cursor-pointer bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs py-2 px-3 rounded-xl transition text-center flex items-center justify-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-emerald-600" />
                <span>{customFile ? `Uploaded: ${customFile}` : 'Upload Photo from Device'}</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
            </div>

            <div className="space-y-1 pt-1">
              <span className="text-[11px] font-bold text-emerald-800 block">Or Select Sample Work Proof:</span>
              <div className="grid grid-cols-3 gap-2">
                {SAMPLE_PROOF_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setPhotoUrl(preset.url);
                      setNotes(preset.desc);
                      setCustomFile(null);
                    }}
                    className={`p-2 rounded-xl border text-left text-[10px] font-semibold transition ${
                      photoUrl === preset.url
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500'
                        : 'border-emerald-100 bg-white text-emerald-800 hover:bg-emerald-50/50'
                    }`}
                  >
                    <span className="block truncate">{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Work Completion Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-emerald-950">Engineering & Resolution Notes</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-emerald-50/30 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-950 outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
              placeholder="Describe repair specifications, materials used, contractor notes..."
            />
          </div>

          {/* Explanation Banner */}
          <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl text-[11px] text-amber-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>3-Citizen Verification Protocol Triggered</span>
            </div>
            <p className="leading-relaxed">
              Submitting photo proof will update the status to <strong>"Pending Verification"</strong> and sync live telemetry with the <strong>AI City Digital Twin</strong>. Final resolution will be certified once 3 citizens verify authenticity.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs py-3 rounded-xl transition border border-emerald-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 btn-emerald text-xs py-3 justify-center shadow-md"
            >
              <Building2 className="w-4 h-4" />
              <span>{loading ? 'Publishing Telemetry...' : 'Submit & Sync Digital Twin'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
