"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="font-display text-gold text-lg font-bold">B</span>
              </div>
              <div>
                <span className="font-display text-lg text-cream">Bobby&apos;s</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-gold">Photography</span>
              </div>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed">
              Showcasing emotions and moments in the most authentic style is what makes Bobby Sharma Photography stand out.
            </p>
            <div className="flex gap-3">
              {["T", "F", "I", "Y"].map((letter, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-cream-muted text-xs hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-cream font-semibold mb-5">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "About Us", "Services", "Gallery", "Team", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="block text-sm text-cream-muted hover:text-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-cream font-semibold mb-5">Services</h4>
            <div className="space-y-3">
              {["Wedding Photography", "Portrait Sessions", "Fashion Shoots", "Editorial Work", "Pre-Wedding", "Event Coverage"].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-sm text-cream-muted hover:text-gold transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-cream font-semibold mb-5">Newsletter</h4>
            <p className="text-cream-muted text-sm mb-4">
              Subscribe to get updates on our latest work and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-dark-surface border border-dark-border border-r-0 text-cream text-sm focus:border-gold focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 bg-gold text-dark font-semibold text-sm hover:bg-gold-light transition-all duration-300"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-muted text-sm">
            &copy; {new Date().getFullYear()} Bobby&apos;s Photography. All Rights Reserved.
          </p>
          <p className="text-cream-muted text-sm">
            Designed by <span className="text-gold font-semibold">Team AACP</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
