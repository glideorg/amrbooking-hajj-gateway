
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchBox from '@/components/SearchBox';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SearchBox />
        <FeaturedDestinations />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
