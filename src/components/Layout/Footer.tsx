import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {currentYear} SandroDevX. Hecho con <FiHeart className="text-danger" /> usando React & TypeScript
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-links">
              <a href="https://github.com/sandrodevx" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/sandrodevx" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:contact@sandrodevx.dev" className="text-light">
                <FiMail size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 