"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Nirmal Pundir",
    text: "Your photos are just so special and are making wonderful forever memories for our family. The way you capture emotions is truly magical.",
    rating: 5,
  },
  {
    name: "Sudhir Bist",
    text: "Bobby's photos have an essence of simplicity with a creative mind and his improvisational skills are amazing. Truly a master of his craft.",
    rating: 5,
  },
  {
    name: "Sonia Pundir",
    text: "Bobby's photos are natural and accurately reflect the fun that we all had together. It was difficult to choose which ones to frame! Thank you.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    text: "The attention to detail and the ability to capture candid moments is what sets Bobby apart. Our wedding album is a masterpiece.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Professional, creative, and incredibly talented. Bobby made our pre-wedding shoot feel like a fairy tale. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const duration = 5000;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        next();
        elapsed = 0;
      }
    }, interval);

    return () => clearInterval(timer);
  }, [current, isPaused, next]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <div className="section-divider" />
      </div>

      <div className="absolute inset-0 bg-dark" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
            Client&apos;s Review
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4">
            More Than 20000+ Customers{" "}
            <span className="gradient-text italic">Trusted Us</span>
          </h2>
        </motion.div>

        <div
          className="relative min-h-[280px] sm:min-h-[320px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-6 sm:p-10 text-center gold-shine"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gold mx-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  )
                )}
              </div>
              <blockquote className="font-display text-base sm:text-xl lg:text-2xl text-cream italic leading-relaxed mb-6 sm:mb-8">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gold/20 flex items-center justify-center border-2 border-gold/30"
                >
                  <span className="font-display text-lg sm:text-xl text-gold font-bold">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-cream text-sm sm:text-lg">
                    {testimonials[current].name}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-gold uppercase tracking-wider">
                    Valued Client
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setProgress(0);
              }}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-500"
              style={{ width: i === current ? 40 : 14 }}
            >
              <div className="absolute inset-0 bg-dark-border rounded-full" />
              {i === current && (
                <motion.div
                  className="absolute inset-0 bg-gold rounded-full origin-left"
                  style={{ scaleX: progress / 100 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              setProgress(0);
            }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
