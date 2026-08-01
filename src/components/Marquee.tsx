"use client";

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
  return (
    <section className="py-12 relative overflow-hidden border-y border-dark-border">
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...clients, ...clients].map((text, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-display text-xl text-cream/30 uppercase tracking-[0.2em]">
                {text}
              </span>
              <span className="text-gold/40 text-lg">&#10022;</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
