import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import OnboardingModal from './components/OnboardingModal';
import HomePage from './components/HomePage';
import ChatbotPage from './components/ChatbotPage';
import CollegesPage from './components/CollegesPage';
import EssaysPage from './components/EssaysPage';
import ActivitiesPage from './components/ActivitiesPage';
import { Routes, Route } from 'react-router-dom';

export default function App() {
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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage profile={profile} />} />
        <Route path="/chat" element={<ChatbotPage />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/essays" element={<EssaysPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>

      <OnboardingModal
        open={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        onComplete={(p)=> setProfile(p)}
      />
    </div>
  );
}
