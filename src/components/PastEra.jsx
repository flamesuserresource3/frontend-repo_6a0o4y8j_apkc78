import React from 'react';
import { motion } from 'framer-motion';

export default function PastEra() {
  return (
    <section id="past" className="relative min-h-screen w-full bg-[linear-gradient(135deg,#ead7b6,#c9a985)] text-stone-900">
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.07),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(0,0,0,0.06),transparent_45%)]" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl font-semibold sm:text-5xl"
        >
          The Past — Ink & Parchment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl text-lg/7 text-stone-800"
        >
          Lines form like whispered memories. Edges fray. Symbols bloom across parchment as if drawn by an unseen quill.
        </motion.p>

        {/* Sketch cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Pyramids", "Constellations", "Ancient Script"].map((title, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ rotate: 0.2, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl border border-stone-700/30 bg-gradient-to-br from-stone-50/60 to-stone-100/50 p-5 shadow-sm backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_40%)]" />
              <div className="relative">
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-2 text-stone-700/90">
                  Ink blots ripple and sketches shift ever so slightly as if time is breathing.
                </p>
                <div className="mt-4 h-24 w-full rounded-md bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0_1px,transparent_1px_6px)] [mask-image:radial-gradient(circle_at_30%_40%,black,transparent_70%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
