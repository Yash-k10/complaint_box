import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('citizen'); // 'citizen' | 'officer'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('DEPT_ROAD');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (activeTab === 'officer') {
      localStorage.setItem('user', JSON.stringify({ role: 'officer', email, department }));
      navigate('/officer');
    } else {
      localStorage.setItem('user', JSON.stringify({ role: 'citizen', email }));
      navigate('/citizen');
    }
  };

  const setCitizenDemo = () => {
    setActiveTab('citizen');
    setEmail('citizen.priya@gmail.com');
    setPassword('demo1234');
  };

  const setOfficerDemo = () => {
    setActiveTab('officer');
    setEmail('officer.sharma@nagpurcivic.gov.in');
    setPassword('officer1234');
    setDepartment('DEPT_ROAD');
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs px-3.5 py-1 rounded-full font-semibold">
          CivicFlow AI-X Single Sign-On Portal
        </span>
        <h2 className="text-3xl font-extrabold text-white">Dual Role Authentication</h2>
        <p className="text-slate-400 text-sm">Select your portal access type to sign in</p>
      </div>

      {/* Role Selector Tabs */}
      <div className="grid grid-cols-2 p-1.5 bg-slate-800/90 rounded-2xl border border-slate-700">
        <button
          type="button"
          onClick={() => {
            setActiveTab('citizen');
            setEmail('');
          }}
          className={`py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 ${
            activeTab === 'citizen'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          👤 Citizen / Resident Login
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('officer');
            setEmail('');
          }}
          className={`py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 ${
            activeTab === 'officer'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          👮 Municipal Officer Login
        </button>
      </div>

      {/* Form Container */}
      <form onSubmit={handleLogin} className="bg-slate-800/90 p-8 rounded-2xl border border-slate-700 shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <span className="text-sm font-semibold text-slate-200">
            {activeTab === 'citizen' ? '🏡 Resident & Community Access' : '🛡️ Authorized Official Portal'}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${activeTab === 'citizen' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'}`}>
            {activeTab === 'citizen' ? 'Citizen Mode' : 'Officer Mode'}
          </span>
        </div>

        {activeTab === 'officer' && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Department Jurisdiction</label>
            <select
              className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-500"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="DEPT_ROAD">Roads & Infrastructure Department</option>
              <option value="DEPT_WATER">Water Supply & Sewage Department</option>
              <option value="DEPT_SAN">Sanitation & Solid Waste</option>
              <option value="DEPT_ELEC">Electrical & Lighting</option>
              <option value="DEPT_PARK">Parks & Public Amenities</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            {activeTab === 'citizen' ? 'Email Address / Mobile Number' : 'Official Government Email / Officer ID'}
          </label>
          <input
            className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500 transition"
            placeholder={activeTab === 'citizen' ? 'e.g. resident@gmail.com' : 'e.g. officer.sharma@nagpurcivic.gov.in'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500 transition"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full text-white font-bold py-3.5 rounded-xl transition shadow-lg ${
            activeTab === 'citizen'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90'
              : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90'
          }`}
        >
          Sign In as {activeTab === 'citizen' ? 'Citizen Resident' : 'Municipal Officer'}
        </button>

        {/* Quick Demo Pre-fill Options for Judges */}
        <div className="pt-4 border-t border-slate-700/80 space-y-2">
          <span className="text-xs text-slate-400 font-medium block text-center">⚡ Quick Demo Login Credentials for Judges:</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={setCitizenDemo}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-xs py-2 px-3 rounded-lg text-cyan-300 transition text-center"
            >
              👤 Fill Demo Citizen
            </button>
            <button
              type="button"
              onClick={setOfficerDemo}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-xs py-2 px-3 rounded-lg text-amber-300 transition text-center"
            >
              👮 Fill Demo Officer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
