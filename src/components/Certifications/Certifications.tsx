import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section py-5 glass-section">
      <div className="section-separator-top"></div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Row>
            <Col>
              <div className="section-header-glass mb-5">
                <h2 className="section-title text-center">
                  <span className="text-gradient">Certificaciones</span>
                </h2>
                <p className="text-center text-secondary-contrast mb-0">
                  Cursos y certificaciones completadas
                </p>
              </div>
              
              <div className="text-center">
                <div className="content-card-glass">
                  <div className="icon-container-glass mb-4">
                    <span className="icon-large">🎓</span>
                  </div>
                  <h4 className="placeholder-title mb-3">Carrusel 3D</h4>
                  <p className="placeholder-text mb-4">
                    Próximamente: Carrusel de certificaciones verificadas con validación en tiempo real
                  </p>
                  <div className="cert-preview">
                    <div className="cert-item">Platzi</div>
                    <div className="cert-item">Coursera</div>
                    <div className="cert-item">Udemy</div>
                    <div className="cert-item">FreeCodeCamp</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
      <div className="section-separator-bottom"></div>
      
      <style>{`
        .glass-section {
          background: var(--color-surface);
          background-image: 
            radial-gradient(circle at 80% 20%, rgba(var(--color-accent-rgb, 168, 85, 247), 0.04) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(var(--color-primary-rgb, 0, 243, 255), 0.04) 0%, transparent 50%);
          position: relative;
        }
        
        .section-separator-top,
        .section-separator-bottom {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--color-accent-rgb, 168, 85, 247), 0.3), transparent);
          margin: 0 2rem;
        }
        
        .section-header-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        [data-bs-theme="dark"] .section-header-glass,
        .dark-theme .section-header-glass {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .content-card-glass {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 24px;
          padding: 3rem 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .content-card-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(var(--color-accent-rgb, 168, 85, 247), 0.05), rgba(var(--color-primary-rgb, 0, 243, 255), 0.05));
          pointer-events: none;
        }
        
        [data-bs-theme="dark"] .content-card-glass,
        .dark-theme .content-card-glass {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .content-card-glass:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(168, 85, 247, 0.15);
          border-color: rgba(var(--color-accent-rgb, 168, 85, 247), 0.4);
        }
        
        .icon-container-glass {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        [data-bs-theme="dark"] .icon-container-glass,
        .dark-theme .icon-container-glass {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .icon-large {
          font-size: 2rem;
        }
        
        .placeholder-title {
          color: var(--color-text);
          font-weight: 600;
          position: relative;
          z-index: 1;
        }
        
        .placeholder-text {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }
        
        .cert-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        
        .cert-item {
          background: rgba(var(--color-accent-rgb, 168, 85, 247), 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(var(--color-accent-rgb, 168, 85, 247), 0.3);
          color: var(--color-accent);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .cert-item:hover {
          background: rgba(var(--color-accent-rgb, 168, 85, 247), 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(var(--color-accent-rgb, 168, 85, 247), 0.3);
        }
        
        @media (max-width: 768px) {
          .section-header-glass,
          .content-card-glass {
            padding: 2rem 1.5rem;
          }
          
          .section-separator-top,
          .section-separator-bottom {
            margin: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications; 