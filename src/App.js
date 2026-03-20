import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import ContentBlocks from './components/ContentBlocks';
import About from './components/About';
import Contact from './components/Contact';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <Hero />
        <EditorialIntro />
        <ContentBlocks />
        <About />
        <Contact />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
