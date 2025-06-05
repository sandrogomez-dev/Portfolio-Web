import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-footer text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {currentYear} SandroDevX. Hecho con <FiHeart className="text-danger" /> usando React & TypeScript
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-links">
              <a href="https://github.com/sandrogomez-dev" target="_blank" rel="noopener noreferrer" className="text-light me-3 social-link">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sandro-gomez-21355b346/" target="_blank" rel="noopener noreferrer" className="text-light me-3 social-link">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:sandrodevx@gmail.com" className="text-light social-link">
                <FiMail size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      
      <style>{`
        .gradient-footer {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .gradient-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          pointer-events: none;
        }
        
        .gradient-footer .container {
          position: relative;
          z-index: 1;
        }
        
        .gradient-footer p,
        .gradient-footer .social-link {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          color: white !important;
        }
        
        .social-link {
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </footer>
  );
};

export default Footer; 