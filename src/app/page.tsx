'use client';

import Hero from './components/Hero';
import ScenariosSection from './components/ScenariosSection';
import ProductsFeatured from './components/ProductsFeatured';
import ContactBar from './components/ContactBar';
import FloatingButton from './components/FloatingButton';

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <ScenariosSection />
      <ProductsFeatured />
      <ContactBar />
      <FloatingButton />
    </div>
  );
}