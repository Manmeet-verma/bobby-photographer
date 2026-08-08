"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 10 + 15,
  delay: Math.random() * 5,
}));

const typingWords = ["Timeless", "Stunning", "Unforgettable", "Breathtaking"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springGlowX = useSpring(glowX, { stiffness: 50, damping: 20 });
  const springGlowY = useSpring(glowY, { stiffness: 50, damping: 20 });

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % typingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      glowX.set((e.clientX - rect.left - rect.width / 2) / 20);
      glowY.set((e.clientY - rect.top - rect.height / 2) / 20);
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center hero-gradient"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-light/60 via-light/40 to-light z-10" />
        <motion.div
          style={{ x: springGlowX, y: springGlowY }}
          className="absolute top-20 right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-accent/5 blur-[120px]"
        />
        <motion.div
          style={{ x: springGlowY, y: springGlowX }}
          className="absolute bottom-20 left-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-accent/[0.03] blur-[100px]"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div style={{ opacity }} className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="h-px bg-accent inline-block"
                />
                Welcome to Bobby&apos;s Photography
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-3"
              style={{ lineHeight: "1.4", overflow: "visible" }}
            >
              <span className="block">Capturing</span>{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text italic inline-block"
                >
                  {typingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>{" "}
              <span className="block">Moments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Wedding and Portrait Studio based in Punjab, India. We
              specialize in creating authentic, emotional, and breathtaking
              photography that tells your unique story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(75,85,99,0.25)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-light font-semibold uppercase tracking-wider text-xs sm:text-sm hover:bg-accent-dark transition-colors duration-300 shadow-lg shadow-accent/20 accent-shine"
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(75,85,99,0.12)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-accent/40 text-accent font-medium uppercase tracking-wider text-xs sm:text-sm hover:bg-accent/10 transition-colors duration-300 accent-border"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-6 sm:gap-8 pt-4"
            >
              {[
                { value: "35+", label: "Years Experience" },
                { value: "8750+", label: "Happy Clients" },
                { value: "20", label: "Awards Won" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="block font-display text-2xl sm:text-3xl font-bold text-accent text-glow">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-ink-muted">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                  whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop"
                    alt="Wedding Photography"
                    width={600}
                    height={800}
                    priority
                    sizes="30vw"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: 1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                  whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=500&fit=crop"
                    alt="Portrait Photography"
                    width={600}
                    height={500}
                    priority
                    sizes="30vw"
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                  whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=500&fit=crop"
                    alt="Couple Photography"
                    width={600}
                    height={500}
                    priority
                    sizes="30vw"
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.8 }}
                  whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop"
                    alt="Fashion Photography"
                    width={600}
                    height={800}
                    priority
                    sizes="30vw"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 w-32 h-32 border border-accent/20 rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -bottom-6 -left-6 w-24 h-24 border border-accent/20 rounded-lg"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
