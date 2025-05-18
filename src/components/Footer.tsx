
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amr-green text-amr-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="mr-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0Z" fill="#FFFFFF"/>
                  <path d="M32 15C32 11.686 29.314 9 26 9H14C10.686 9 8 11.686 8 15V25C8 28.314 10.686 31 14 31H26C29.314 31 32 28.314 32 25V15Z" fill="#FFD700" fillOpacity="0.8"/>
                  <path d="M10 12L16 18M16 12L10 18" stroke="#006400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M24 20H30M27 17V23" stroke="#006400" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 23C16 21.343 17.343 20 19 20H21C22.657 20 24 21.343 24 23V28H16V23Z" stroke="#006400" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h2 className="text-amr-white font-bold text-xl tracking-tight">amr<span className="text-amr-gold">booking</span></h2>
                <p className="text-xs">Your Gateway to Islamic Hospitality</p>
              </div>
            </div>
            <p className="mt-2 text-amr-beige max-w-md">
              Your trusted partner for Islamic and halal-friendly stays in Saudi Arabia and beyond.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-amr-gold/20 rounded-full px-3 py-1 flex items-center">
              <span className="text-amr-gold mr-1">Qibla:</span>
              <span className="text-amr-white">289°</span>
            </div>
            <div className="bg-amr-gold/20 rounded-full px-3 py-1 flex items-center">
              <span className="text-amr-gold mr-1">Next Prayer:</span>
              <span className="text-amr-white">20:11</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-b border-amr-white/20">
          <div>
            <h3 className="text-amr-gold font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amr-gold transition-colors">Our Story</Link></li>
              <li><Link to="/team" className="hover:text-amr-gold transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-amr-gold transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-amr-gold transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amr-gold font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hotels" className="hover:text-amr-gold transition-colors">Hotels</Link></li>
              <li><Link to="/apartments" className="hover:text-amr-gold transition-colors">Apartments</Link></li>
              <li><Link to="/umrah-packages" className="hover:text-amr-gold transition-colors">Umrah Packages</Link></li>
              <li><Link to="/hajj-packages" className="hover:text-amr-gold transition-colors">Hajj Packages</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amr-gold font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-amr-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-amr-gold transition-colors">FAQs</Link></li>
              <li><Link to="/help" className="hover:text-amr-gold transition-colors">Help Center</Link></li>
              <li><Link to="/covid" className="hover:text-amr-gold transition-colors">COVID-19 Info</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amr-gold font-semibold mb-4">Download Our App</h3>
            <div className="flex space-x-2 mb-4">
              <Link to="#" className="block bg-black rounded-lg p-2 transition-transform hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
              </Link>
              <Link to="#" className="block bg-black rounded-lg p-2 transition-transform hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
              </Link>
            </div>
            <h3 className="text-amr-gold font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-amr-white hover:text-amr-gold transition-colors">
                <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link to="#" className="text-amr-white hover:text-amr-gold transition-colors">
                <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              <Link to="#" className="text-amr-white hover:text-amr-gold transition-colors">
                <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} amrbooking. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <Link to="/terms" className="hover:text-amr-gold transition-colors mb-2 md:mb-0">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-amr-gold transition-colors mb-2 md:mb-0">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-amr-gold transition-colors mb-2 md:mb-0">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
