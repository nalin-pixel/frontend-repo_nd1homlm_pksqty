import { useState } from 'react';
import { UploadCloud, FileUp, Loader2 } from 'lucide-react';

const primary = '#2563eb';

export default function ActivitiesPage() {
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const onUpload = (file) => {
    if (!file) return;
    setFileName(file.name);
    setLoading(true);
    setTimeout(()=>{
      setItems([
        { title: 'Robotics Club Captain', impact: 'Led 12 members; won state championship' },
        { title: 'Community Tutor', impact: 'Mentored 10 students in math weekly' },
        { title: 'Hackathon Finalist', impact: 'Built ML project; Top 5 among 80 teams' },
      ]);
      setLoading(false);
    }, 900);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="rounded-2xl border bg-white overflow-hidden">
        <div className="px-4 py-3 border-b flex items-center gap-2">
          <UploadCloud size={18} style={{ color: primary }} />
          <h3 className="font-semibold" style={{ color: primary }}>Activities Builder</h3>
        </div>
        <div className="p-4 space-y-4">
          <label className="flex items-center justify-between gap-3 p-3 rounded-xl border bg-slate-50">
            <div>
              <p className="font-medium">Upload a PDF</p>
              <p className="text-sm text-slate-600">We'll analyze and extract achievements.</p>
            </div>
            <div>
              <input id="activities-file" type="file" accept="application/pdf" className="hidden" onChange={(e)=>onUpload(e.target.files?.[0])} />
              <label htmlFor="activities-file" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white cursor-pointer" style={{ backgroundColor: primary }}>
                <FileUp size={16}/> Choose File
              </label>
            </div>
          </label>
          {fileName && <p className="text-sm text-slate-600">Selected: {fileName}</p>}

          {loading ? (
            <div className="flex items-center gap-2 text-slate-600"><Loader2 className="animate-spin" size={16}/> Analyzing...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-3">
              {items.map((it, idx)=> (
                <div key={idx} className="rounded-xl border p-3 bg-white">
                  <p className="font-medium" style={{ color: primary }}>{it.title}</p>
                  <p className="text-sm text-slate-700 mt-1">{it.impact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
