"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-10" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-[0.3em] font-medium">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="h-px bg-gold inline-block"
                />
                Welcome to Bobby&apos;s Photography
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-bold"
            >
              <span className="block">Capturing</span>{" "}
              <span className="gradient-text italic">Timeless</span>{" "}
              <span className="block">Moments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-cream-muted text-lg leading-relaxed max-w-lg"
            >
              Wedding and Portrait Studio based in Punjab, India. We
              specialize in creating authentic, emotional, and breathtaking
              photography that tells your unique story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,169,110,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20"
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,169,110,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gold/40 text-gold font-medium uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-8 pt-4"
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
                >
                  {i > 0 && (
                    <div className="w-px h-12 bg-dark-border absolute -ml-4" />
                  )}
                  <span className="block font-display text-3xl font-bold text-gold">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-cream-muted">
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop"
                    alt="Wedding Photography"
                    width={600}
                    height={800}
                    priority
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: 1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=500&fit=crop"
                    alt="Portrait Photography"
                    width={600}
                    height={500}
                    priority
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=500&fit=crop"
                    alt="Couple Photography"
                    width={600}
                    height={500}
                    priority
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.8 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop"
                    alt="Fashion Photography"
                    width={600}
                    height={800}
                    priority
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 w-32 h-32 border border-gold/20 rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -bottom-6 -left-6 w-24 h-24 border border-gold/20 rounded-lg"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream-muted">
            Scroll Down
          </span>
          <motion.div
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
