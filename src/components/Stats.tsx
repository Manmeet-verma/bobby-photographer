"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  suffix?: string;
  inView: boolean;
}

function Counter({ end, suffix = "", inView }: CounterProps) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (inView && !hasRun.current) {
      hasRun.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [end, inView]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    number: 20,
    suffix: "+",
    label: "Award Winning",
    description:
      "With the help of our talented & experienced team, we have won various photography awards.",
  },
  {
    number: 35,
    suffix: "+",
    label: "Years Experience",
    description:
      "As a confident and dedicated photographer, we have 35 years of experience capturing precious moments.",
  },
  {
    number: 8750,
    suffix: "+",
    label: "Happy Clients",
    description:
      "A satisfied client is the best business strategy of all. We treasure every relationship.",
  },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
            The Leading Photo Studio{" "}
            <span className="gradient-text italic">In The Country</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card p-8 text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-500 animate-pulse-gold">
                <span className="font-display text-3xl lg:text-4xl font-bold text-gold">
                  <Counter end={stat.number} suffix={stat.suffix} inView={inView} />
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {stat.label}
              </h3>
              <p className="text-cream-muted text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
