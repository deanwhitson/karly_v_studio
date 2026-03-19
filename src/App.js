import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import TwoColumnIntro from './components/TwoColumnIntro';
import ContentBlocks from './components/ContentBlocks';
import VisualWork from './components/VisualWork';
import About from './components/About';
import Work from './components/Work';
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
        <TwoColumnIntro />
        <ContentBlocks />
        <VisualWork />
        <About />
        <Work />
        <Contact />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
