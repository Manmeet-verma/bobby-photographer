"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const lineScaleX = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const decorScale = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      <motion.div
        style={{ scale: decorScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/[0.07]"
      />
      <motion.div
        style={{ scale: decorScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-gold/[0.05]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <motion.div style={{ y: quoteY }}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 0.15, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-[120px] sm:text-[180px] lg:text-[240px] text-gold leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            &ldquo;
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              style={{ scaleX: lineScaleX }}
              className="w-16 h-[2px] bg-gold mx-auto mb-6 sm:mb-8 origin-left"
            />
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream italic leading-relaxed mb-6 sm:mb-8">
              Photography is the story I fail to put into words.
            </blockquote>
            <motion.div
              style={{ scaleX: lineScaleX }}
              className="w-16 h-[2px] bg-gold mx-auto mb-6 sm:mb-8 origin-right"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-10 h-[1px] bg-gold/30" />
            <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.3em] font-medium">
              Bobby Sharma
            </span>
            <div className="w-10 h-[1px] bg-gold/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
