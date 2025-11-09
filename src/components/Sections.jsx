import { useMemo, useState } from 'react';
import { Sparkles, Send, Search, ChevronRight, ChevronDown, UploadCloud, FileUp, Loader2 } from 'lucide-react';

const primary = '#2563eb';

export function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your UG mentor. How can I help today?' },
  ]);
  const [input, setInput] = useState('');
  const suggestions = [
    'What are top CS colleges in India?',
    'Help me shortlist colleges for SAT 1400',
    'Draft a 150-word essay intro about leadership',
    'How to present extracurriculars effectively?'
  ];

  const send = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: 'user', content: text }, { role: 'assistant', content: 'This is a demo response. Connect to backend AI later.' }]);
    setInput('');
  };

  return (
    <section id="chat" className="space-y-4">
      <div className="rounded-2xl border bg-white overflow-hidden">
        <div className="px-4 py-3 border-b flex items-center gap-2">
          <Sparkles size={18} style={{ color: primary }} />
          <h3 className="font-semibold" style={{ color: primary }}>AI Chatbot</h3>
        </div>
        <div className="h-72 overflow-y-auto p-4 space-y-3 bg-slate-50">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-prose p-3 rounded-xl ${m.role === 'assistant' ? 'bg-white border' : 'bg-blue-50 border border-blue-100 self-end ml-auto'}`}>
              <p className={`text-sm ${m.role === 'assistant' ? 'text-slate-800' : 'text-slate-800'}`}>{m.content}</p>
            </div>
          ))}
          {messages.length === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestions.map((s, idx) => (
                <button key={idx} onClick={() => send(s)} className="text-left px-3 py-2 rounded-lg border bg-white hover:bg-slate-50 text-slate-700">
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="p-3 border-t flex items-center gap-2">
          <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && send(input)} placeholder="Ask anything about colleges, essays, or activities..." className="flex-1 rounded-lg border px-3 py-2" />
          <button onClick={()=>send(input)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white" style={{ backgroundColor: primary }}>
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </section>
  );
}

export function Colleges() {
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
    <section id="colleges" className="space-y-4">
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
    </section>
  );
}

export function Essays() {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async (prompt) => {
    setLoading(true);
    setTimeout(()=>{
      setText((t)=> t + `\n\nAI: Here\'s a suggested outline for "${prompt}":\n1) Hook\n2) Challenge\n3) Action\n4) Impact\n5) Reflection`);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="essays" className="rounded-2xl border overflow-hidden bg-white">
      <div className="flex">
        <aside className={`w-72 border-r bg-slate-50 transition-all ${open ? 'block' : 'hidden md:block'}`}>
          <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3 border-b bg-white">
            <span className="font-medium" style={{ color: primary }}>Essay Helper</span>
            {open ? <ChevronDown size={18}/> : <ChevronRight size={18}/>}
          </button>
          <div className="p-4 space-y-3">
            <button onClick={()=>askAI('Write a 250-word SOP for CS undergraduate')} className="w-full text-left px-3 py-2 rounded-lg border bg-white hover:bg-slate-100 text-sm">250-word SOP for CS</button>
            <button onClick={()=>askAI('Brainstorm leadership story ideas')} className="w-full text-left px-3 py-2 rounded-lg border bg-white hover:bg-slate-100 text-sm">Leadership brainstorm</button>
            <button onClick={()=>askAI('Improve this paragraph for clarity')} className="w-full text-left px-3 py-2 rounded-lg border bg-white hover:bg-slate-100 text-sm">Improve clarity</button>
          </div>
        </aside>
        <div className="flex-1 min-h-[320px] p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: primary }}>Your Essay</h3>
            {loading && <div className="inline-flex items-center gap-2 text-slate-600 text-sm"><Loader2 className="animate-spin" size={16}/> Thinking...</div>}
          </div>
          <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="Start writing here or ask AI from the side panel..." className="mt-3 w-full h-[260px] rounded-xl border p-3" />
          <div className="mt-3 flex gap-2">
            <button onClick={()=>askAI('Give feedback on my essay')} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: primary }}>Get Feedback</button>
            <button onClick={()=>setText('')} className="px-4 py-2 rounded-lg border text-slate-700">Clear</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Activities() {
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
    <section id="activities" className="rounded-2xl border bg-white overflow-hidden">
      <div className="px-4 py-3 border-b flex items-center gap-2">
        <UploadCloud size={18} style={{ color: primary }} />
        <h3 className="font-semibold" style={{ color: primary }}>Activities Builder</h3>
      </div>
      <div className="p-4 space-y-4">
        <label className="flex items-center justify-between gap-3 p-3 rounded-xl border bg-slate-50">
          <div>
            <p className="font-medium">Upload a PDF</p>
            <p className="text-sm text-slate-600">We\'ll analyze and extract achievements.</p>
          </div>
          <div>
            <input type="file" accept="application/pdf" className="hidden" onChange={(e)=>onUpload(e.target.files?.[0])} />
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white cursor-pointer" style={{ backgroundColor: primary }}>
              <FileUp size={16}/> Choose File
            </span>
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
  );
}
