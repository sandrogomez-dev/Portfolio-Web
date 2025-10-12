import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiChevronDown, FiExternalLink, FiDownload } from 'react-icons/fi';
import { trackCVDownload } from '@/utils/analytics';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCVDownload = () => {
    trackCVDownload();
  };

  return (
    <section id="hero" className="hero-section min-vh-100 d-flex align-items-center position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <motion.div
              className="hero-content-glass"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-4">
                <span className="hero-greeting">Hola soy</span>
                <br />
                <span className="text-gradient fw-bold">Sandro<span className="typing-cursor">|</span></span>
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
                className="hero-description lead mb-5 text-secondary-contrast"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Desarrollador apasionado por crear experiencias digitales innovadoras. 
                Especializado en React, Node.js y tecnologías modernas con +1 año de experiencia 
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
                  className="btn-hero-glass"
                >
                  Ver Proyectos <FiExternalLink className="ms-2" />
                </Button>
                
                <a                  
                  href="/CV_Sandro.pdf"                  
                  download="CV_Sandro_Gomez.pdf"
                  onClick={handleCVDownload}
                  className="btn btn-outline-primary btn-lg btn-hero-glass-outline text-decoration-none"                
                >                  
                  Descargar CV <FiDownload className="ms-2" />                
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="hero-stats-glass mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="stats-container">
                  <div className="stat-item-glass stat-pulse-1">
                    <div className="stat-number stat-number-primary fw-bold">50+</div>
                    <div className="stat-label text-secondary-contrast">Proyectos</div>
                  </div>
                  <div className="stat-item-glass stat-pulse-2">
                    <div className="stat-number stat-number-primary fw-bold">+1</div>
                    <div className="stat-label text-secondary-contrast">Año Exp.</div>
                  </div>
                  <div className="stat-item-glass stat-pulse-3">
                    <div className="stat-number stat-number-primary fw-bold">5</div>
                    <div className="stat-label text-secondary-contrast">Clientes</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={4} className="text-center">
            <motion.div
              className="hero-avatar-glass"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="avatar-container-glass">
                <img
                  src="/perfil-sandro.jpg"
                  alt="Sandro Gomez"
                  className="hero-avatar-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300/00f3ff/ffffff?text=Sandro';
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
            className="scroll-btn-glass text-decoration-none"
            aria-label="Scroll to projects"
          >
            <FiChevronDown size={30} className="animate-bounce" />
          </Button>
        </motion.div>
      </Container>

      <style>{`
        .hero-section {
          background: 
            radial-gradient(circle at 25% 25%, rgba(139, 115, 85, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(166, 138, 100, 0.05) 0%, transparent 50%),
            var(--color-background);
          position: relative;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 60px;
        }

        .hero-content-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        
        [data-bs-theme="dark"] .hero-content-glass,
        .dark-theme .hero-content-glass {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-greeting {
          color: var(--color-text-secondary) !important;
        }

        .hero-subtitle h2 {
          min-height: 3rem;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin-bottom: 2rem;
        }

        .btn-hero-glass,
        .btn-hero-glass-outline {
          padding: 0.75rem 2rem;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-hero-glass {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          box-shadow: 0 4px 12px rgba(139, 115, 85, 0.25);
        }

        .btn-hero-glass:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139, 115, 85, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-hero-glass-outline {
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
        }

        .btn-hero-glass-outline:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139, 115, 85, 0.25);
        }

        .hero-stats-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 1rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-top: 2rem;
        }
        
        [data-bs-theme="dark"] .hero-stats-glass,
        .dark-theme .hero-stats-glass {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .stats-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: space-around;
        }

        .stat-item-glass {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
          flex: 1;
          min-width: 100px;
        }
        
        .stat-item-glass:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 115, 85, 0.15);
          border-color: rgba(139, 115, 85, 0.25);
        }
        
        [data-bs-theme="dark"] .stat-item-glass,
        .dark-theme .stat-item-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-number {
          font-size: 2rem;
          font-family: var(--font-mono);
        }
        
        .stat-number-primary {
          color: var(--color-primary) !important;
        }

        .stat-label {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-avatar-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          padding: 1rem;
          display: inline-block;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-top: 1rem;
        }
        
        [data-bs-theme="dark"] .hero-avatar-glass,
        .dark-theme .hero-avatar-glass {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .avatar-container-glass {
          position: relative;
          display: inline-block;
        }

        .hero-avatar-img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--color-primary);
          position: relative;
          z-index: 2;
          box-shadow: 0 8px 24px rgba(139, 115, 85, 0.2);
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

        .scroll-btn-glass {
          color: var(--color-primary) !important;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .scroll-btn-glass:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 115, 85, 0.15);
        }
        
        [data-bs-theme="dark"] .scroll-btn-glass,
        .dark-theme .scroll-btn-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
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

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .typing-cursor {
          animation: blink 1s infinite;
          font-weight: 300;
          margin-left: 4px;
        }

        @keyframes subtle-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 20px rgba(139, 115, 85, 0.15);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 12px 28px rgba(139, 115, 85, 0.25);
          }
        }

        .stat-pulse-1 {
          animation: subtle-pulse 3s ease-in-out infinite;
        }

        .stat-pulse-2 {
          animation: subtle-pulse 3s ease-in-out infinite 0.5s;
        }

        .stat-pulse-3 {
          animation: subtle-pulse 3s ease-in-out infinite 1s;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 80px;
            padding-bottom: 60px;
          }
          
          .hero-content-glass {
            padding: 1.25rem;
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 0.75rem;
          }

          .hero-subtitle h2 {
            font-size: 2rem !important;
          }

          .hero-description {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
          }

          .hero-avatar-img {
            width: 220px;
            height: 220px;
          }

          .stats-container {
            justify-content: center;
            gap: 1rem;
          }
          
          .stat-item-glass {
            min-width: 90px;
          }
          
          .hero-stats-glass {
            margin-top: 1.5rem;
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 