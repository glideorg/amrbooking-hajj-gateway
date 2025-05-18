
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface DestinationData {
  name: string;
  arabicName: string;
  description: {
    en: string;
    ar: string;
  };
  imageUrl: string;
  attractions: {
    en: string[];
    ar: string[];
  };
  hotels: {
    en: {
      name: string;
      description: string;
      stars: number;
      price: string;
    }[];
    ar: {
      name: string;
      description: string;
      stars: number;
      price: string;
    }[];
  };
}

const destinationsData: Record<string, DestinationData> = {
  "makkah": {
    name: "Makkah",
    arabicName: "مكة المكرمة",
    description: {
      en: "Makkah is the holiest city in Islam and the birthplace of the Prophet Muhammad (PBUH). It's home to the Masjid al-Haram, which contains the Kaaba, the most sacred site in Islam. Muslims from around the world journey to Makkah for Hajj and Umrah pilgrimages.",
      ar: "مكة المكرمة هي أقدس مدينة في الإسلام ومسقط رأس النبي محمد (صلى الله عليه وسلم). تضم المسجد الحرام الذي يحتوي على الكعبة، أقدس موقع في الإسلام. يسافر المسلمون من جميع أنحاء العالم إلى مكة لأداء فريضتي الحج والعمرة."
    },
    imageUrl: "https://images.unsplash.com/photo-1591457722016-8a58db5d3988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    attractions: {
      en: [
        "Masjid al-Haram (The Grand Mosque)",
        "The Kaaba",
        "Mount Arafat",
        "Jabal al-Nour (Mountain of Light)",
        "Mina and Muzdalifah"
      ],
      ar: [
        "المسجد الحرام",
        "الكعبة المشرفة",
        "جبل عرفات",
        "جبل النور",
        "منى ومزدلفة"
      ]
    },
    hotels: {
      en: [
        {
          name: "Makkah Royal Clock Tower",
          description: "Luxury hotel with direct access to the Grand Mosque",
          stars: 5,
          price: "$350/night"
        },
        {
          name: "Hilton Makkah Convention Hotel",
          description: "Modern accommodations near the Haram",
          stars: 5,
          price: "$280/night"
        },
        {
          name: "Al Safwah Towers",
          description: "Family-friendly hotel with Kaaba views",
          stars: 4,
          price: "$220/night"
        }
      ],
      ar: [
        {
          name: "برج ساعة مكة الملكي",
          description: "فندق فاخر مع وصول مباشر إلى المسجد الحرام",
          stars: 5,
          price: "350$ في الليلة"
        },
        {
          name: "فندق هيلتون مكة للمؤتمرات",
          description: "إقامة عصرية بالقرب من الحرم",
          stars: 5,
          price: "280$ في الليلة"
        },
        {
          name: "أبراج الصفوة",
          description: "فندق مناسب للعائلات مع إطلالات على الكعبة",
          stars: 4,
          price: "220$ في الليلة"
        }
      ]
    }
  },
  "madinah": {
    name: "Madinah",
    arabicName: "المدينة المنورة",
    description: {
      en: "Madinah is the second-holiest city in Islam after Makkah. It's where Prophet Muhammad (PBUH) migrated to from Makkah and established the first Muslim community. The Prophet's Mosque (Al-Masjid an-Nabawi) is located in the city center and contains the resting place of the Prophet.",
      ar: "المدينة المنورة هي ثاني أقدس مدينة في الإسلام بعد مكة المكرمة. هي المكان الذي هاجر إليه النبي محمد (صلى الله عليه وسلم) من مكة وأسس فيه أول مجتمع إسلامي. يقع المسجد النبوي في وسط المدينة ويحتوي على مقام النبي."
    },
    imageUrl: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    attractions: {
      en: [
        "Al-Masjid an-Nabawi (The Prophet's Mosque)",
        "Quba Mosque",
        "Mount Uhud",
        "Al-Baqi Cemetery",
        "Qiblatain Mosque"
      ],
      ar: [
        "المسجد النبوي",
        "مسجد قباء",
        "جبل أحد",
        "مقبرة البقيع",
        "مسجد القبلتين"
      ]
    },
    hotels: {
      en: [
        {
          name: "Dar Al Taqwa Hotel",
          description: "Elegant hotel with views of the Prophet's Mosque",
          stars: 5,
          price: "$320/night"
        },
        {
          name: "Madinah Hilton",
          description: "Luxury hotel within walking distance of the Prophet's Mosque",
          stars: 5,
          price: "$290/night"
        },
        {
          name: "Anwar Al Madinah Mövenpick Hotel",
          description: "Family-friendly accommodations with excellent dining",
          stars: 4,
          price: "$210/night"
        }
      ],
      ar: [
        {
          name: "فندق دار التقوى",
          description: "فندق أنيق مع إطلالات على المسجد النبوي",
          stars: 5,
          price: "320$ في الليلة"
        },
        {
          name: "فندق هيلتون المدينة",
          description: "فندق فاخر على مسافة قريبة من المسجد النبوي",
          stars: 5,
          price: "290$ في الليلة"
        },
        {
          name: "فندق أنوار المدينة موفنبيك",
          description: "إقامة مناسبة للعائلات مع مطاعم ممتازة",
          stars: 4,
          price: "210$ في الليلة"
        }
      ]
    }
  },
  "riyadh": {
    name: "Riyadh",
    arabicName: "الرياض",
    description: {
      en: "Riyadh is the capital and largest city of Saudi Arabia. It's a modern metropolis with stunning architecture, vibrant culture, and rich history. The city blends traditional Saudi heritage with contemporary urban development.",
      ar: "الرياض هي عاصمة المملكة العربية السعودية وأكبر مدنها. إنها مدينة حديثة ذات عمارة مذهلة وثقافة نابضة بالحياة وتاريخ غني. تمزج المدينة بين التراث السعودي التقليدي والتطور الحضري المعاصر."
    },
    imageUrl: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    attractions: {
      en: [
        "Kingdom Centre Tower",
        "National Museum of Saudi Arabia",
        "Diriyah (UNESCO World Heritage Site)",
        "Al Masmak Fortress",
        "Edge of the World"
      ],
      ar: [
        "برج المملكة",
        "المتحف الوطني السعودي",
        "الدرعية (موقع تراث عالمي لليونسكو)",
        "قلعة المصمك",
        "حافة العالم"
      ]
    },
    hotels: {
      en: [
        {
          name: "Four Seasons Hotel Riyadh",
          description: "Luxury hotel in the iconic Kingdom Tower",
          stars: 5,
          price: "$380/night"
        },
        {
          name: "The Ritz-Carlton, Riyadh",
          description: "Palatial luxury hotel with extensive gardens",
          stars: 5,
          price: "$420/night"
        },
        {
          name: "Hyatt Regency Riyadh Olaya",
          description: "Modern hotel in the heart of the business district",
          stars: 4,
          price: "$250/night"
        }
      ],
      ar: [
        {
          name: "فندق فورسيزونز الرياض",
          description: "فندق فاخر في برج المملكة الشهير",
          stars: 5,
          price: "380$ في الليلة"
        },
        {
          name: "فندق الريتز كارلتون، الرياض",
          description: "فندق فخم على طراز القصور مع حدائق واسعة",
          stars: 5,
          price: "420$ في الليلة"
        },
        {
          name: "حياة ريجنسي الرياض العليا",
          description: "فندق حديث في قلب الحي التجاري",
          stars: 4,
          price: "250$ في الليلة"
        }
      ]
    }
  },
  "abha": {
    name: "Abha",
    arabicName: "أبها",
    description: {
      en: "Abha is the capital of Asir Province in Saudi Arabia, situated in the mountains of southwestern Saudi Arabia. Known for its mild climate, beautiful landscapes, and rich cultural heritage, Abha offers a refreshing contrast to the desert regions of the kingdom.",
      ar: "أبها هي عاصمة منطقة عسير في المملكة العربية السعودية، وتقع في جبال جنوب غرب المملكة. تشتهر بمناخها المعتدل ومناظرها الطبيعية الخلابة وتراثها الثقافي الغني، وتقدم أبها تباينًا منعشًا مع المناطق الصحراوية في المملكة."
    },
    imageUrl: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    attractions: {
      en: [
        "Abha Palace Hotel",
        "Cable Car (Teleférico)",
        "Al Soudah Mountain",
        "Green Mountain",
        "Shada Palace Museum"
      ],
      ar: [
        "فندق قصر أبها",
        "التلفريك",
        "جبل السودة",
        "الجبل الأخضر",
        "متحف قصر شدا"
      ]
    },
    hotels: {
      en: [
        {
          name: "Blue Inn Abha",
          description: "Mountain views with modern amenities",
          stars: 4,
          price: "$180/night"
        },
        {
          name: "Mercure Abha",
          description: "Upscale hotel with regional design elements",
          stars: 5,
          price: "$220/night"
        },
        {
          name: "Abha Palace Hotel",
          description: "Historic hotel with panoramic views",
          stars: 4,
          price: "$160/night"
        }
      ],
      ar: [
        {
          name: "بلو إن أبها",
          description: "إطلالات جبلية مع وسائل راحة عصرية",
          stars: 4,
          price: "180$ في الليلة"
        },
        {
          name: "ميركيور أبها",
          description: "فندق راقي مع عناصر تصميم إقليمية",
          stars: 5,
          price: "220$ في الليلة"
        },
        {
          name: "فندق قصر أبها",
          description: "فندق تاريخي مع إطلالات بانورامية",
          stars: 4,
          price: "160$ في الليلة"
        }
      ]
    }
  }
};

const DestinationPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const { language } = useLanguage();
  
  const destinationData = destinationsData[city || 'makkah'];
  
  if (!destinationData) {
    return <div>Destination not found</div>;
  }
  
  const isRTL = language === 'ar';
  const displayName = isRTL ? destinationData.arabicName : destinationData.name;
  const description = destinationData.description[language];
  const attractions = destinationData.attractions[language];
  const hotels = destinationData.hotels[language];

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[400px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${destinationData.imageUrl})`,
              filter: "brightness(0.7)"
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h1 className={`text-5xl font-bold text-white ${isRTL ? 'arabic' : ''}`}>{displayName}</h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-10">
          {/* Description */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-amr-green mb-4 ${isRTL ? 'arabic' : ''}`}>
              {isRTL ? 'عن ' + destinationData.arabicName : 'About ' + destinationData.name}
            </h2>
            <p className={`text-lg ${isRTL ? 'arabic text-right' : ''}`}>
              {description}
            </p>
          </section>
          
          {/* Attractions */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-amr-green mb-4 ${isRTL ? 'arabic' : ''}`}>
              {isRTL ? 'أماكن مميزة للزيارة' : 'Notable Places to Visit'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {attractions.map((attraction, index) => (
                <div key={index} className="p-4 bg-amr-beige/30 rounded-lg">
                  <h3 className={`text-lg font-semibold text-amr-green ${isRTL ? 'arabic' : ''}`}>
                    {attraction}
                  </h3>
                </div>
              ))}
            </div>
          </section>
          
          {/* Hotels */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-amr-green mb-4 ${isRTL ? 'arabic' : ''}`}>
              {isRTL ? 'فنادق شعبية' : 'Popular Hotels'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotels.map((hotel, index) => (
                <div key={index} className="border border-amr-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className={`text-lg font-bold ${isRTL ? 'arabic' : ''}`}>
                        {hotel.name}
                      </h3>
                      <div className="flex">
                        {[...Array(hotel.stars)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={`text-gray-600 mt-2 ${isRTL ? 'arabic text-right' : ''}`}>
                      {hotel.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold text-amr-green">{hotel.price}</span>
                      <button className={`bg-amr-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 ${isRTL ? 'arabic' : ''}`}>
                        {isRTL ? 'احجز الآن' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationPage;
