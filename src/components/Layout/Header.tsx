import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import type { NavItem } from '@/types';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  const navItems: NavItem[] = [
    { id: 'hero', label: 'Inicio', href: '#hero' },
    { id: 'projects', label: 'Proyectos', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experiencia', href: '#experience' },
    { id: 'contact', label: 'Contacto', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setExpanded(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <Navbar 
        expand="lg" 
        expanded={expanded}
        className={`custom-navbar ${scrolled ? 'glass-navbar' : 'transparent-navbar'}`}
        variant={isDark ? 'dark' : 'light'}
      >
        <Container>
          <Navbar.Brand 
            href="#hero" 
            className="brand-logo text-gradient fw-bold"
            onClick={() => handleNavClick('#hero')}
          >
            &lt;SandroDevX /&gt;
          </Navbar.Brand>

          <div className="d-flex align-items-center order-lg-3">
            {/* Theme Toggle */}
            <Button
              variant="outline-primary"
              size="sm"
              className="theme-toggle glass-button me-2"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
              className="border-0 glass-button"
            >
              {expanded ? <FiX /> : <FiMenu />}
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="order-lg-2">
            <Nav className="ms-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Nav.Link
                    href={item.href}
                    className="nav-link-glass"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <style>{`
        .custom-navbar {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1rem 0;
        }
        
        .transparent-navbar {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-navbar {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        [data-bs-theme="dark"] .glass-navbar,
        .dark-theme .glass-navbar {
          background: rgba(0, 0, 0, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        [data-bs-theme="dark"] .transparent-navbar,
        .dark-theme .transparent-navbar {
          background: rgba(0, 0, 0, 0.1);
        }
        
        .glass-button {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: var(--color-primary);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(0, 243, 255, 0.2);
        }
        
        [data-bs-theme="dark"] .glass-button,
        .dark-theme .glass-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        [data-bs-theme="dark"] .glass-button:hover,
        .dark-theme .glass-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .nav-link-glass {
          color: var(--color-text) !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          margin: 0 0.25rem;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link-glass:hover {
          color: var(--color-primary) !important;
          background: rgba(var(--color-primary-rgb, 0, 243, 255), 0.1);
          backdrop-filter: blur(10px);
          transform: translateY(-1px);
        }
        
        .nav-link-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          opacity: 0;
          border-radius: 10px;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .nav-link-glass:hover::before {
          opacity: 0.1;
        }
        
        .brand-logo {
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .brand-logo:hover {
          transform: scale(1.05);
        }
      `}</style>
    </motion.header>
  );
};

export default Header; 