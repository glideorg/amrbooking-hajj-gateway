
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { format, parse } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchParams {
  destination: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  rooms: number;
}

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { t, language } = useLanguage();
  const [params, setParams] = useState<SearchParams>({
    destination: '',
    checkIn: null,
    checkOut: null,
    guests: 0,
    rooms: 0
  });
  
  useEffect(() => {
    // Parse URL parameters
    const destination = searchParams.get('destination') || '';
    const checkInString = searchParams.get('checkIn');
    const checkOutString = searchParams.get('checkOut');
    const guests = parseInt(searchParams.get('guests') || '0');
    const rooms = parseInt(searchParams.get('rooms') || '0');
    
    let checkIn = null;
    let checkOut = null;
    
    if (checkInString) {
      try {
        checkIn = parse(checkInString, 'yyyy-MM-dd', new Date());
      } catch (error) {
        console.error('Error parsing check-in date:', error);
      }
    }
    
    if (checkOutString) {
      try {
        checkOut = parse(checkOutString, 'yyyy-MM-dd', new Date());
      } catch (error) {
        console.error('Error parsing check-out date:', error);
      }
    }
    
    setParams({
      destination,
      checkIn,
      checkOut,
      guests,
      rooms
    });
    
  }, [searchParams]);

  // Get user-friendly location name
  const getLocationName = (code: string) => {
    switch(code) {
      case 'makkah': return 'Makkah';
      case 'madinah': return 'Madinah';
      case 'riyadh': return 'Riyadh';
      case 'abha': return 'Abha';
      default: return code;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-amr-green py-16">
          <div className="container mx-auto px-4">
            <h1 className={`text-4xl font-bold text-amr-white ${language === 'ar' ? 'arabic text-right' : ''}`}>
              {t('searchResults')}
            </h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="bg-amr-white rounded-xl shadow-lg p-6 border border-amr-beige mb-8">
            <h2 className={`text-2xl font-semibold text-amr-green mb-4 ${language === 'ar' ? 'arabic text-right' : ''}`}>
              {t('searchParameters')}:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-medium">{t('destination')}:</p>
                <p className="text-lg">{getLocationName(params.destination)}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">{t('dates')}:</p>
                <p className="text-lg">
                  {params.checkIn && params.checkOut ? (
                    `${format(params.checkIn, 'MMM d, yyyy')} - ${format(params.checkOut, 'MMM d, yyyy')}`
                  ) : 'Not specified'}
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">{t('guests')}:</p>
                <p className="text-lg">{params.guests}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">{t('rooms')}:</p>
                <p className="text-lg">{params.rooms}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-xl text-gray-500">{t('noResultsFound')}</p>
            <p className="text-gray-400 mt-2">{t('tryDifferentSearch')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
