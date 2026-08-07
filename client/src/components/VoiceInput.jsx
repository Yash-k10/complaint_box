import React, { useState } from 'react';

const PRESET_TRANSCRIPTS = [
  { lang: 'EN', text: "Severe road pothole near ABC School in Ward 12 causing traffic accidents." },
  { lang: 'HI', text: "वार्ड 5 में मार्केट रोड के पास पानी की पाइपलाइन लीक हो रही है।" },
  { lang: 'MR', text: "वार्ड 7 मधील सार्वजनिक उद्यानाजवळ कचरा साचला आहे." }
];

export default function VoiceInput({ onTranscript }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser. Try the simulation buttons below!');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => setListening(true);
    recognition.onresult = (event) => {
      const current = event.results[0][0].transcript;
      setTranscript(current);
      onTranscript?.(current);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognition.start();
  };

  const handleSimulate = (text) => {
    setTranscript(text);
    onTranscript?.(text);
  };

  return (
    <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/60 space-y-5 shadow-xl">
      {/* Record Button */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={startListening}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition ${
            listening ? 'bg-red-600 text-white animate-pulse' : 'bg-lime-accent text-slate-900 hover:opacity-90'
          }`}
        >
          🎤 {listening ? 'Listening...' : 'Start Voice Input'}
        </button>
        {listening && (
          <span className="flex gap-2 items-center">
            <span className="w-2.5 h-2.5 bg-red-400 rounded-full animate-ping" />
            <span className="text-xs text-red-400 font-mono font-bold">Recording audio...</span>
          </span>
        )}
      </div>

      {/* Preset Simulation Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700/60">
        <span className="text-xs text-slate-400 font-semibold">Demo Voice Presets:</span>
        {PRESET_TRANSCRIPTS.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSimulate(preset.text)}
            className="text-xs bg-slate-700/80 hover:bg-slate-600 text-cyan-300 px-4 py-2 rounded-xl transition font-medium border border-slate-600/60"
          >
            🗣️ {preset.lang}: "{preset.text.substring(0, 22)}..."
          </button>
        ))}
      </div>

      {/* Real-time Transcript Box */}
      {transcript && (
        <div className="bg-slate-900/90 p-5 rounded-2xl border border-cyan-500/30 text-xs font-mono space-y-2">
          <div className="flex justify-between text-cyan-400 font-bold">
            <span>🎙️ Audio Transcript Output</span>
            <span className="text-[10px] text-slate-500">Auto-filled ✓</span>
          </div>
          <p className="text-slate-200 leading-relaxed">{transcript}</p>
        </div>
      )}
    </div>
  );
}
