import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiChevronDown, FiExternalLink, FiDownload } from 'react-icons/fi';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section min-vh-100 d-flex align-items-center position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-4">
                <span className="text-muted">Hola, soy</span>
                <br />
                <span className="text-gradient fw-bold">Sandro DevX</span>
              </h1>
              
              <div className="hero-subtitle mb-4">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'React Specialist',
                    2000,
                    'Node.js Expert',
                    2000,
                    'TypeScript Enthusiast',
                    2000,
                    'UI/UX Designer',
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  style={{ 
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                  repeat={Infinity}
                />
              </div>

              <motion.p 
                className="hero-description lead mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Desarrollador apasionado por crear experiencias digitales innovadoras. 
                Especializado en React, Node.js y tecnologías modernas con +5 años de experiencia 
                construyendo soluciones escalables y centradas en el usuario.
              </motion.p>

              <motion.div
                className="hero-actions d-flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToProjects}
                  className="btn-hero-primary"
                >
                  Ver Proyectos <FiExternalLink className="ms-2" />
                </Button>
                
                                <a                  href="/cv-sandro-devx.pdf"                  download                  className="btn btn-outline-primary btn-lg btn-hero-secondary text-decoration-none"                >                  Descargar CV <FiDownload className="ms-2" />                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="hero-stats mt-5 d-flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="stat-item">
                  <div className="stat-number text-primary fw-bold">50+</div>
                  <div className="stat-label text-muted">Proyectos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number text-primary fw-bold">5+</div>
                  <div className="stat-label text-muted">Años Exp.</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number text-primary fw-bold">20+</div>
                  <div className="stat-label text-muted">Clientes</div>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={4} className="text-center">
            <motion.div
              className="hero-avatar"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="avatar-container">
                <img
                  src="/avatar-placeholder.jpg"
                  alt="Sandro DevX"
                  className="hero-avatar-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300/00f3ff/ffffff?text=SandroDevX';
                  }}
                />
                <div className="avatar-glow"></div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button
            variant="link"
            onClick={scrollToProjects}
            className="scroll-btn text-decoration-none"
            aria-label="Scroll to projects"
          >
            <FiChevronDown size={30} className="animate-bounce" />
          </Button>
        </motion.div>
      </Container>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, rgba(0, 243, 255, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
        }

        .hero-subtitle h2 {
          min-height: 3rem;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          max-width: 600px;
        }

        .btn-hero-primary,
        .btn-hero-secondary {
          padding: 0.75rem 2rem;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .btn-hero-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 243, 255, 0.3);
        }

        .btn-hero-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 243, 255, 0.2);
        }

        .hero-stats {
          border-top: 1px solid var(--color-border);
          padding-top: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-family: var(--font-mono);
        }

        .stat-label {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .avatar-container {
          position: relative;
          display: inline-block;
        }

        .hero-avatar-img {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--color-primary);
          position: relative;
          z-index: 2;
        }

        .avatar-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(20px);
          animation: pulse 2s infinite;
        }

        .scroll-indicator {
          margin-bottom: 2rem;
        }

        .scroll-btn {
          color: var(--color-primary) !important;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
          90% {
            transform: translateY(-2px);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle h2 {
            font-size: 2rem !important;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-avatar-img {
            width: 250px;
            height: 250px;
          }

          .hero-stats {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 