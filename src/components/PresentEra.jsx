import React from 'react';
import { motion } from 'framer-motion';

const card = {
  rest: { y: 0, scale: 1, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' },
  hover: { y: -6, scale: 1.03, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' },
};

export default function PresentEra() {
  return (
    <section id="present" className="relative min-h-screen w-full bg-gradient-to-br from-[#d7e2ea] to-[#a9bfd1] text-slate-900">
      <div className="absolute inset-0 backdrop-blur-sm [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold sm:text-5xl"
        >
          The Present — Glass & Motion
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl text-lg/7 text-slate-700"
        >
          Sleek surfaces and gentle springs. Elements glide with intention and greet your cursor like a magnet.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={card}
              initial="rest"
              whileHover="hover"
              animate="rest"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative rounded-2xl border border-white/50 bg-white/40 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 to-white/20" />
              <div className="relative">
                <div className="text-sm font-medium text-slate-700/80">Artifact {i}</div>
                <div className="mt-3 h-28 w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300" />
                <p className="mt-3 text-sm text-slate-600">
                  Hover to feel the spring. Smooth, modern, present.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 h-24 w-full rounded-xl bg-gradient-to-r from-slate-800/10 to-slate-900/10 backdrop-blur"
        />
      </div>
    </section>
  );
}
