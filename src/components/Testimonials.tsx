
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  arabicLocation: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, arabicLocation, avatar }) => {
  const { language } = useLanguage();
  
  return (
    <Card className="h-full border-amr-beige">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={avatar} 
              alt={author} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h4 className="font-medium text-amr-green">{author}</h4>
            <div className="text-sm text-muted-foreground">
              <span>{language === 'ar' ? arabicLocation : location}</span>
            </div>
          </div>
        </div>
        
        <blockquote className={`flex-grow italic text-gray-700 mb-4 ${language === 'ar' ? 'arabic text-right' : ''}`}>
          "{quote}"
        </blockquote>
        
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  
  const testimonials = [
    {
      quote: language === 'ar' 
        ? "كان الفندق على بعد خطوات من الحرم. مرافق الصلاة والطعام الحلال جعلت رحلة عمرتنا مثالية"
        : "The hotel was steps away from the Haram. Prayer facilities and halal dining made our Umrah trip perfect.",
      author: language === 'ar' ? "فاطمة أحمد" : "Fatimah Ahmad",
      location: "Kuala Lumpur, Malaysia",
      arabicLocation: "كوالالمبور، ماليزيا",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: language === 'ar'
        ? "أحببت الحجز السلس وتذكيرات أوقات الصلاة. ميزة تحديد القبلة كانت لمسة مدروسة"
        : "Loved the seamless booking and prayer time reminders. The Qibla finder was a thoughtful touch.",
      author: language === 'ar' ? "عبدالله الرحمن" : "Abdullah Rahman",
      location: "Jakarta, Indonesia",
      arabicLocation: "جاكرتا، إندونيسيا",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: language === 'ar'
        ? "الغرف كانت نظيفة، والسبا المنفصل للجنسين كان رائعاً! سأحجز بالتأكيد مرة أخرى في العمرة القادمة"
        : "Rooms were spotless, gender-segregated spa was amazing! Will definitely book again next Umrah.",
      author: language === 'ar' ? "عائشة باتيل" : "Aisha Patel",
      location: "London, UK",
      arabicLocation: "لندن، المملكة المتحدة",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`text-3xl font-bold text-amr-green mb-2 ${language === 'ar' ? 'arabic' : ''}`}>
            {t('whatGuestsSay')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              arabicLocation={testimonial.arabicLocation}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
