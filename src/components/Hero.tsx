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
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Win customers by understanding their
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Get AI-driven insights from billions of discussions on social media.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Try for free
          </a>
          <a
            href="#"
            className="bg-gray-700 px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Book a demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}