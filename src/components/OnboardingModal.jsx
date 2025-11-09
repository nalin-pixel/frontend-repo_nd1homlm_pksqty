import { useEffect, useState } from 'react';

const primary = '#2563eb';

export default function OnboardingModal({ open, onClose, onComplete }) {
  const [form, setForm] = useState({ name: '', classLevel: '', preference: '' });

  useEffect(() => {
    if (!open) return;
    const saved = localStorage.getItem('ug_onboarding');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setForm(parsed);
      } catch {}
    }
  }, [open]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem('ug_onboarding', JSON.stringify(form));
    onComplete?.(form);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold" style={{ color: primary }}>Welcome to Undergraduation</h3>
          <p className="text-sm text-slate-600 mt-1">Tell us a bit so we can personalize your dashboard.</p>
        </div>
        <form onSubmit={submit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2" style={{ outlineColor: primary }} placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Class</label>
            <select name="classLevel" value={form.classLevel} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2" style={{ outlineColor: primary }} required>
              <option value="">Select</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
              <option>UG Freshman</option>
              <option>UG Sophomore</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">College Preference</label>
            <input name="preference" value={form.preference} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2" style={{ outlineColor: primary }} placeholder="e.g., Computer Science, Ivy League" required />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border text-slate-700">Skip</button>
            <button type="submit" className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: primary }}>Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}
