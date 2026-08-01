"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <div className="section-divider" />
      </div>

      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            Client&apos;s Review
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
            More Than 20000+ Customers{" "}
            <span className="gradient-text italic">Trusted Us</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-10 text-center"
            >
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold mx-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>
              <blockquote className="font-display text-xl lg:text-2xl text-cream italic leading-relaxed mb-8">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-display text-lg text-gold font-bold">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-cream">
                    {testimonials[current].name}
                  </h4>
                  <span className="text-xs text-cream-muted uppercase tracking-wider">
                    Valued Client
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-gold"
                  : "w-4 bg-dark-border hover:bg-gold/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
