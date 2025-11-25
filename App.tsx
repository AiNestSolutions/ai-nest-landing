
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
