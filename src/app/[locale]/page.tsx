import Hero from '../components/Hero';
import ScenariosSection from '../components/ScenariosSection';
import ProductsFeatured from '../components/ProductsFeatured';
import ContactBar from '../components/ContactBar';
import FloatingButton from '../components/FloatingButton';

export const revalidate = 3600;

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
