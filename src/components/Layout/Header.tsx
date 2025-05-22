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
        className={`custom-navbar ${scrolled ? 'glass-effect' : ''}`}
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
              className="theme-toggle me-2"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
              className="border-0"
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
                    className="nav-link-custom"
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
    </motion.header>
  );
};

export default Header; 