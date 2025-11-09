import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

const primary = '#2563eb';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your UG mentor. How can I help today?" },
  ]);
  const [input, setInput] = useState('');
  const suggestions = [
    'What are top CS colleges in India?',
    'Help me shortlist colleges for SAT 1400',
    'Draft a 150-word essay intro about leadership',
    'How to present extracurriculars effectively?'
  ];

  const send = (text) => {
    const value = text ?? input;
    if (!value.trim()) return;
    setMessages((m) => [
      ...m,
      { role: 'user', content: value },
      { role: 'assistant', content: 'This is a demo response. Connect to backend AI later.' },
    ]);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-2xl border bg-white overflow-hidden">
        <div className="px-4 py-3 border-b flex items-center gap-2">
          <Sparkles size={18} style={{ color: primary }} />
          <h3 className="font-semibold" style={{ color: primary }}>AI Chatbot</h3>
        </div>
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-slate-50">
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
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=> e.key==='Enter' && send()}
            placeholder="Ask anything about colleges, essays, or activities..."
            className="flex-1 rounded-lg border px-3 py-2"
          />
          <button onClick={()=>send()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white" style={{ backgroundColor: primary }}>
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
