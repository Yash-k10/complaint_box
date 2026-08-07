import React, { useState } from 'react';
import { Mic, Volume2, CheckCircle2 } from 'lucide-react';

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
    <div className="bg-white p-6 rounded-2xl border border-emerald-100 space-y-4 shadow-xs">
      {/* Record Button */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={startListening}
          className={`btn-emerald text-xs py-2.5 px-5 ${
            listening ? 'bg-red-600 animate-pulse' : ''
          }`}
        >
          <Mic className={`w-4 h-4 ${listening ? 'animate-bounce' : ''}`} />
          <span>{listening ? 'Listening...' : 'Start Voice Recording'}</span>
        </button>
        {listening && (
          <span className="flex gap-2 items-center">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
            <span className="text-xs text-red-600 font-bold">Recording audio...</span>
          </span>
        )}
      </div>

      {/* Preset Simulation Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-emerald-100">
        <span className="text-xs text-emerald-800 font-semibold">Demo Voice Presets:</span>
        {PRESET_TRANSCRIPTS.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSimulate(preset.text)}
            className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl transition font-medium border border-emerald-200 flex items-center gap-1"
          >
            <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{preset.lang}: "{preset.text.substring(0, 24)}..."</span>
          </button>
        ))}
      </div>

      {/* Real-time Transcript Box */}
      {transcript && (
        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 text-xs font-mono space-y-1">
          <div className="flex justify-between items-center text-emerald-900 font-bold font-sans">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Audio Transcript Output</span>
            </span>
            <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-800">Auto-filled ✓</span>
          </div>
          <p className="text-emerald-950 font-sans leading-relaxed pt-1">{transcript}</p>
        </div>
      )}
    </div>
  );
}
