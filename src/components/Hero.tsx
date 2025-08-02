// Indicates that this component should only be rendered on the client side.
'use client';

// Imports the motion component from the framer-motion library for animations.
import { motion } from 'framer-motion';

/**
 * Renders the hero section of the page.
 * This component displays the main heading, a subtitle, and call-to-action buttons.
 */
export default function Hero() {
  return (
    // The main container for the hero section, taking up the full screen height.
    <section className="h-screen flex items-center justify-center px-6" id="section1">
      {/* The content of the hero section, animated with framer-motion. */}
      <motion.div
        // Initial animation state: invisible and slightly below its final position.
        initial={{ opacity: 0, y: 50 }}
        // Animation state when the component mounts: fully visible and at its original position.
        animate={{ opacity: 1, y: 0 }}
        // Configuration for the animation transition.
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* The main heading. */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Win customers by understanding their
        </h1>
        {/* The subtitle. */}
        <p className="text-xl text-gray-300 mb-8">
          Get AI-driven insights from billions of discussions on social media.
        </p>
        {/* The call-to-action buttons. */}
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