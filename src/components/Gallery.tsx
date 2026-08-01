"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const categories = ["All", "Wedding", "Portrait", "Fashion", "Travel", "Editorial"];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop", title: "Eternal Vows", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop", title: "Inner Light", category: "Portrait" },
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop", title: "Urban Grace", category: "Fashion" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", title: "Mountain Dreams", category: "Travel" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1000&fit=crop", title: "Sacred Bond", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop", title: "City Stories", category: "Editorial" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop", title: "Golden Hour", category: "Portrait" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=1000&fit=crop", title: "Silk & Shadows", category: "Fashion" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop", title: "Wanderlust", category: "Travel" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop", title: "First Dance", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop", title: "Reflections", category: "Portrait" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop", title: "Fashion Week", category: "Fashion" },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <div className="section-divider" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            Our Works
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
            Discover Our{" "}
            <span className="gradient-text italic">Creative</span> Photoshoot
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 text-sm uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gold text-dark shadow-lg shadow-gold/20"
                  : "border border-dark-border text-cream-muted hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  i % 5 === 0 ? "row-span-2" : ""
                }`}
                onClick={() => setLightbox(item.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={800}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-gold text-xs uppercase tracking-[0.2em] mb-1"
                  >
                    {item.category}
                  </motion.span>
                  <h3 className="font-display text-xl font-semibold text-cream">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                  <svg className="w-5 h-5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all"
              onClick={() => setLightbox(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
