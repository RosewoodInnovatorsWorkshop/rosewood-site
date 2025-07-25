import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Programs', id: 'programs' },
    { name: 'Student Projects', id: 'projects' },
    { name: 'Awards', id: 'awards' },
    { name: 'Join Us', id: 'join' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-slate-900/20' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/rosewood-logo.png" 
              alt="Rosewood Innovators Workshop" 
              className="h-12 w-12 mr-3 object-contain"
            />
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-cyan-400' : 'text-white'
              }`}>
                Rosewood Innovators
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-cyan-300' : 'text-white/80'
              }`}>
                Workshop
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  currentPage === item.id
                    ? isScrolled 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                      ? 'text-slate-300 hover:text-cyan-400'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-6 flex flex-col justify-center items-center ${
              isScrolled ? 'text-cyan-400' : 'text-white'
            }`}>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="bg-slate-800 rounded-2xl shadow-lg shadow-slate-900/50 p-6 border border-slate-700">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-900/50 text-cyan-400 border border-cyan-400/30'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

