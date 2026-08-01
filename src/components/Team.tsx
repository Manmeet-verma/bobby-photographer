"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const team = [
  {
    name: "Bobby Sharma",
    role: "Photographer & Founder",
    description:
      "Passionate about photography with an innate ability to capture the soul of every moment. His creative vision and technical expertise make every shoot extraordinary.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Gourav",
    role: "Videographer",
    description:
      "He has a magical tool that allows us to freeze time and relive moments. His cinematic approach brings stories to life in ways words never could.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    name: "Varinder",
    role: "Retoucher",
    description:
      "He has the ability to manipulate images and improve their appearance or technical qualities. Every photo he touches becomes a masterpiece.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    name: "Bhavjeet",
    role: "Editor",
    description:
      "He provides editing services for professional wedding photographers, transforming the ordinary into extraordinary with his keen eye for detail.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
  },
];

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <div className="section-divider" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4">
            Creative <span className="gradient-text italic">Photographer</span> & Videographer
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-3 sm:mb-5 rounded-lg">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <h3 className="font-display text-sm sm:text-xl font-semibold text-cream">
                    {member.name}
                  </h3>
                  <span className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                    {member.role}
                  </span>
                </div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  {["F", "T", "I"].map((social, si) => (
                    <motion.a
                      key={si}
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-dark/60 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300 text-[10px] sm:text-xs"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
              <p className="text-cream-muted text-[11px] sm:text-sm leading-relaxed px-1 line-clamp-3 sm:line-clamp-none">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
