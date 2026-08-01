"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&h=600&fit=crop", alt: "Photography moment 1", h: "h-56 sm:h-72" },
  { src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=400&fit=crop", alt: "Photography moment 2", h: "h-48" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=400&fit=crop", alt: "Photography moment 3", h: "h-48" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=600&fit=crop", alt: "Camera equipment", h: "h-64" },
];

const features = [
  "Quality Products",
  "Custom Albums",
  "Online Gallery",
  "Home Delivery",
  "Candid Coverage",
  "Same Day Edits",
];

function ScrollImage({
  src,
  alt,
  className,
  index,
  sectionRef,
}: {
  src: string;
  alt: string;
  className: string;
  index: number;
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const start = index * 0.08;
  const end = start + 0.3;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [80, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.85, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [index % 2 === 0 ? -6 : 6, 0]
  );

  return (
    <motion.div
      style={{ opacity, y, scale, rotate }}
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-lg overflow-hidden shadow-2xl"
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={600}
        sizes="(max-width: 1024px) 50vw, 25vw"
        className={className}
      />
    </motion.div>
  );
}

function FeatureItem({
  item,
  scrollYProgress,
  index,
}: {
  item: string;
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const itemStart = 0.25 + index * 0.04;
  const itemEnd = itemStart + 0.12;
  const opacity = useTransform(scrollYProgress, [itemStart, itemEnd], [0, 1]);
  const x = useTransform(scrollYProgress, [itemStart, itemEnd], [30, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="flex items-center gap-3"
    >
      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-cream-muted">{item}</span>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const labelOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0.05, 0.15], [20, 0]);

  const headingOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.1, 0.2], [30, 0]);

  const lineWidth = useTransform(scrollYProgress, [0.15, 0.25], [0, 64]);

  const p1Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const p1Y = useTransform(scrollYProgress, [0.18, 0.28], [20, 0]);

  const p2Opacity = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.22, 0.32], [20, 0]);

  const borderOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 0.2]);
  const borderScale = useTransform(scrollYProgress, [0.05, 0.3], [0.9, 1]);

  const btnOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.5, 0.6], [20, 0]);

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <div className="section-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {images.slice(0, 2).map((img, i) => (
                  <ScrollImage
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full ${img.h} object-cover`}
                    index={i}
                    sectionRef={sectionRef}
                  />
                ))}
              </div>
              <div className="space-y-4 pt-8">
                {images.slice(2).map((img, i) => (
                  <ScrollImage
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full ${img.h} object-cover`}
                    index={i + 2}
                    sectionRef={sectionRef}
                  />
                ))}
              </div>
            </div>
            <motion.div
              style={{ opacity: borderOpacity, scale: borderScale }}
              className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 rounded-lg -z-10"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <motion.span
              style={{ opacity: labelOpacity, y: labelY }}
              className="text-gold text-sm uppercase tracking-[0.3em] font-medium inline-block"
            >
              About Us
            </motion.span>
            <motion.h2
              style={{ opacity: headingOpacity, y: headingY }}
              className="font-display text-4xl lg:text-5xl font-bold leading-tight"
            >
              We Are Creative &{" "}
              <span className="gradient-text italic">Professional</span>{" "}
              Photographers
            </motion.h2>
            <motion.div
              style={{ width: lineWidth }}
              className="h-1 bg-gold"
            />
            <motion.p
              style={{ opacity: p1Opacity, y: p1Y }}
              className="text-cream-muted leading-relaxed"
            >
              We specialize in wedding photography, corporate events, family
              and senior portraits, often traveling to your destination to
              capture the perfect moment in the perfect place. We will be
              there with you every step of the way to guarantee your special
              moments are captured for all time.
            </motion.p>
            <motion.p
              style={{ opacity: p2Opacity, y: p2Y }}
              className="text-cream-muted leading-relaxed"
            >
              For Bobby Sharma Photography, creating photos filled with myriad
              moods, emotions, and moments is the most important aim. Be it a
              pre-wedding shoot or ceremony details, our team will capture
              every aspect of the event candidly and beautifully.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 py-4">
              {features.map((item, i) => (
                <FeatureItem
                  key={item}
                  item={item}
                  scrollYProgress={scrollYProgress}
                  index={i}
                />
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,169,110,0.2)" }}
              whileTap={{ scale: 0.95 }}
              style={{ opacity: btnOpacity, y: btnY }}
              className="inline-block px-8 py-4 border border-gold text-gold font-medium uppercase tracking-wider text-sm hover:bg-gold hover:text-dark transition-colors duration-300"
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
