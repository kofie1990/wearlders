"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Our Mission", "Initiatives", "Journal", "Contact"];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold tracking-tighter uppercase text-white relative z-50"
          >
            Wealders.
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm tracking-wide text-white/70 hover:text-white transition-colors uppercase font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white uppercase text-sm font-medium tracking-wide relative z-50 p-2 -mr-2"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl tracking-tight text-white/80 hover:text-white transition-colors uppercase font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
