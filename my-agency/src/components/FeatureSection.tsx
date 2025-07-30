'use client';

import { motion } from 'framer-motion';

const features = ["Feature A", "Feature B", "Feature C"];

export default function FeatureSection() {
  return (
    <section className="space-y-24 py-32 px-6" id="section2">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">{feature}</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder content for {feature}.</p>
        </motion.div>
      ))}
    </section>
  );
}
