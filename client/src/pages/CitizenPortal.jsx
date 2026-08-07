import React, { useState } from 'react';
import VoiceInput from '../components/VoiceInput';
import WhatsAppBotModal from '../components/WhatsAppBotModal';

export default function CitizenPortal() {
  const [activeTab, setActiveTab] = useState('track'); // 'track' | 'file'
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  // Mock Submitted Reports List (Matching Screenshot 1)
  const [reports, setReports] = useState([
    {
      id: 'CF-2026-9430',
      title: 'pothole',
      category: 'Roads',
      priority: 'High',
      confidence: '89%',
      status: 'Pending',
      gps: '18.4543, 73.8720 - Ward 12',
      assignedWorker: 'Awaiting Dispatch',
      description: 'pothole on the road causing problem',
      photo: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&q=80',
      createdAt: '2026-08-07'
    },
    {
      id: 'CF-2026-9802',
      title: 'overflowing garbage from the dustbin',
      category: 'Garbage',
      priority: 'High',
      confidence: '94%',
      status: 'Pending',
      gps: '18.4590, 73.8755 - Ward 12',
      assignedWorker: 'Awaiting Dispatch',
      description: 'Dustbin overflowing for past 3 days in market area',
      photo: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80',
      createdAt: '2026-08-07'
    }
  ]);

  const [selectedReport, setSelectedReport] = useState(reports[0]);

  // New Complaint Form State (Matching Screenshot 2 & 3)
  const [form, setForm] = useState({
    title: '',
    category: 'Auto-Detect via AI Engine',
    urgency: 'Medium (Standard)',
    description: '',
    location: 'Main Market Road, Ward 12',
    photo: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title && !form.description) {
      alert('Please fill out the complaint details.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newTicketId = `CF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const newReport = {
        id: newTicketId,
        title: form.title || 'Civic Infrastructure Issue',
        category: form.category === 'Auto-Detect via AI Engine' ? 'Roads' : form.category,
        priority: form.urgency.includes('High') || form.urgency.includes('Critical') ? 'High' : 'Medium',
        confidence: '91%',
        status: 'Pending',
        gps: '18.4543, 73.8720 - Ward 12',
        assignedWorker: 'Awaiting Dispatch',
        description: form.description || form.title,
        photo: form.photo ? URL.createObjectURL(form.photo) : 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&q=80',
        createdAt: new Date().toISOString().split('T')[0]
      };

      setReports([newReport, ...reports]);
      setSelectedReport(newReport);
      setIsSubmitting(false);
      setActiveTab('track');
      alert(`Complaint Registered Successfully! Ticket ID: ${newTicketId}`);
    }, 600);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
      {/* Header Bar (Matching Screenshots 1, 2, 3) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-3xl font-black text-sky-900">Citizen Redressal Hub</h1>
          <p className="text-slate-500 text-sm font-medium">
            Report municipal issues, auto-detect location, and track resolution live.
          </p>
        </div>

        {/* Action Toggle Buttons (Matching Screenshots 1 & 3) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('file')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm ${
              activeTab === 'file' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>➕</span> File Report
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('track')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm ${
              activeTab === 'track' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>🔄</span> Track Complaints
          </button>
        </div>
      </div>

      {/* VIEW 1: TRACK COMPLAINTS (Matching Screenshot 1) */}
      {activeTab === 'track' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Your Submitted Reports List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-extrabold text-sky-900 border-b border-slate-100 pb-3">
                Your Submitted Reports
              </h3>

              <div className="space-y-3">
                {reports.map((rep) => (
                  <div
                    key={rep.id}
                    onClick={() => setSelectedReport(rep)}
                    className={`p-4 rounded-xl border transition cursor-pointer space-y-2.5 ${
                      selectedReport?.id === rep.id
                        ? 'border-sky-500 bg-sky-50/50 shadow-md ring-2 ring-sky-400/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-sky-700">{rep.id}</span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${rep.priority === 'High' ? 'badge-high' : 'badge-medium'}`}>
                        {rep.priority}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{rep.title}</h4>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">📁 {rep.category}</span>
                      <span className="badge-pending text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {rep.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Selected Complaint Details (Matching Screenshot 1) */}
          <div className="lg:col-span-7">
            {selectedReport && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                {/* Detail Header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-lg">
                    {selectedReport.id}
                  </span>
                  <button
                    onClick={() => alert(`Official Receipt PDF generated for ${selectedReport.id}`)}
                    className="text-xs font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg flex items-center gap-1"
                  >
                    📄 Official Receipt
                  </button>
                </div>

                {/* Complaint Title & Location */}
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-slate-800">{selectedReport.title}</h2>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <span>📍</span> GPS Location ({selectedReport.gps})
                  </p>
                </div>

                {/* AI Priority & Field Worker Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-500 font-semibold block text-[10px]">AI Priority Classification</span>
                    <div className="flex items-center gap-2">
                      <span className="badge-high text-xs font-bold px-2.5 py-0.5 rounded-md">{selectedReport.priority}</span>
                      <span className="text-slate-600 font-bold">(Confidence: {selectedReport.confidence})</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-500 font-semibold block text-[10px]">Assigned Field Specialist</span>
                    <span className="text-slate-800 font-bold block">{selectedReport.assignedWorker}</span>
                  </div>
                </div>

                {/* Full Description */}
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-500 block uppercase">Description</span>
                  <p className="text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedReport.description}
                  </p>
                </div>

                {/* Photo Proof */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 block uppercase">Photo Proof (Before & After)</span>
                  <div className="w-36 h-28 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group">
                    <img src={selectedReport.photo} alt="Proof" className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 left-1 bg-slate-900/80 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                      Before Repair
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: SUBMIT NEW CIVIC COMPLAINT FORM (Matching Screenshots 2 & 3) */}
      {activeTab === 'file' && (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4">
            <h3 className="text-lg font-black text-sky-900 flex items-center gap-2">
              <span>📝</span> Submit New Civic Complaint
            </h3>
            <button
              type="button"
              onClick={() => setShowVoiceModal(!showVoiceModal)}
              className="text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 px-3 py-1.5 rounded-xl transition flex items-center gap-1"
            >
              🎤 Voice Complaint Simulation
            </button>
          </div>

          {showVoiceModal && (
            <div className="bg-slate-50 p-4 rounded-xl border border-sky-200 space-y-2">
              <VoiceInput
                onTranscript={(text) => {
                  setForm({ ...form, description: text, title: text.substring(0, 40) });
                  setShowVoiceModal(false);
                }}
              />
            </div>
          )}

          {/* Row 1: Complaint Title */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">Complaint Title / Short Summary *</label>
            <input
              type="text"
              required
              className="w-full civic-input text-sm"
              placeholder="e.g. Hazardous deep pothole near central market gate"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          {/* Row 2: Category & Urgency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Department Category</label>
              <select
                className="w-full civic-input text-sm"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="Auto-Detect via AI Engine">Auto-Detect via AI Engine</option>
                <option value="Roads & Infrastructure">Roads & Infrastructure</option>
                <option value="Water Supply & Sewage">Water Supply & Sewage</option>
                <option value="Garbage & Sanitation">Garbage & Sanitation</option>
                <option value="Electrical & Streetlights">Electrical & Streetlights</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Reported Urgency Level</label>
              <select
                className="w-full civic-input text-sm"
                value={form.urgency}
                onChange={(e) => setForm({ ...form, urgency: e.target.value })}
              >
                <option value="Medium (Standard)">Medium (Standard)</option>
                <option value="Low (Minor)">Low (Minor)</option>
                <option value="High (Urgent)">High (Urgent)</option>
                <option value="Critical (Emergency)">Critical (Emergency)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Detailed Description */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-700">Detailed Description *</label>
            </div>
            <textarea
              rows="4"
              required
              className="w-full civic-input text-sm"
              placeholder="Describe the issue in detail..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          {/* Row 4: Location Address */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-700">Location Address</label>
              <button
                type="button"
                onClick={() => setForm({ ...form, location: 'GPS Locked: 18.4543, 73.8720 - Ward 12, Main Market Road' })}
                className="text-xs text-sky-700 font-bold hover:underline flex items-center gap-1"
              >
                📍 Auto-Detect GPS
              </button>
            </div>
            <input
              type="text"
              className="w-full civic-input text-sm"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </div>

          {/* Row 5: Photo Drag & Drop (Matching Screenshot 2) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">Upload Complaint Photo (Optional)</label>
            <div className="border-2 border-dashed border-slate-300 hover:border-sky-500 rounded-2xl p-8 text-center bg-slate-50 hover:bg-sky-50/40 transition cursor-pointer space-y-2 relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="w-12 h-12 bg-sky-600 text-white rounded-full mx-auto flex items-center justify-center text-xl shadow-md">
                ☁️
              </div>
              <p className="text-xs font-bold text-slate-600">
                Click or drag photos here (PNG, JPG up to 10MB)
              </p>
              {form.photo && (
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                  Selected: {form.photo.name}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button (Matching Screenshot 2 & 3) */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-sky-700 hover:bg-sky-800 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm transition shadow-lg flex items-center gap-2"
            >
              <span>🤖</span> {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
            </button>
          </div>
        </form>
      )}

      {/* Floating WhatsApp Bot Modal trigger button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center text-2xl shadow-xl transition hover:scale-105 border-2 border-white"
          title="Open WhatsApp Bot Simulation"
        >
          💬
        </button>
      </div>

      {showWhatsAppModal && (
        <WhatsAppBotModal onClose={() => setShowWhatsAppModal(false)} />
      )}
    </div>
  );
}
