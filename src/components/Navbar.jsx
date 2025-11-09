import { Home, MessageSquare, School, FileText, Activity } from "lucide-react";

const primary = "#2563eb";

export default function Navbar({ current, onNavigate }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "chat", label: "Chatbot", icon: MessageSquare },
    { key: "colleges", label: "Colleges", icon: School },
    { key: "essays", label: "Essays", icon: FileText },
    { key: "activities", label: "Activities", icon: Activity },
  ];

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white/80 shadow-sm ring-1 ring-slate-200 flex items-center justify-center">
              <span className="text-xl font-black" style={{ color: primary }}>U</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm text-slate-500">Undergraduation.com</p>
              <h1 className="text-lg font-semibold" style={{ color: primary }}>Student Dashboard</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {items.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  current === key
                    ? "bg-white/90 border-slate-200 shadow-sm"
                    : "bg-white/60 hover:bg-white border-transparent"
                }`}
                style={{ color: current === key ? primary : "#334155" }}
                aria-current={current === key ? "page" : undefined}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <select
              value={current}
              onChange={(e) => onNavigate(e.target.value)}
              className="rounded-lg border-slate-200 text-slate-700"
            >
              {items.map(({ key, label }) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
