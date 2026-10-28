"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Visual Anchor */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Wealders Abstract Visual Anchor"
          fill
          priority
          className="object-cover opacity-80 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 w-full">
        <div className="max-w-4xl pt-20">
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-medium tracking-tighter text-white"
            >
              We Are <br className="hidden md:block" />
              <span className="text-white/60">Leaders.</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-8 max-w-lg">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-lg md:text-xl text-white/50 leading-relaxed font-light"
            >
              Shaping the future through community empowerment, visionary thinking, and tactile innovation. Welcome to the new standard of leadership.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="mt-12"
          >
            <button className="glass px-8 py-4 rounded-full text-white uppercase text-sm tracking-widest font-medium hover:bg-white/10 transition-colors">
              Discover Our Impact
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
