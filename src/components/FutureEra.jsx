import React from 'react';
import { motion } from 'framer-motion';

function GlitchText({ children }) {
  return (
    <span className="relative inline-block text-cyan-300">
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-[1px] translate-y-[1px] text-pink-500/60 blur-[0.5px]">{children}</span>
      <span className="pointer-events-none absolute inset-0 translate-x-[1px] -translate-y-[1px] text-violet-500/60 blur-[0.5px]">{children}</span>
    </span>
  );
}

export default function FutureEra() {
  return (
    <section id="future" className="relative min-h-screen w-full overflow-hidden bg-[#0b0018] text-cyan-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold sm:text-5xl"
        >
          The Future — <GlitchText>Neon & Code</GlitchText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl text-lg/7 text-cyan-100/80"
        >
          Depth blooms in Z‑space. Holograms shimmer. The grid hums as letters glitch, then resolve.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Hologram", "Neon Trail", "Timeline Fork"].map((title, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              className="group relative transform-gpu overflow-hidden rounded-xl border border-cyan-500/20 bg-cyan-400/5 p-5 shadow-[0_0_0_1px_rgba(0,255,255,0.05)_inset] backdrop-blur"
              style={{ perspective: 1000 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.12),transparent_50%)]" />
              <div className="relative">
                <h3 className="text-cyan-200">{title}</h3>
                <p className="mt-2 text-cyan-100/70">
                  Micro‑interactions hint at alternate timelines. Choose wisely.
                </p>
                <div className="mt-4 h-24 w-full rounded-md bg-gradient-to-br from-fuchsia-500/30 via-cyan-400/20 to-indigo-500/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
