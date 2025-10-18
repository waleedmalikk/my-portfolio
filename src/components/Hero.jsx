import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="rounded-2xl p-8 shadow-sm bg-white">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Waleed Malik
          </motion.h1>
          <p className="mt-2 text-slate-600">
            Software Developer — Lahore, Pakistan
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <div>Contact: (+92) 309-6049309 · waleedmalik2010@gmail.com</div>
            <div>
              <a
                href="https://linkedin.com/in/waleedmalikk"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                linkedin.com/in/waleedmalikk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex-shrink-0">
          <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-sm text-slate-700">
            W M
          </div>
        </div>
      </div>

      <div className="mt-6 text-slate-700 leading-relaxed text-sm">
        <strong>Summary:</strong> Software developer skilled in Angular & Js.
        Experienced building complex calendar UIs, performance optimization,
        state management, and delivering production-grade apps.
      </div>
    </section>
  );
}
