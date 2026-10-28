"use client";

import { motion } from "framer-motion";
import { ParallaxImage } from "./ParallaxImage";

export function ImageGallery() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
            A Glimpse Into Our Impact
          </h2>
          <p className="text-lg text-white/50 max-w-2xl font-light">
            Every initiative is a step towards a brighter future. See the tactile reality of our community-driven approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Large Main Image */}
          <div className="md:col-span-8 h-[50vh] md:h-[70vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <ParallaxImage
                src="/magazine-3.png"
                alt="Aesthetic portrait of a young leader"
                className="w-full h-full rounded-sm"
              />
            </motion.div>
          </div>

          {/* Side stacked images */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 h-[50vh] md:h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <ParallaxImage
                src="/magazine-2.png"
                alt="Hands working together"
                className="w-full h-full rounded-sm"
                speed={0.1}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1"
            >
              <ParallaxImage
                src="/magazine-4.png"
                alt="Community space"
                className="w-full h-full rounded-sm"
                speed={0.15}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
