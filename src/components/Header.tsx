
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <header className="bg-amr-white border-b border-amr-gold">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0Z" fill="#006400"/>
                <path d="M32 15C32 11.686 29.314 9 26 9H14C10.686 9 8 11.686 8 15V25C8 28.314 10.686 31 14 31H26C29.314 31 32 28.314 32 25V15Z" fill="#FFD700" fillOpacity="0.8"/>
                <path d="M10 12L16 18M16 12L10 18" stroke="#006400" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 20H30M27 17V23" stroke="#006400" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 23C16 21.343 17.343 20 19 20H21C22.657 20 24 21.343 24 23V28H16V23Z" stroke="#006400" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <h1 className="text-amr-green font-bold text-xl tracking-tight">amr<span className="text-amr-gold">booking</span></h1>
              <p className="text-xs text-amr-green">
                {t('gatewayToIslamic')}
              </p>
            </div>
          </div>
        </Link>
        
        <nav className={`flex items-center space-x-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <Link to="/" className="text-amr-green hover:text-amr-gold transition-colors duration-200">
            <span className="block text-center">{t('homepage')}</span>
          </Link>
          <Link to="/search" className="text-amr-green hover:text-amr-gold transition-colors duration-200">
            <span className="block text-center">{t('hotelSearch')}</span>
          </Link>
          <Link to="/details" className="text-amr-green hover:text-amr-gold transition-colors duration-200">
            <span className="block text-center">{t('hotelDetails')}</span>
          </Link>
          <Link to="/confirmation" className="text-amr-green hover:text-amr-gold transition-colors duration-200">
            <span className="block text-center">{t('bookingConfirmation')}</span>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          <button className="bg-amr-green text-amr-white rounded-full px-4 py-1 text-sm hover:bg-opacity-90 transition-colors duration-200">
            <span className={language === 'ar' ? '' : 'arabic'}>{t('sunset')}: 15:44</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-amr-gold flex items-center justify-center text-amr-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
