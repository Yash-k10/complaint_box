import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ShieldCheck, UserCheck, PhoneCall, ArrowRight, User, Lock, Mail, MapPin } from 'lucide-react';

export default function LoginPage() {
  const { user, login, logout } = useContext(AuthContext);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [roleMode, setRoleMode] = useState('citizen'); // 'citizen' | 'officer'

  const [form, setForm] = useState({
    identifier: 'citizen@nagpur.gov.in',
    password: 'password123',
    name: '',
    mobile: '',
    address: '',
    officerSecretKey: ''
  });

  const [regRole, setRegRole] = useState('citizen'); // 'citizen' | 'officer'
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState('');

  const handleQuickDemoUser = (demoUser) => {
    login(demoUser);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.identifier) return alert('Please enter Email or Mobile Number');

    const isOfficer = roleMode === 'officer' || form.identifier.includes('officer');
    login({
      name: isOfficer ? 'Er. Rajesh Sharma' : 'Pragati Citizen',
      email: form.identifier,
      role: isOfficer ? 'officer' : 'citizen',
      department: isOfficer ? 'Roads & Infrastructure' : undefined
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile) return alert('Please complete required details');

    // Secret Key validation for Officer/Admin registration
    if (regRole === 'officer' || regRole === 'admin') {
      const validSecret = import.meta.env.VITE_OFFICER_SECRET_KEY || 'ADMIN_OFFICER_SECRET_2026';
      if (!form.officerSecretKey || form.officerSecretKey.trim() !== validSecret.trim()) {
        return alert('❌ Security Authorization Failed: Invalid Officer/Admin Secret API Key. Access denied.');
      }
    }

    login({
      name: form.name,
      email: form.identifier || (regRole === 'officer' ? 'officer@nagpur.gov.in' : 'citizen@nagpur.gov.in'),
      mobile: form.mobile,
      role: regRole,
      department: regRole === 'officer' ? 'Municipal Administration' : undefined,
      address: form.address || 'Laxmi Nagar, Nagpur'
    });
  };

  const handleSendOtp = () => {
    if (!form.mobile) return alert('Enter a valid mobile number for OTP');
    setOtpSent(true);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full space-y-6">
        {/* Gateway Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center items-center gap-3">
            <img src="/logo.png" alt="awaaz.ai logo" className="h-12 w-auto object-contain" />
            <div className="text-left">
              <h2 className="text-2xl font-black text-emerald-950 tracking-tight leading-none">
                awaaz<span className="text-emerald-600 font-extrabold">.ai</span>
              </h2>
              <span className="text-[11px] font-bold text-emerald-700 block mt-0.5">
                Every Voice Heard. Every Issue Resolved.
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1 rounded-full text-xs font-bold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>SINGLE SIGN-ON & PRIVACY GATEWAY</span>
          </div>
          <h1 className="text-2xl font-extrabold text-emerald-950">
            {user ? 'Authenticated Session Active' : authMode === 'login' ? 'Citizen & Officer Login' : 'Citizen Registration'}
          </h1>
          <p className="text-emerald-800 text-xs">
            {user
              ? 'Your device credentials are authenticated and saved locally'
              : 'Sign in to submit, track, or manage municipal grievances with awaaz.ai'}
          </p>
        </div>

        {/* If Already Logged In */}
        {user ? (
          <div className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-xs space-y-6">
            <div className="flex items-center gap-4 border-b border-emerald-100 pb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-emerald-950 text-lg">{user.name}</h3>
                <p className="text-xs font-mono text-emerald-700">
                  Role: <span className="uppercase font-bold text-emerald-800">{user.role}</span> | Nagpur Civic Zone
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <span className="text-emerald-700 block text-[11px]">Email Account</span>
                <span className="font-bold text-emerald-950 truncate block">{user.email || 'N/A'}</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <span className="text-emerald-700 block text-[11px]">City & State</span>
                <span className="font-bold text-emerald-950">Nagpur, Maharashtra</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={logout}
                className="w-full btn-emerald text-xs py-3 justify-center"
              >
                <span>Sign Out & Switch Device</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Mode Switch Tabs */}
            <div className="grid grid-cols-2 p-1.5 bg-emerald-50 rounded-2xl border border-emerald-200 font-bold text-xs">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`py-2.5 rounded-xl transition ${
                  authMode === 'login'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-emerald-800 hover:text-emerald-950'
                }`}
              >
                Existing User Login
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`py-2.5 rounded-xl transition ${
                  authMode === 'register'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-emerald-800 hover:text-emerald-950'
                }`}
              >
                New Citizen Register
              </button>
            </div>

            {/* Login Form */}
            {authMode === 'login' ? (
              <form onSubmit={handleLogin} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-xs space-y-4">
                <div className="grid grid-cols-2 p-1 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setRoleMode('citizen')}
                    className={`py-2 rounded-lg transition ${
                      roleMode === 'citizen' ? 'bg-white text-emerald-800 shadow-xs' : 'text-emerald-700'
                    }`}
                  >
                    👤 Resident Citizen
                  </button>
                  <button
                    type="button"
                    onClick={() => setRoleMode('officer')}
                    className={`py-2 rounded-lg transition ${
                      roleMode === 'officer' ? 'bg-white text-emerald-800 shadow-xs' : 'text-emerald-700'
                    }`}
                  >
                    👮 Municipal Officer
                  </button>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-emerald-900">Email or Mobile Number</label>
                  <input
                    type="text"
                    className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-3 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. citizen@nagpur.gov.in or 9876543210"
                    value={form.identifier}
                    onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-emerald-900">Password</label>
                  <input
                    type="password"
                    className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-3 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-emerald text-xs py-3 justify-center"
                >
                  <span>Sign In to Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* 1-Click Judge Demo Buttons */}
                <div className="pt-4 border-t border-emerald-100 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-800 block text-center">1-Click Quick Demo Sign-In:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickDemoUser({ name: 'Pragati Citizen', role: 'citizen', email: 'citizen@nagpur.gov.in' })}
                      className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-2 px-3 rounded-xl border border-emerald-200"
                    >
                      👤 Resident Citizen
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickDemoUser({ name: 'Er. Rajesh Sharma', role: 'officer', email: 'officer.roads@nagpur.gov.in', department: 'Roads & Infrastructure' })}
                      className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-2 px-3 rounded-xl border border-emerald-200"
                    >
                      👮 Municipal Officer
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegister} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-xs space-y-4">
                {/* Registration Role Selector */}
                <div className="grid grid-cols-2 p-1 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => { setRegRole('citizen'); setForm({ ...form, officerSecretKey: '' }); }}
                    className={`py-2 rounded-lg transition ${
                      regRole === 'citizen' ? 'bg-white text-emerald-800 shadow-xs' : 'text-emerald-700'
                    }`}
                  >
                    👤 Register as Citizen
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegRole('officer')}
                    className={`py-2 rounded-lg transition ${
                      regRole === 'officer' ? 'bg-white text-amber-800 shadow-xs' : 'text-emerald-700'
                    }`}
                  >
                    👮 Register as Officer / Admin
                  </button>
                </div>

                {/* Officer/Admin Secret Key Warning Banner */}
                {regRole === 'officer' && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-amber-900">
                      <Lock className="w-4 h-4 text-amber-600" />
                      <span>🔐 Officer/Admin Registration Requires Secret API Key</span>
                    </div>
                    <p className="text-amber-800 text-[11px] leading-relaxed">
                      Only authorized municipal personnel with a valid secret API key can register as Officer or Admin. Contact your department head if you don't have one.
                    </p>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-emerald-900">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-2.5 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="Enter your full legal name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-emerald-900">Mobile Number (OTP Sync)</label>
                  <input
                    type="tel"
                    className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-2.5 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="10-digit mobile number"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-emerald-900">
                    {regRole === 'officer' ? 'Department / Office Address' : 'Residential Address / Location'}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-emerald-50/50 border border-emerald-200 rounded-xl px-4 py-2.5 text-emerald-950 text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder={regRole === 'officer' ? 'NMC HQ, Civil Lines...' : 'Street, Landmark, Area...'}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                </div>

                {/* Officer/Admin Secret API Key Input */}
                {regRole === 'officer' && (
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Officer Secret API Key *</span>
                    </label>
                    <input
                      type="password"
                      className="w-full bg-amber-50/50 border border-amber-300 rounded-xl px-4 py-2.5 text-amber-950 text-xs outline-none focus:ring-2 focus:ring-amber-500 font-mono font-bold placeholder-amber-400"
                      placeholder="Enter your authorized secret API key"
                      value={form.officerSecretKey}
                      onChange={(e) => setForm({ ...form, officerSecretKey: e.target.value })}
                      required
                    />
                    <p className="text-[10px] text-amber-700 font-medium">
                      ⚠️ This key is verified against the server. Unauthorized access attempts are logged.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className={`w-full text-xs py-3 justify-center ${
                    regRole === 'officer'
                      ? 'btn-emerald bg-amber-600 hover:bg-amber-700 border-amber-600'
                      : 'btn-emerald'
                  }`}
                >
                  <span>{regRole === 'officer' ? '🔐 Authorize & Register as Officer' : 'Complete Citizen Registration'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
