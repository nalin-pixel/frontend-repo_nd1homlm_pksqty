import { Link } from 'react-router-dom';
import { MessageSquare, School, FileText, Activity } from 'lucide-react';

const primary = '#2563eb';

export default function HomePage({ profile }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {profile && (
        <div className="mb-6 rounded-2xl bg-white border p-4">
          <p className="text-sm text-slate-600">Welcome back, <span className="font-semibold" style={{ color: primary }}>{profile.name}</span>. Class: {profile.classLevel || '—'}, Preference: {profile.preference || '—'}</p>
        </div>
      )}
      <h2 className="text-2xl font-bold" style={{ color: primary }}>Choose a workspace</h2>
      <p className="text-slate-600 mt-1">Each area is focused so you can dive in without distractions.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/chat" className="group rounded-2xl border bg-white p-5 hover:shadow-md transition">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#eff6ff', color: primary }}>
            <MessageSquare size={18} />
          </div>
          <h3 className="font-semibold">AI Chatbot</h3>
          <p className="text-sm text-slate-600 mt-1">Ask anything about colleges, essays, or activities.</p>
        </Link>
        <Link to="/colleges" className="group rounded-2xl border bg-white p-5 hover:shadow-md transition">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#eff6ff', color: primary }}>
            <School size={18} />
          </div>
          <h3 className="font-semibold">Colleges</h3>
          <p className="text-sm text-slate-600 mt-1">Browse, compare, and track your shortlist.</p>
        </Link>
        <Link to="/essays" className="group rounded-2xl border bg-white p-5 hover:shadow-md transition">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#eff6ff', color: primary }}>
            <FileText size={18} />
          </div>
          <h3 className="font-semibold">Essays</h3>
          <p className="text-sm text-slate-600 mt-1">Draft and refine with AI nudges.</p>
        </Link>
        <Link to="/activities" className="group rounded-2xl border bg-white p-5 hover:shadow-md transition">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#eff6ff', color: primary }}>
            <Activity size={18} />
          </div>
          <h3 className="font-semibold">Activities</h3>
          <p className="text-sm text-slate-600 mt-1">Upload a PDF and extract achievements.</p>
        </Link>
      </div>
    </div>
  );
}
