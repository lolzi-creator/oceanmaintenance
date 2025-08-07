'use client';

import Header from '@/components/Navbar';
import Hero from '@/components/Hero';
import WebsitesCarousel from '@/components/WebsitesCarousel';
import ServicesPreview from '@/components/ServicesPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <WebsitesCarousel />
      </main>
      <Footer />
    </div>
  );
}
