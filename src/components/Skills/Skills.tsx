import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const technologies = [
    {
      id: 'html',
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      color: '#E34F26',
      level: 95,
      category: 'Frontend'
    },
    {
      id: 'css',
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      color: '#1572B6',
      level: 92,
      category: 'Frontend'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
      level: 90,
      category: 'Programming'
    },
    {
      id: 'react',
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      color: '#61DAFB',
      level: 88,
      category: 'Framework'
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      color: '#7952B3',
      level: 85,
      category: 'Framework'
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      color: '#3776AB',
      level: 82,
      category: 'Programming'
    }
  ];

  return (
    <section id="skills" className="section py-5 glass-section">
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
                  <span className="text-gradient">Skills & Tecnologías</span>
                </h2>
                <p className="text-center text-secondary-contrast mb-0">
                  Herramientas y tecnologías que domino
                </p>
              </div>
              
              {/* Technologies Grid */}
              <Row className="justify-content-center">
                {technologies.map((tech, index) => (
                  <Col key={tech.id} md={4} lg={2} className="mb-4">
                    <motion.div
                      className="tech-card-3d"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="tech-card-inner">
                        <div className="tech-card-front">
                          <div className="tech-icon-container">
                            <img 
                              src={tech.icon} 
                              alt={tech.name}
                              className="tech-icon"
                              style={{ filter: `drop-shadow(0 0 10px ${tech.color}40)` }}
                            />
                          </div>
                          <h5 className="tech-name">{tech.name}</h5>
                          <div className="tech-category">{tech.category}</div>
                        </div>
                        
                        <div className="tech-card-back">
                          <div className="skill-level-container">
                            <div className="skill-percentage">{tech.level}%</div>
                            <div className="skill-progress">
                              <motion.div 
                                className="skill-progress-fill"
                                style={{ backgroundColor: tech.color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tech.level}%` }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                viewport={{ once: true }}
                              />
                            </div>
                            <div className="skill-label">Nivel de Dominio</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              {/* Additional Skills Info */}
              <motion.div
                className="mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Row>
                  <Col md={4}>
                    <div className="skill-info-card">
                      <div className="skill-info-icon">🚀</div>
                      <h5>Frontend</h5>
                      <p>Interfaces modernas y responsivas con las últimas tecnologías</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="skill-info-card">
                      <div className="skill-info-icon">⚙️</div>
                      <h5>Backend</h5>
                      <p>APIs robustas y escalables con arquitecturas modernas</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="skill-info-card">
                      <div className="skill-info-icon">🎨</div>
                      <h5>Design</h5>
                      <p>Experiencias de usuario intuitivas y visualmente atractivas</p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
      <div className="section-separator-bottom"></div>
      
      <style>{`
        .glass-section {
          background: var(--color-surface);
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(var(--color-primary-rgb, 0, 243, 255), 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(var(--color-accent-rgb, 168, 85, 247), 0.04) 0%, transparent 50%);
          position: relative;
        }
        
        .section-separator-top,
        .section-separator-bottom {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--color-primary-rgb, 0, 243, 255), 0.3), transparent);
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

        /* 3D Tech Cards */
        .tech-card-3d {
          perspective: 1000px;
          height: 200px;
          cursor: pointer;
        }

        .tech-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
          transform-style: preserve-3d;
          animation: float 6s ease-in-out infinite;
        }

        .tech-card-3d:hover .tech-card-inner {
          transform: rotateY(180deg);
        }

        .tech-card-front,
        .tech-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        [data-bs-theme="dark"] .tech-card-front,
        [data-bs-theme="dark"] .tech-card-back,
        .dark-theme .tech-card-front,
        .dark-theme .tech-card-back {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .tech-card-back {
          transform: rotateY(180deg);
          background: rgba(var(--color-primary-rgb, 0, 243, 255), 0.1);
          border: 1px solid rgba(var(--color-primary-rgb, 0, 243, 255), 0.3);
        }

        [data-bs-theme="dark"] .tech-card-back,
        .dark-theme .tech-card-back {
          background: rgba(var(--color-primary-rgb, 0, 243, 255), 0.2);
        }

        .tech-icon-container {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .tech-icon {
          width: 50px;
          height: 50px;
          transition: transform 0.3s ease;
        }

        .tech-card-3d:hover .tech-icon {
          transform: scale(1.1);
        }

        .tech-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }

        .tech-category {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          opacity: 0.8;
        }

        /* Skill Level (Back of card) */
        .skill-level-container {
          text-align: center;
          width: 100%;
        }

        .skill-percentage {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(var(--color-primary-rgb, 0, 243, 255), 0.5);
        }

        .skill-progress {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .skill-progress-fill {
          height: 100%;
          border-radius: 3px;
          box-shadow: 0 0 10px currentColor;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-label {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          opacity: 0.9;
        }

        /* Floating Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          25% { transform: translateY(-5px) rotateY(2deg); }
          50% { transform: translateY(0px) rotateY(0deg); }
          75% { transform: translateY(-3px) rotateY(-2deg); }
        }

        .tech-card-3d:nth-child(2n) .tech-card-inner {
          animation-delay: -2s;
        }

        .tech-card-3d:nth-child(3n) .tech-card-inner {
          animation-delay: -4s;
        }

        /* Skills Info Cards */
        .skill-info-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        [data-bs-theme="dark"] .skill-info-card,
        .dark-theme .skill-info-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 243, 255, 0.15);
          border-color: rgba(var(--color-primary-rgb, 0, 243, 255), 0.4);
        }

        .skill-info-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .skill-info-card h5 {
          color: var(--color-text);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .skill-info-card p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .section-header-glass {
            padding: 2rem 1.5rem;
          }
          
          .section-separator-top,
          .section-separator-bottom {
            margin: 0 1rem;
          }

          .tech-card-3d {
            height: 180px;
          }

          .tech-card-front,
          .tech-card-back {
            padding: 1rem;
          }

          .tech-icon-container {
            width: 60px;
            height: 60px;
          }

          .tech-icon {
            width: 35px;
            height: 35px;
          }

          .skill-percentage {
            font-size: 2rem;
          }

          .skill-info-card {
            padding: 1.5rem 1rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills; 