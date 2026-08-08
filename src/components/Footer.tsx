"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="font-display text-accent text-base sm:text-lg font-bold">B</span>
              </div>
              <div>
                <span className="font-display text-base sm:text-lg text-ink">Bobby&apos;s</span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-accent">Photography</span>
              </div>
            </div>
            <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">
              Showcasing emotions and moments in the most authentic style is what makes Bobby Sharma Photography stand out.
            </p>
            <div className="flex gap-2.5 sm:gap-3">
              {["T", "F", "I", "Y"].map((letter, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-light-border flex items-center justify-center text-ink-muted text-[10px] sm:text-xs hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-ink font-semibold mb-4 sm:mb-5 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2.5 sm:space-y-3">
              {["Home", "About Us", "Services", "Gallery", "Team", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="block text-xs sm:text-sm text-ink-muted hover:text-accent transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-ink font-semibold mb-4 sm:mb-5 text-sm sm:text-base">Services</h4>
            <div className="space-y-2.5 sm:space-y-3">
              {["Wedding Photography", "Portrait Sessions", "Fashion Shoots", "Editorial Work", "Pre-Wedding", "Event Coverage"].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-xs sm:text-sm text-ink-muted hover:text-accent transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-ink font-semibold mb-4 sm:mb-5 text-sm sm:text-base">Newsletter</h4>
            <p className="text-ink-muted text-xs sm:text-sm mb-3 sm:mb-4">
              Subscribe to get updates on our latest work and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 bg-light-surface border border-light-border border-r-0 text-ink text-xs sm:text-sm focus:border-accent focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 sm:px-5 py-2.5 sm:py-3 bg-accent text-light font-semibold text-xs sm:text-sm hover:bg-accent-dark transition-all duration-300 flex-shrink-0"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-light-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-ink-muted text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bobby&apos;s Photography. All Rights Reserved.
          </p>
          <p className="text-ink-muted text-xs sm:text-sm text-center sm:text-right">
            Designed by <span className="text-accent font-semibold">Team AACP</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
