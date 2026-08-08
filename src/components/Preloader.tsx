"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      if (elapsed >= duration) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[100] bg-light flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,85,99,0.06),transparent_60%)]" />

          <div className="relative flex flex-col items-center gap-6 sm:gap-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", damping: 12, stiffness: 100 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-accent/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-dashed border-accent/10"
              />
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-accent flex items-center justify-center bg-light">
                <span className="font-display text-3xl sm:text-4xl text-accent font-bold">B</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <span className="font-display text-xl sm:text-2xl text-ink tracking-wide">
                Bobby&apos;s
              </span>
              <span className="block text-[10px] sm:text-xs uppercase tracking-[0.5em] text-accent mt-1">
                Photography
              </span>
            </motion.div>

            <div className="w-48 sm:w-56">
              <div className="h-[1px] bg-light-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-accent-dark via-accent to-accent-light"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[10px] sm:text-xs text-ink-muted/50 text-center mt-3 tracking-widest uppercase"
              >
                Loading experience
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
