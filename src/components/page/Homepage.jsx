import React from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Hero from '../sections/Hero';
import Overview from '../sections/Overview';
import Methods from '../sections/Methods';
// import NC1 from '../visualization/NC1';
import Results from '../sections/Results';
import Team from '../sections/Team';

// Modified RevealSection that works in both scroll directions
const RevealSection = ({ children, threshold = 0.2 }) => {
    const [ref, inView] = useInView({
      threshold,
      triggerOnce: true, // Important: set to false to re-trigger on scrolling up
    });
  
    return (
      <div 
        ref={ref} 
        className={`transition-all duration-800 ease-in-out ${
          inView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        {children}
      </div>
    );
  };
  
  const HomePage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-deep to-dark text-light">
        <Header />
        <main>
          {/* Hero is typically always visible */}
          <Hero />
          
          <RevealSection>
            <Overview />
          </RevealSection>
          
          <RevealSection>
            <Methods />
          </RevealSection>
          
          <RevealSection>
            <Results />
          </RevealSection>
          
          <RevealSection>
            <Team />
          </RevealSection>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default HomePage;