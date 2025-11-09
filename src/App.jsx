import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OnboardingModal from './components/OnboardingModal';
import { Chatbot, Colleges, Essays, Activities } from './components/Sections';

const primary = '#2563eb';

export default function App() {
  const [page, setPage] = useState('home');
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('ug_onboarding');
    if (!saved) {
      const t = setTimeout(()=> setOnboardingOpen(true), 600);
      return () => clearTimeout(t);
    } else {
      try { setProfile(JSON.parse(saved)); } catch {}
    }
  }, []);

  const navigate = (key) => {
    setPage(key);
    if (key !== 'home') {
      const el = document.getElementById(key);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar current={page} onNavigate={navigate} />

      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 space-y-8 pb-16">
        {profile && (
          <div className="rounded-2xl bg-white border p-4">
            <p className="text-sm text-slate-600">Welcome back, <span className="font-semibold" style={{ color: primary }}>{profile.name}</span>. Class: {profile.classLevel || '—'}, Preference: {profile.preference || '—'}</p>
          </div>
        )}
        <Chatbot />
        <Colleges />
        <Essays />
        <Activities />
      </main>

      <OnboardingModal
        open={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        onComplete={(p)=> setProfile(p)}
      />
    </div>
  );
}
