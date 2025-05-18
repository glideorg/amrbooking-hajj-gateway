
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "https://images.pexels.com/photos/26436656/pexels-photo-26436656/free-photo-of-long-exposure-photo-of-kaaba-surrounded-by-crowds-of-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] bg-amr-green overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          >
            {/* Green Overlay */}
            <div className="absolute inset-0 bg-amr-green opacity-60"></div>
          </div>
        ))}
      </div>
      
      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className={`text-amr-white text-4xl md:text-5xl font-bold mb-4 ${language === 'ar' ? 'arabic' : ''}`}>
            {t('discoverPerfectStay')}
          </h1>
          <p className={`text-amr-beige text-xl mb-8 ${language === 'ar' ? 'arabic' : ''}`}>
            {t('gatewayToIslamic')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
