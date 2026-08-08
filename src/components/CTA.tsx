"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-light-card" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <motion.div
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
              Limited Availability
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
          >
            Ready to Capture Your{" "}
            <span className="gradient-text italic">Perfect Moment?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-ink-muted text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          >
            Book your session today and let us transform your special moments into timeless works of art. 
            Limited slots available for 2026 weddings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(75,85,99,0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 bg-accent text-light font-semibold uppercase tracking-wider text-sm hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 w-full sm:w-auto"
            >
              Book Your Session
            </motion.a>
            <motion.a
              href="tel:+918146273140"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 border border-accent/40 text-accent font-medium uppercase tracking-wider text-sm hover:bg-accent/10 transition-all duration-300 w-full sm:w-auto"
            >
              Call: 081462 73140
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-light-border"
          >
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Free Consultation" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "24hr Response" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", text: "Satisfaction Guaranteed" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-ink-muted">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
