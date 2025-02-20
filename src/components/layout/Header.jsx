import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
      scrolled ? 'bg-dark-deep bg-opacity-90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          <span className="text-xl font-bold">NC-Graphs</span>
        </div>
        
        <Navigation />
        
        <a 
          href="https://github.com/spiegel21/graph_transformer_collapse" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary hidden md:block"
        >
          GitHub Repo
        </a>
      </div>
    </header>
  );
};

export default Header;