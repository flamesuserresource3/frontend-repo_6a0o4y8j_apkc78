import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function PortalHero({ onEnter }) {
  return (
    <section id="portal" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for atmosphere (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="select-none bg-gradient-to-r from-purple-300 via-cyan-200 to-purple-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl"
        >
          The Time Traveler’s Journal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          A visual journey through eras — step through the portal and feel the passage of time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-10"
        >
          <button
            onClick={onEnter}
            className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/15"
          >
            <span className="relative z-10">Enter the Journal</span>
            <span className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-white/30 to-transparent opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
