import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import ContentBlocks from './components/ContentBlocks';
import About from './components/AboutNew';
import Contact from './components/Contact';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import Essays from './components/Essays';
import Notes from './components/Notes';
import Music from './components/Music';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <EditorialIntro />
      <ContentBlocks />
      <About />
      <Contact />
      <ClosingSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-off-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
