import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import ContentBlocks from './components/ContentBlocks';
import About from './components/About';
import Contact from './components/Contact';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import Essays from './components/Essays';
import Notes from './components/Notes';
import Music from './components/Music';

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
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
