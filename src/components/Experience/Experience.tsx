import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiExternalLink, FiChevronDown } from 'react-icons/fi';

interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects?: {
    name: string;
    url?: string;
  }[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'frontend-developer-2024',
    position: 'Desarrollador Frontend',
    company: 'Freelance/Proyectos Independientes',
    type: 'Freelance',
    period: 'Septiembre 2024 - Presente',
    location: 'Remoto',
    description: 'Desarrollo de aplicaciones web modernas con React y TypeScript, especializándome en e-commerce, gestión de proyectos y herramientas empresariales.',
    achievements: [
      'Desarrollé NexusShop, plataforma e-commerce premium con glassmorphism y 98/100 en Lighthouse',
      'Creé Analytics Dashboard Pro con visualización en tiempo real para 2,500+ usuarios',
      'Implementé TaskFlow, sistema de gestión de proyectos con Kanban y gráficos Gantt',
      'Optimización de performance: builds ultra-rápidos con Vite + SWC'
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'Zustand'],
    projects: [
      { name: 'NexusShop E-commerce', url: 'https://nexus-shop-two.vercel.app/' },
      { name: 'Analytics Dashboard Pro', url: 'https://analytics-dashboard-pro-cdc8-5hggm7bh2-sandro-gomezs-projects.vercel.app/' },
      { name: 'TaskFlow PM', url: 'https://task-flow-red-seven.vercel.app/dashboard' }
    ]
  },
  {
    id: 'fullstack-developer-2024',
    position: 'Desarrollador Full Stack',
    company: 'Proyectos Personales/Clientes',
    type: 'Independiente',
    period: 'Junio 2024 - Agosto 2024',
    location: 'Remoto',
    description: 'Desarrollo de aplicaciones full-stack con integración de IA, APIs avanzadas y arquitecturas escalables.',
    achievements: [
      'Construí AI Image Studio con integración OpenAI/Stability AI y 10,000+ imágenes',
      'Desarrollé sistema de búsqueda semántica con Redis Vector Search',
      'Implementé Travel Guide con validación robusta y UX optimizada',
      'Integración completa con servicios de Machine Learning y APIs externas'
    ],
    technologies: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    projects: [
      { name: 'AI Image Studio', url: 'https://ai-image-studio-frontend.vercel.app/' },
      { name: 'Travel Guide', url: 'https://travel-guide-kappa-nine.vercel.app/' }
    ]
  },
  {
    id: 'web-developer-2024',
    position: 'Desarrollador Web',
    company: 'Proyectos de Aprendizaje/Prácticas',
    type: 'Formación',
    period: 'Enero 2024 - Mayo 2024',
    location: 'Autodidacta',
    description: 'Inicio en desarrollo web moderno con focus en UX/UI, integración de APIs y arquitectura escalable.',
    achievements: [
      'Creé Generador de CV Profesional con IA integrada y Firebase Auth',
      'Implementé optimización ATS y análisis automático de currículums',
      'Desarrollé 5 plantillas profesionales con personalización en tiempo real',
      'Logré puntuación 96/100 en Lighthouse con exportación PDF de alta calidad'
    ],
    technologies: ['React', 'Firebase', 'OpenAI API', 'jsPDF', 'HTML2Canvas'],
    projects: [
      { name: 'Generador CV Pro', url: 'https://generador-curriculum.vercel.app/' }
    ]
  }
];

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const expandAll = () => {
    setExpandedItems(new Set(experiences.map(exp => exp.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <section id="experience" className="section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Row>
            <Col>
              <h2 className="section-title text-center">
                <span className="text-gradient">Experiencia</span>
              </h2>
              <p className="text-center text-secondary-contrast mb-4">
                Mi trayectoria en desarrollo web moderno
              </p>
              
              {/* Control buttons */}
              <div className="text-center mb-4">
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={expandAll}
                >
                  Expandir Todo
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={collapseAll}
                >
                  Colapsar Todo
                </button>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="timeline">
                {experiences.map((exp, index) => {
                  const isExpanded = expandedItems.has(exp.id);
                  
                  return (
                    <motion.div
                      key={exp.id}
                      className="timeline-item"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="timeline-content glass-card p-4">
                        {/* Header - Always visible */}
                        <div 
                          className="experience-header"
                          onClick={() => toggleExpanded(exp.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="flex-grow-1">
                              <h4 className="mb-1 text-gradient">{exp.position}</h4>
                              <h5 className="mb-2 text-primary">{exp.company}</h5>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <span className="badge badge-type">{exp.type}</span>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="expand-icon"
                              >
                                <FiChevronDown size={20} className="text-primary" />
                              </motion.div>
                            </div>
                          </div>

                          <div className="experience-meta mb-3">
                            <div className="d-flex align-items-center text-muted mb-1">
                              <FiCalendar size={14} className="me-2" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="d-flex align-items-center text-muted">
                              <FiMapPin size={14} className="me-2" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <p className="text-secondary-contrast mb-0">{exp.description}</p>
                        </div>

                        {/* Expandable content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ 
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1]
                              }}
                              className="experience-details"
                            >
                              <div className="pt-3 border-top mt-3">
                                <div className="achievements mb-3">
                                  <h6 className="mb-2 text-primary">🏆 Logros Destacados:</h6>
                                  <ul className="list-unstyled">
                                    {exp.achievements.map((achievement, idx) => (
                                      <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="mb-2 d-flex"
                                      >
                                        <span className="text-success me-2">▪</span>
                                        <span className="text-secondary-contrast">{achievement}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="technologies mb-3">
                                  <h6 className="mb-2 text-primary">💻 Tecnologías:</h6>
                                  <div className="d-flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                      <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="tech-badge"
                                      >
                                        {tech}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>

                                {exp.projects && (
                                  <div className="projects">
                                    <h6 className="mb-2 text-primary">🚀 Proyectos:</h6>
                                    <div className="d-flex flex-wrap gap-2">
                                      {exp.projects.map((project, idx) => (
                                        <motion.a
                                          key={project.name}
                                          href={project.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="project-link"
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: idx * 0.1 }}
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                        >
                                          <FiExternalLink size={12} className="me-1" />
                                          {project.name}
                                        </motion.a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience; 