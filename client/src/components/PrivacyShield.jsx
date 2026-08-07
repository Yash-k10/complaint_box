import React from 'react';
import { ShieldCheck, Lock, Camera, CheckCircle2 } from 'lucide-react';

export default function PrivacyShield() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-emerald-100 space-y-4 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-emerald-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <span>PRIVACY-BY-DESIGN SHIELD</span>
            </div>
            <h4 className="font-extrabold text-emerald-950 text-base">Constitutional AI Safety Shield Active</h4>
          </div>
        </div>

        <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-bold shrink-0">
          100% Compliant ✓
        </span>
      </div>

      {/* Safety Specs Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-800 font-bold block flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>PII Masking</span>
          </span>
          <span className="text-emerald-900 text-[11px]">Aadhaar & Phone Auto Redacted</span>
        </div>

        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-800 font-bold block flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>YOLO Blur AI</span>
          </span>
          <span className="text-emerald-900 text-[11px]">Faces & License Plates Blurred</span>
        </div>

        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-800 font-bold block flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Doxxing Shield</span>
          </span>
          <span className="text-emerald-900 text-[11px]">Targeting Info Blocked</span>
        </div>

        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 space-y-1">
          <span className="text-emerald-800 font-bold block flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>DPDP Compliance</span>
          </span>
          <span className="text-emerald-900 text-[11px]">Digital Personal Data Act 2023</span>
        </div>
      </div>

      {/* YOLO Object Blur Explanation Banner */}
      <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-emerald-950">
          <Camera className="w-4 h-4 text-emerald-600" />
          <span>🤖 YOLOv8 Automatic Computer Vision Anonymization</span>
        </div>
        <p className="text-[11px] text-emerald-900 leading-relaxed">
          Every evidence image uploaded by citizens or officers is scanned in real-time by a YOLO object detection model. All detected <strong>human faces</strong> and <strong>vehicle license plates</strong> are automatically covered with a pixelated privacy blur mask prior to public display.
        </p>
      </div>
    </div>
  );
}
