"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const clients = [
  "Trusted by 20000+ Happy Families",
  "Award-Winning Photography",
  "Punjab's Leading Photo Studio",
  "35+ Years of Excellence",
  "Cinematic Wedding Films",
  "Destination Photography",
];

export default function Marquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="py-12 relative overflow-hidden border-y border-dark-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark z-10 pointer-events-none" />
      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            ...(isPaused && { duration: 0 }),
          }}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...clients, ...clients].map((text, i) => (
            <span key={i} className="flex items-center gap-12">
              <motion.span
                whileHover={{ color: "#c9a96e", scale: 1.05 }}
                className="font-display text-xl text-cream/30 uppercase tracking-[0.2em] cursor-default transition-colors"
              >
                {text}
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-gold/40 text-lg inline-block"
              >
                &#10022;
              </motion.span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
