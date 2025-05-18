
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'homepage': 'Homepage',
    'hotelSearch': 'Hotel Search',
    'hotelDetails': 'Hotel Details',
    'bookingConfirmation': 'Booking Confirmation',
    'sunset': 'Sunset',
    
    // Hero
    'discoverPerfectStay': 'Discover Your Perfect Stay on Sacred Ground',
    'gatewayToIslamic': 'amrbooking: Your Gateway to Islamic Hospitality',
    
    // Featured Destinations
    'featuredDestinations': 'Featured Destinations',
    'makkahDescription': 'Stay close to the Holy Kaaba with experienced local guides at the heart of Islam.',
    'madinahDescription': 'Visit the Prophet\'s Mosque and explore the spiritual essence of Madinah.',
    'riyadhDescription': 'Discover luxury stays in the vibrant Saudi capital, blending heritage and modernity.',
    'abhaDescription': 'Explore the serene mountains and rich heritage of Abha, Saudi Arabia\'s hidden gem.',
    
    // Testimonials
    'whatGuestsSay': 'What Our Guests Say',
    
    // Footer
    'aboutUs': 'About Us',
    'ourStory': 'Our Story',
    'ourTeam': 'Our Team',
    'careers': 'Careers',
    'press': 'Press',
    'services': 'Services',
    'hotels': 'Hotels',
    'apartments': 'Apartments',
    'umrahPackages': 'Umrah Packages',
    'hajjPackages': 'Hajj Packages',
    'support': 'Support',
    'contactUs': 'Contact Us',
    'faqs': 'FAQs',
    'helpCenter': 'Help Center',
    'covid19Info': 'COVID-19 Info',
    'downloadApp': 'Download Our App',
    'followUs': 'Follow Us',
    'termsService': 'Terms of Service',
    'privacyPolicy': 'Privacy Policy',
    'cookiePolicy': 'Cookie Policy',
    'allRightsReserved': 'All Rights Reserved',
    'qibla': 'Qibla',
    'nextPrayer': 'Next Prayer',
  },
  ar: {
    // Header
    'homepage': 'الصفحة الرئيسية',
    'hotelSearch': 'بحث فندق',
    'hotelDetails': 'تفاصيل الفندق',
    'bookingConfirmation': 'تأكيد الحجز',
    'sunset': 'المغرب',
    
    // Hero
    'discoverPerfectStay': 'اكتشف إقامتك المثالية على الأرض المقدسة',
    'gatewayToIslamic': 'بوابتك للضيافة الإسلامية',
    
    // Featured Destinations
    'featuredDestinations': 'وجهات مميزة',
    'makkahDescription': 'إقامة قريبة من الكعبة المشرفة مع مرشدين محليين ذوي خبرة في قلب الإسلام.',
    'madinahDescription': 'زيارة المسجد النبوي واستكشاف الجوهر الروحي للمدينة المنورة.',
    'riyadhDescription': 'اكتشف الإقامات الفاخرة في العاصمة السعودية النابضة بالحياة، مزيج من التراث والحداثة.',
    'abhaDescription': 'استكشف الجبال الهادئة والتراث الغني لأبها، جوهرة المملكة العربية السعودية المخفية.',
    
    // Testimonials
    'whatGuestsSay': 'آراء نزلائنا',
    
    // Footer
    'aboutUs': 'من نحن',
    'ourStory': 'قصتنا',
    'ourTeam': 'فريقنا',
    'careers': 'وظائف',
    'press': 'الصحافة',
    'services': 'الخدمات',
    'hotels': 'فنادق',
    'apartments': 'شقق',
    'umrahPackages': 'باقات العمرة',
    'hajjPackages': 'باقات الحج',
    'support': 'الدعم',
    'contactUs': 'اتصل بنا',
    'faqs': 'الأسئلة المتكررة',
    'helpCenter': 'مركز المساعدة',
    'covid19Info': 'معلومات كوفيد-١٩',
    'downloadApp': 'تحميل تطبيقنا',
    'followUs': 'تابعنا',
    'termsService': 'شروط الخدمة',
    'privacyPolicy': 'سياسة الخصوصية',
    'cookiePolicy': 'سياسة ملفات تعريف الارتباط',
    'allRightsReserved': 'جميع الحقوق محفوظة',
    'qibla': 'القبلة',
    'nextPrayer': 'الصلاة القادمة',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
