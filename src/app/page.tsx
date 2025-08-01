'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-950 to-blue-950 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <FeatureSection />
      <Footer />
    </main>
  );
}