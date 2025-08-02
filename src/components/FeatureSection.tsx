// Indicates that this component should only be rendered on the client side.
'use client';

// Imports the motion component from the framer-motion library for animations.
import { motion } from 'framer-motion';

// An array of feature names to be displayed in the section.
const features = ["Feature A", "Feature B", "Feature C"];

/**
 * Renders the feature section of the page.
 * This component displays a list of features with animations.
 */
export default function FeatureSection() {
  return (
    // The main container for the feature section.
    <section className="space-y-24 py-32 px-6" id="section2">
      {/* Maps over the features array to render each feature. */}
      {features.map((feature, i) => (
        // Each feature is wrapped in a motion.div for animations.
        <motion.div
          key={i}
          // Initial animation state: invisible and positioned to the left or right.
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          // Animation state when in view: fully visible and at the original position.
          whileInView={{ opacity: 1, x: 0 }}
          // Configuration for the animation transition.
          transition={{ duration: 0.6 }}
          // Ensures the animation runs only once when the component enters the viewport.
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* The title of the feature. */}
          <h2 className="text-3xl font-bold mb-4">{feature}</h2>
          {/* The description of the feature. */}
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder content for {feature}.</p>
        </motion.div>
      ))}
    </section>
  );
}
