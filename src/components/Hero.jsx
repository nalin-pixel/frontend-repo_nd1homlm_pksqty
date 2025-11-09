import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
        <div className="backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg rounded-2xl p-6 md:p-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight" style={{ color: '#2563eb' }}>
            Your Undergraduation Journey, Simplified
          </h2>
          <p className="mt-3 md:mt-4 text-slate-700 max-w-2xl">
            Plan colleges, craft standout essays, track activities, and chat with an AI mentor — all in one clean workspace.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#chat" className="px-5 py-2.5 rounded-lg text-white shadow-sm" style={{ backgroundColor: '#2563eb' }}>Open Chatbot</a>
            <a href="#colleges" className="px-5 py-2.5 rounded-lg border" style={{ borderColor: '#2563eb', color: '#2563eb' }}>Browse Colleges</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white"></div>
    </section>
  );
}
