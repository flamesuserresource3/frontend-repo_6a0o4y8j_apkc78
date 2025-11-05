import React, { useCallback } from 'react';
import PortalHero from './components/PortalHero';
import PastEra from './components/PastEra';
import PresentEra from './components/PresentEra';
import FutureEra from './components/FutureEra';

function App() {
  const handleEnter = useCallback(() => {
    const el = document.getElementById('past');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Section 1: Portal */}
      <PortalHero onEnter={handleEnter} />

      {/* Section 2: The Past */}
      <PastEra />

      {/* Section 3: The Present */}
      <PresentEra />

      {/* Section 4: The Future */}
      <FutureEra />

      {/* Section 5: Epilogue */}
      <section id="epilogue" className="relative flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-[#0b0018] to-black px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="relative">
          <h2 className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
            Every era leaves a trace.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Drift into starlight and let the journal close. When you\'re ready, begin again.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/15"
          >
            Restart Journey
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
