import { useState } from 'react';
import { ChevronRight, ChevronDown, Loader2 } from 'lucide-react';

const primary = '#2563eb';

export default function EssaysPage() {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async (prompt) => {
    setLoading(true);
    setTimeout(()=>{
      setText((t)=> t + `\n\nAI: Here's a suggested outline for "${prompt}":\n1) Hook\n2) Challenge\n3) Action\n4) Impact\n5) Reflection`);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="rounded-2xl border overflow-hidden bg-white">
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
            <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="Start writing here or ask AI from the side panel..." className="mt-3 w-full h-[360px] rounded-xl border p-3" />
            <div className="mt-3 flex gap-2">
              <button onClick={()=>askAI('Give feedback on my essay')} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: primary }}>Get Feedback</button>
              <button onClick={()=>setText('')} className="px-4 py-2 rounded-lg border text-slate-700">Clear</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
