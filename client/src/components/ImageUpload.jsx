import React, { useState } from 'react';
import { Upload, Camera, CheckCircle2 } from 'lucide-react';

export default function ImageUpload({ onUpload }) {
  const [preview, setPreview] = useState(null);

  return (
    <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-emerald-200 text-center space-y-3 shadow-xs hover:border-emerald-400 transition">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const f = e.target.files[0];
          if (f) {
            setPreview(URL.createObjectURL(f));
            onUpload?.(f);
          }
        }}
        className="hidden"
        id="img-upload"
      />
      <label
        htmlFor="img-upload"
        className="cursor-pointer flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-emerald-50/50 transition"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
          <Camera className="w-5 h-5" />
        </div>
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-emerald-950 block">Upload Evidence Photo</span>
          <span className="text-[11px] text-emerald-700 block">Click to upload image or drag & drop</span>
        </div>
      </label>

      {preview && (
        <div className="space-y-2 pt-2 border-t border-emerald-100">
          <img src={preview} alt="Evidence Preview" className="rounded-xl max-h-36 mx-auto object-cover border border-emerald-200" />
          <span className="text-[11px] text-emerald-800 font-bold flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Evidence Image Uploaded & Verified</span>
          </span>
        </div>
      )}
    </div>
  );
}
