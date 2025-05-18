
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] bg-amr-green overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1591525637906-97b3830db8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
          opacity: 0.6
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-amr-white text-4xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Stay on Sacred Ground
          </h1>
          <h2 className="text-amr-beige text-xl md:text-2xl mb-8 arabic">
            اكتشف إقامتك المثالية على الأرض المقدسة
          </h2>
          <p className="text-amr-beige text-xl mb-8">
            amrbooking: Your Gateway to Islamic Hospitality
            <span className="block mt-1 arabic">بوابتك للضيافة الإسلامية</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
