"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const images = [
  { src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&h=600&fit=crop", alt: "Photography moment 1" },
  { src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=400&fit=crop", alt: "Photography moment 2" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=400&fit=crop", alt: "Photography moment 3" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=600&fit=crop", alt: "Camera equipment" },
];

const features = [
  "Quality Products",
  "Custom Albums",
  "Online Gallery",
  "Home Delivery",
  "Candid Coverage",
  "Same Day Edits",
];

const imageVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotate: i % 2 === 0 ? -4 : 4,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const borderOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 0.2]);
  const borderScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <div className="section-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Images */}
          <div ref={imgRef} className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                {images.slice(0, 2).map((img, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={imgInView ? "visible" : "hidden"}
                    variants={imageVariants}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="rounded-lg overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={600}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-48 sm:h-56 lg:h-72 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                {images.slice(2).map((img, i) => (
                  <motion.div
                    key={i}
                    custom={i + 2}
                    initial="hidden"
                    animate={imgInView ? "visible" : "hidden"}
                    variants={imageVariants}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="rounded-lg overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={600}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-40 sm:h-48 lg:h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              style={{ opacity: borderOpacity, scale: borderScale }}
              className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full border border-gold/20 rounded-lg -z-10"
            />
          </div>

          {/* Right: Text */}
          <div ref={textRef} className="space-y-5 sm:space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium inline-block"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              We Are Creative &{" "}
              <span className="gradient-text italic">Professional</span>{" "}
              Photographers
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={textInView ? { width: 64 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gold"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-cream-muted leading-relaxed text-sm sm:text-base"
            >
              We specialize in wedding photography, corporate events, family
              and senior portraits, often traveling to your destination to
              capture the perfect moment in the perfect place. We will be
              there with you every step of the way to guarantee your special
              moments are captured for all time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-cream-muted leading-relaxed text-sm sm:text-base"
            >
              For Bobby Sharma Photography, creating photos filled with myriad
              moods, emotions, and moments is the most important aim. Be it a
              pre-wedding shoot or ceremony details, our team will capture
              every aspect of the event candidly and beautifully.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4">
              {features.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={textInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-cream-muted">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,169,110,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-gold text-gold font-medium uppercase tracking-wider text-xs sm:text-sm hover:bg-gold hover:text-dark transition-colors duration-300"
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
