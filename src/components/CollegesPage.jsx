import { useMemo, useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const primary = '#2563eb';

export default function CollegesPage() {
  const data = useMemo(() => (
    [
      { id: 1, name: 'Indian Institute of Technology Bombay', location: 'Mumbai, India', type: 'Public', rank: '#1', about: 'Top-tier engineering and research institution.' },
      { id: 2, name: 'Indian Institute of Technology Delhi', location: 'New Delhi, India', type: 'Public', rank: '#2', about: 'Renowned for engineering, design and entrepreneurship.' },
      { id: 3, name: 'BITS Pilani', location: 'Pilani, India', type: 'Private', rank: '#7', about: 'Prestigious private institute with strong alumni network.' },
      { id: 4, name: 'IIIT Hyderabad', location: 'Hyderabad, India', type: 'Public', rank: '#5', about: 'Leading institute for computer science and research.' },
      { id: 5, name: 'VIT Vellore', location: 'Vellore, India', type: 'Private', rank: '#14', about: 'Popular private university known for placements.' },
      { id: 6, name: 'SRM University', location: 'Chennai, India', type: 'Private', rank: '#20', about: 'Large campus with diverse programs and facilities.' },
    ]
  ), []);

  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-2xl border bg-white overflow-hidden">
        <div className="px-4 py-3 border-b flex items-center gap-2">
          <Search size={18} style={{ color: primary }} />
          <h3 className="font-semibold" style={{ color: primary }}>College List</h3>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50">
          {data.map(col => (
            <button key={col.id} onClick={()=>setSelected(col)} className="text-left group rounded-xl border bg-white hover:shadow-md transition overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-900 group-hover:text-slate-950">{col.name}</h4>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700">{col.rank}</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{col.location}</p>
                <p className="text-xs text-slate-500 mt-2">{col.about}</p>
              </div>
              <div className="px-4 py-2 bg-slate-50 border-t text-sm text-slate-700 flex items-center gap-1">
                View profile <ChevronRight size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4" onClick={()=>setSelected(null)}>
          <div onClick={(e)=>e.stopPropagation()} className="w-full max-w-2xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold" style={{ color: primary }}>{selected.name}</h4>
                <p className="text-sm text-slate-600">{selected.location} • {selected.type}</p>
              </div>
              <button onClick={()=>setSelected(null)} className="text-slate-500 hover:text-slate-700">Close</button>
            </div>
            <div className="p-6 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <p className="text-slate-700">{selected.about}</p>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Popular Programs: Computer Science, Electrical Engineering</li>
                  <li>Average Package: 18 LPA</li>
                  <li>Exams: JEE Advanced / Mains</li>
                  <li>Clubs: Robotics, Debate, Entrepreneurship</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border p-3">
                  <h5 className="font-medium" style={{ color: primary }}>At a glance</h5>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <span className="text-slate-500">Type</span><span className="text-slate-800">{selected.type}</span>
                    <span className="text-slate-500">Rank</span><span className="text-slate-800">{selected.rank}</span>
                    <span className="text-slate-500">Location</span><span className="text-slate-800">{selected.location}</span>
                  </div>
                </div>
                <a href="#" className="block text-center px-4 py-2 rounded-lg text-white" style={{ backgroundColor: primary }}>Visit Website</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
