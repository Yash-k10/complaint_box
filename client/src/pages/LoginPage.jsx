import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
  const { user, login, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('citizen'); // 'citizen' | 'officer'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('DEPT_ROAD');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (activeTab === 'officer') {
      const userData = {
        name: 'Er. Rajesh Sharma',
        email: email || 'officer.sharma@nagpurcivic.gov.in',
        role: 'officer',
        department: department === 'DEPT_ROAD' ? 'Roads & Infrastructure' : 'Water & Sewage',
        wardId: 12
      };
      login(userData);
      navigate('/officer');
    } else {
      const userData = {
        name: 'Rahul Sharma',
        email: email || 'citizen.rahul@gmail.com',
        role: 'citizen',
        wardId: 12
      };
      login(userData);
      navigate('/citizen');
    }
  };

  const setCitizenDemo = () => {
    setActiveTab('citizen');
    setEmail('citizen.rahul@gmail.com');
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
        <span className="bg-lime-accent/15 text-lime-accent border border-lime-accent/30 text-xs px-3.5 py-1 rounded-full font-semibold">
          UrbanFeedback AI-X Single Sign-On Portal
        </span>
        <h2 className="text-3xl font-extrabold text-white">Dual Role Authentication</h2>
        <p className="text-slate-300 text-sm">Select your portal access type to sign in or manage session</p>
      </div>

      {user ? (
        /* Logged In Confirmation Card with Logout Button */
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-lime-accent/10 border border-lime-accent/40 flex items-center justify-center text-3xl mx-auto">
            {user.role === 'officer' ? '👮' : '👤'}
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white">{user.name}</h3>
            <p className="text-xs text-lime-accent font-bold uppercase tracking-wider">
              {user.role === 'officer' ? `Municipal Officer • ${user.department}` : 'Registered Resident Citizen'}
            </p>
            <p className="text-xs text-slate-400 font-mono pt-1">{user.email}</p>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl text-left border border-slate-700 text-xs space-y-1.5 font-mono">
            <p className="text-slate-300"><span className="text-slate-400">Jurisdiction:</span> Ward 12 Laxmi Nagar</p>
            <p className="text-slate-300"><span className="text-slate-400">Session Status:</span> <span className="text-emerald-400 font-bold">Active Authenticated ✓</span></p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(user.role === 'officer' ? '/officer' : '/citizen')}
              className="flex-1 bg-lime-accent hover:opacity-90 text-slate-900 font-extrabold py-3 rounded-xl text-sm transition shadow-lg"
            >
              Go to {user.role === 'officer' ? 'Officer Dashboard' : 'Resident Portal'} →
            </button>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-6 py-3 rounded-xl text-sm transition shadow-lg"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Role Selector Tabs */}
          <div className="grid grid-cols-2 p-1.5 bg-slate-800 rounded-2xl border border-slate-700">
            <button
              type="button"
              onClick={() => {
                setActiveTab('citizen');
                setEmail('');
              }}
              className={`py-3 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 ${
                activeTab === 'citizen'
                  ? 'bg-lime-accent text-slate-900 shadow-lg'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              👤 Citizen Login
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('officer');
                setEmail('');
              }}
              className={`py-3 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 ${
                activeTab === 'officer'
                  ? 'bg-amber-400 text-slate-900 shadow-lg'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              👮 Officer Login
            </button>
          </div>

          {/* Form Container */}
          <form onSubmit={handleLogin} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <span className="text-sm font-bold text-white">
                {activeTab === 'citizen' ? '🏡 Resident & Community Access' : '🛡️ Authorized Official Portal'}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-extrabold ${activeTab === 'citizen' ? 'bg-lime-accent/20 text-lime-accent border border-lime-accent/40' : 'bg-amber-400/20 text-amber-400 border border-amber-400/40'}`}>
                {activeTab === 'citizen' ? 'Citizen Mode' : 'Officer Mode'}
              </span>
            </div>

            {activeTab === 'officer' && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Department Jurisdiction</label>
                <select
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-400"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="DEPT_ROAD">Roads & Infrastructure Department</option>
                  <option value="DEPT_WATER">Water Supply & Sewage Department</option>
                  <option value="DEPT_SAN">Sanitation & Solid Waste</option>
                  <option value="DEPT_ELEC">Electrical & Lighting</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {activeTab === 'citizen' ? 'Email Address / Mobile Number' : 'Official Government Email / Officer ID'}
              </label>
              <input
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-lime-accent transition"
                placeholder={activeTab === 'citizen' ? 'e.g. citizen.rahul@gmail.com' : 'e.g. officer.sharma@nagpurcivic.gov.in'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
              <input
                type="password"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-lime-accent transition"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full font-black py-3.5 rounded-xl transition shadow-lg ${
                activeTab === 'citizen'
                  ? 'bg-lime-accent text-slate-900 hover:opacity-90'
                  : 'bg-amber-400 text-slate-900 hover:opacity-90'
              }`}
            >
              Sign In as {activeTab === 'citizen' ? 'Citizen Resident' : 'Municipal Officer'}
            </button>

            {/* Quick Demo Pre-fill Options for Judges */}
            <div className="pt-4 border-t border-slate-700 space-y-2">
              <span className="text-xs text-slate-400 font-medium block text-center">⚡ 1-Click Judge Demo Credentials:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={setCitizenDemo}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-xs py-2 px-3 rounded-xl text-lime-accent font-bold transition text-center border border-slate-600"
                >
                  👤 Fill Demo Citizen
                </button>
                <button
                  type="button"
                  onClick={setOfficerDemo}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-xs py-2 px-3 rounded-xl text-amber-300 font-bold transition text-center border border-slate-600"
                >
                  👮 Fill Demo Officer
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
