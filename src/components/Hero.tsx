'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slogans = ["We Create Impact", "Ideas That Stick", "Your Vision, Amplified"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center px-6" id="section1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {slogans[index]}
        </h1>
        <p className="text-xl text-gray-300">Welcome to the future of advertising.</p>
      </motion.div>
    </section>
  );
}