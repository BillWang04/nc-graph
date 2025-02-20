import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import Methods from './components/sections/Methods';
import Results from './components/sections/Results';
import Team from './components/sections/Team';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-deep to-dark text-light">
      <Header />
       <main>
         <Hero />
         <Overview />
         <Methods />
         <Results />
         <Team />
      </main>
      <Footer />

    </div>
  );
}

export default App;


