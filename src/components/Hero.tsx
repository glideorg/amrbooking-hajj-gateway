
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="relative h-[500px] bg-amr-green overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/26436656/pexels-photo-26436656/free-photo-of-long-exposure-photo-of-kaaba-surrounded-by-crowds-of-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          opacity: 0.6
        }}
      ></div>
      
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
