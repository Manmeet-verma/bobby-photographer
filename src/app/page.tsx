"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

const rotatingWords = ["unique", "personalized", "memorable", "timeless"];

const storyPoints = [
  {
    title: "Wedding and portrait studio",
    text: "A focused photography practice shaped around celebrations, portraits, and meaningful moments.",
  },
  {
    title: "Based in Ludhiana, Punjab",
    text: "Serving couples and families in Punjab with a refined, high-touch visual style.",
  },
  {
    title: "High-quality products",
    text: "Still solutions, polished albums, and deliverables that keep the final memory premium.",
  },
];

const services = [
  {
    title: "Wedding Coverage",
    text: "Complete coverage designed to make every ceremony feel personal, delightful, and fun.",
  },
  {
    title: "Portrait Sessions",
    text: "Portraits with clean light, natural emotion, and a calm direction flow for every subject.",
  },
  {
    title: "Pre-wedding Stories",
    text: "Location-led visual storytelling that turns the lead-up to your wedding into a cinematic chapter.",
  },
  {
    title: "Albums and Keepsakes",
    text: "Premium still solutions and print-ready memory pieces made to last beyond the feed.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=1600&fit=crop",
    alt: "Bride and groom in warm light",
    label: "Wedding moments",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=1500&fit=crop",
    alt: "Portrait session with soft light",
    label: "Portrait direction",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=900&fit=crop",
    alt: "Wedding dance scene",
    label: "Celebration energy",
  },
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=900&fit=crop",
    alt: "Editorial styled photograph",
    label: "Editorial framing",
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=900&fit=crop",
    alt: "Camera and photography gear",
    label: "Studio craft",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=1500&fit=crop",
    alt: "Couple portrait outdoors",
    label: "Story-led portrait",
  },
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#0a0806] text-[#f6efe5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.12),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(223,192,138,0.08),_transparent_25%),linear-gradient(180deg,_rgba(10,8,6,1)_0%,_rgba(12,9,7,1)_48%,_rgba(7,6,5,1)_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0806]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a96e]/40 bg-white/5 font-display text-lg text-[#dfc08a] shadow-[0_0_25px_rgba(201,169,110,0.12)]">
              B
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-lg text-[#f6efe5]">Bobby&apos;s Photography</span>
              <span className="text-[0.7rem] uppercase tracking-[0.35em] text-[#c9bfae]">Ludhiana, Punjab</span>
            </span>
          </a>

          <nav className="hidden gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#c9bfae] transition-colors duration-300 hover:text-[#dfc08a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#videos"
            className="rounded-full border border-[#c9a96e]/35 bg-[#c9a96e]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#dfc08a] transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#0b0907]"
          >
            Explore More
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24"
      >
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#e7ddcf]"
          >
            <span className="h-2 w-2 rounded-full bg-[#dfc08a] shadow-[0_0_18px_rgba(223,192,138,0.75)]" />
            Welcome to Bobby&apos;s Photography
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Wedding and portrait imagery made
            <span className="ml-3 inline-block align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45 }}
                  className="gradient-text italic"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-base leading-8 text-[#c9bfae] sm:text-lg"
          >
            Wedding and Portrait Studio based in Punjab (India). If you are planning to make your wedding unique and personalised, Bobby Sharma Photography offers still solutions with high-quality products to keep your celebration vivid and memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#gallery"
              className="rounded-full bg-[#c9a96e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0b0907] transition-transform duration-300 hover:scale-[1.02]"
            >
              Explore More
            </a>
            <a
              href="https://www.youtube.com/channel/UCPIwHsyW8LGHb4MFSHHumTA/videos?app=desktop"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#c9a96e]/35 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#dfc08a] transition-colors duration-300 hover:bg-white/10"
            >
              Videos
            </a>
          </motion.div>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 + index * 0.08 }}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
              >
                <p className="font-display text-lg text-[#f6efe5]">{point.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#c9bfae]">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=1600&fit=crop"
              alt="Wedding photography mood"
              width={1200}
              height={1600}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=1500&fit=crop"
                alt="Portrait photography mood"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="rounded-[1.5rem] border border-[#c9a96e]/20 bg-[#12100d]/80 p-5 backdrop-blur-xl"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-[#dfc08a]">Designed for</p>
              <p className="mt-2 font-display text-2xl text-[#f6efe5]">Creative weddings, portraits, and premium still storytelling.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="About"
            title="A photography experience that feels"
            accent="personal"
            description="Bobby Sharma Photography is built around the kind of wedding and portrait work that should feel calm, intimate, and visually rich. The goal is to make your day look as unique as it feels, with high-quality output from start to finish."
          />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              ["Ludhiana", "Punjab, India"],
              ["Still solutions", "High-quality products"],
              ["Wedding focus", "Portrait detail"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <p className="font-display text-xl text-[#f6efe5]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#c9bfae]">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="What you get"
          title="Creative coverage that keeps every frame"
          accent="alive"
          description="The original site speaks about making weddings delightful and memorable. This version keeps that message, then expands it into a full visual system with smoother motion and a more cinematic surface."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a96e]/25 bg-[#c9a96e]/10 text-sm font-semibold text-[#dfc08a]">
                0{index + 1}
              </div>
              <h3 className="mt-5 font-display text-xl text-[#f6efe5]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c9bfae]">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Gallery"
          title="A cinematic rhythm in every"
          accent="frame"
          description="A mixed gallery layout keeps the page feeling alive and editorial, while the warm palette fits a wedding and portrait brand better than a flat generic theme."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
            >
              <div className={index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[4/5] lg:aspect-[3/4]" : "aspect-[4/3]"}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/90 via-[#080706]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#dfc08a]">{item.label}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(201,169,110,0.14),rgba(18,16,13,0.92))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10 lg:p-12"
        >
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#dfc08a]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#dfc08a]">Videos</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-[#f6efe5] sm:text-4xl lg:text-5xl">
                Explore the work in motion and see the studio style beyond stills.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e0d4c0] sm:text-base">
                The original site links to Bobby&apos;s video work. This version keeps that path visible and gives it a stronger visual stage so visitors can move from the homepage into the YouTube portfolio naturally.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://www.youtube.com/channel/UCPIwHsyW8LGHb4MFSHHumTA/videos?app=desktop"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f6efe5] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0b0907] transition-transform duration-300 hover:scale-[1.02]"
              >
                Watch Videos
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#f6efe5]/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#f6efe5] transition-colors duration-300 hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-[#090705]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-display text-2xl text-[#f6efe5]">Bobby&apos;s Photography</p>
            <p className="mt-2 text-sm text-[#c9bfae]">Wedding and Portrait Studio based in Punjab (India).</p>
          </div>
          <div className="text-sm text-[#c9bfae]">
            <p>© Bobby&apos;s Photography. All Rights Reserved.</p>
            <p className="mt-1">
              Designed by{" "}
              <a
                href="https://aacptech.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#dfc08a] transition-colors duration-300 hover:text-[#f6efe5]"
              >
                Team AACP
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
