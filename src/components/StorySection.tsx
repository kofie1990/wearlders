"use client";

import { motion } from "framer-motion";
import { ParallaxImage } from "./ParallaxImage";

interface StorySectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  orientation?: "left" | "right";
}

export function StorySection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  orientation = "left",
}: StorySectionProps) {
  return (
    <section className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col ${
            orientation === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } gap-12 md:gap-24 items-center`}
        >
          {/* Image Container */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ParallaxImage
                src={imageSrc}
                alt={imageAlt}
                className="w-full aspect-[4/5] md:aspect-[3/4]"
              />
            </motion.div>
          </div>

          {/* Text Container */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-sm font-medium tracking-widest uppercase text-white/50 mb-4">
                {subtitle}
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
