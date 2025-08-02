'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-6" id="section1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-6xl font-extrabold mb-4">
          OPS Advertising
        </h1>
        <p className="text-xl text-black-300 mb-8">
          The Future of Advertising, Tailored to your Needs.
        </p>
        
      </motion.div>
    </section>
  );
}