import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CustomCursor from '@/components/UI/CustomCursor';

// Pages/Sections
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Certifications from '@/components/Certifications/Certifications';
import Contact from '@/components/Contact/Contact';

// Particle background
import ParticleBackground from '@/components/UI/ParticleBackground';

// Hooks and utils
import { useTheme } from '@/context/ThemeContext';
import { trackPageView } from '@/utils/analytics';

const App: React.FC = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    // Track initial page view
    trackPageView('/', 'Home');
  }, []);

  return (
    <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* Custom cursor for desktop */}
      <CustomCursor />
      
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Hero />
                  <Projects />
                  <Skills />
                  <Experience />
                  <Certifications />
                  <Contact />
                </motion.div>
              } 
            />
            
            {/* Individual section routes for direct access */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App; 