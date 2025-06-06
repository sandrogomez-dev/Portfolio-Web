import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Badge, Button, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFileText, FiCalendar, FiUsers, FiTrendingUp, FiX } from 'react-icons/fi';

import { projects, projectCategories } from '@/data/projects';
import { Project } from '@/types';
import { trackEvent } from '@/utils/analytics';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    trackEvent('project_filter', 'projects', filter);
  }, []);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
    trackEvent('project_view', 'projects', project.title);
  }, []);

  const handleLinkClick = useCallback((url: string, type: string, projectTitle: string) => {
    trackEvent(`project_${type}`, 'projects', projectTitle);
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section id="projects" className="section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <Row>
            <Col>
              <h2 className="section-title text-center mb-2">
                <span className="text-gradient">Proyectos Destacados</span>
              </h2>
              <p className="text-center text-secondary-contrast mb-5 lead">
                Algunos de mis trabajos más recientes y destacados
              </p>
            </Col>
          </Row>

          {/* Filter Buttons */}
          <Row className="mb-5">
            <Col>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {projectCategories.map(category => (
                  <motion.button
                    key={category.id}
                    className={`btn filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => handleFilterChange(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.label} 
                    <Badge bg="secondary" className="ms-2">{category.count}</Badge>
                  </motion.button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Projects Grid */}
          <Row>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <Col key={project.id} lg={6} xl={4} className="mb-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="project-card h-100"
                    onClick={() => handleProjectClick(project)}
                    whileHover={{ y: -10 }}
                  >
                    <div className="card-3d">
                      {/* Project Image */}
                      <div className="project-image-container">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                          loading="lazy"
                        />
                        <div className="project-overlay">
                          <div className="project-status-badge">
                            <Badge 
                              bg={project.status === 'completed' ? 'success' : 
                                  project.status === 'in-progress' ? 'warning' : 'info'}
                            >
                              {project.status === 'completed' ? 'Completado' :
                               project.status === 'in-progress' ? 'En Desarrollo' : 'Planeado'}
                            </Badge>
                          </div>
                          {project.featured && (
                            <div className="featured-badge">
                              <Badge bg="primary" className="glow">✨ Destacado</Badge>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="project-content p-3">
                        <h5 className="project-title mb-2">{project.title}</h5>
                        <p className="project-description text-secondary-contrast mb-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="tech-stack mb-3">
                          {project.techStack.slice(0, 3).map(tech => (
                            <span
                              key={tech.id}
                              className="tech-tag"
                              style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                            >
                              <span className="tech-icon">{tech.icon}</span>
                              {tech.name}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="tech-tag more">
                              +{project.techStack.length - 3} más
                            </span>
                          )}
                        </div>

                        {/* Metrics */}
                        {project.metrics && (
                          <div className="project-metrics mb-3">
                            {project.metrics.users && (
                              <div className="metric">
                                <FiUsers size={14} />
                                <span>{project.metrics.users.toLocaleString()} usuarios</span>
                              </div>
                            )}
                            {project.metrics.performance && (
                              <div className="metric">
                                <FiTrendingUp size={14} />
                                <span>{project.metrics.performance}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Action Links */}
                        <div className="project-links">
                          {project.links.map(link => (
                            <button
                              key={link.type}
                              className="btn btn-sm btn-outline-primary me-2"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLinkClick(link.url, link.type, project.title);
                              }}
                            >
                              {link.type === 'demo' && <FiExternalLink size={14} />}
                              {link.type === 'repo' && <FiGithub size={14} />}
                              {link.type === 'case-study' && <FiFileText size={14} />}
                              <span className="ms-1">{link.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        size="xl"
        centered
        className="project-modal"
      >
        <Modal.Header className="border-0 position-relative p-0">
          <Button
            variant="link"
            className="btn-close-custom position-absolute"
            onClick={() => setShowModal(false)}
            aria-label="Cerrar modal"
          >
            <FiX size={20} />
          </Button>
        </Modal.Header>
        
        {selectedProject && (
          <Modal.Body className="p-0">
            <div className="project-modal-content">
              {/* Hero Image */}
              <div className="modal-hero-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-100"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>

              <div className="p-4">
                {/* Project Header */}
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <h3 className="text-gradient mb-2">{selectedProject.title}</h3>
                    <div className="d-flex align-items-center gap-3 text-muted">
                      <span>
                        <FiCalendar size={16} className="me-1" />
                        {new Date(selectedProject.createdAt).toLocaleDateString('es-ES')}
                      </span>
                      <Badge bg={selectedProject.status === 'completed' ? 'success' : 'warning'}>
                        {selectedProject.status === 'completed' ? 'Completado' : 'En Desarrollo'}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Long Description */}
                <p className="lead mb-4">{selectedProject.longDescription}</p>

                {/* Tech Stack Full */}
                <div className="mb-4">
                  <h5>Stack Tecnológico</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span
                        key={tech.id}
                        className="tech-tag-large"
                        style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                      >
                        <span className="tech-icon">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {selectedProject.metrics && (
                  <div className="mb-4">
                    <h5>Métricas del Proyecto</h5>
                    <Row>
                      {selectedProject.metrics.users && (
                        <Col md={4}>
                          <div className="metric-card">
                            <FiUsers size={24} className="text-primary mb-2" />
                            <div className="metric-value">{selectedProject.metrics.users.toLocaleString()}</div>
                            <div className="metric-label">Usuarios</div>
                          </div>
                        </Col>
                      )}
                      {selectedProject.metrics.performance && (
                        <Col md={4}>
                          <div className="metric-card">
                            <FiTrendingUp size={24} className="text-success mb-2" />
                            <div className="metric-value">{selectedProject.metrics.performance}</div>
                            <div className="metric-label">Performance Score</div>
                          </div>
                        </Col>
                      )}
                      {selectedProject.metrics.coverage && (
                        <Col md={4}>
                          <div className="metric-card">
                            <div className="metric-value">{selectedProject.metrics.coverage}%</div>
                            <div className="metric-label">Test Coverage</div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </div>
                )}

                {/* Challenges & Solutions */}
                <Row className="mb-4">
                  <Col md={6}>
                    <h5>Desafíos</h5>
                    <ul className="challenges-list">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h5>Soluciones</h5>
                    <ul className="solutions-list">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>

                {/* Action Buttons */}
                <div className="modal-actions">
                  {selectedProject.links.map(link => (
                    <Button
                      key={link.type}
                      variant={link.type === 'demo' ? 'primary' : 'outline-primary'}
                      className="me-2 mb-2"
                      onClick={() => handleLinkClick(link.url, link.type, selectedProject.title)}
                    >
                      {link.type === 'demo' && <FiExternalLink className="me-2" />}
                      {link.type === 'repo' && <FiGithub className="me-2" />}
                      {link.type === 'case-study' && <FiFileText className="me-2" />}
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
        )}
      </Modal>

      <style>{`
        .filter-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(0, 243, 255, 0.3);
          color: var(--color-text);
          border-radius: 25px;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          box-shadow: 0 5px 15px rgba(0, 243, 255, 0.3);
        }

        .project-card {
          cursor: pointer;
          height: 100%;
        }

        .card-3d {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .card-3d:hover {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 20px 40px rgba(0, 243, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 243, 255, 0.4);
          transform: translateY(-5px);
        }

        /* Dark theme adjustments */
        [data-bs-theme="dark"] .card-3d,
        .dark-theme .card-3d {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        [data-bs-theme="dark"] .card-3d:hover,
        .dark-theme .card-3d:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 243, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(0, 243, 255, 0.3);
        }

        .project-image-container {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .card-3d:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(0, 243, 255, 0.1),
            rgba(168, 85, 247, 0.1)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem;
        }

        .card-3d:hover .project-overlay {
          opacity: 1;
        }

        .project-status-badge,
        .featured-badge {
          backdrop-filter: blur(10px);
        }

        .featured-badge .badge.glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 5px rgba(0, 243, 255, 0.5);
          }
          to {
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.8), 0 0 30px rgba(0, 243, 255, 0.6);
          }
        }

        .project-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          color: var(--color-primary);
          font-weight: 600;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag,
        .tech-tag-large {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid currentColor;
        }

        .tech-tag-large {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .tech-tag.more {
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-text-secondary);
        }

        .tech-icon {
          font-size: 1rem;
        }

        .project-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .project-links {
          margin-top: auto;
        }

        .project-modal .modal-content {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
        }

        [data-bs-theme="dark"] .project-modal .modal-content {
          background: rgba(30, 30, 30, 0.95);
        }

        .btn-close-custom {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(10px);
          top: 15px;
          right: 15px;
          z-index: 1050;
          transition: all 0.3s ease;
          font-size: 1.2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .btn-close-custom:hover {
          background: rgba(220, 38, 38, 0.9);
          border-color: rgba(220, 38, 38, 0.8);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
        }

        .btn-close-custom:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.5);
        }

        [data-bs-theme="dark"] .btn-close-custom {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
        }

        [data-bs-theme="dark"] .btn-close-custom:hover {
          background: rgba(220, 38, 38, 0.9);
          border-color: rgba(220, 38, 38, 0.8);
          color: white;
        }

        .metric-card {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--color-primary);
        }

        .metric-label {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
        }

        .challenges-list,
        .solutions-list {
          padding-left: 1rem;
        }

        .challenges-list li {
          color: var(--color-danger);
          margin-bottom: 0.5rem;
        }

        .solutions-list li {
          color: var(--color-success);
          margin-bottom: 0.5rem;
        }

        .modal-actions {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .filter-btn {
            font-size: 0.875rem;
            padding: 0.4rem 0.8rem;
          }
          
          .project-metrics {
            flex-direction: column;
            gap: 0.5rem;
          }

          .btn-close-custom {
            width: 48px;
            height: 48px;
            top: 10px;
            right: 10px;
            font-size: 1.3rem;
          }

          .project-modal .modal-dialog {
            margin: 0.5rem;
          }

          .modal-hero-image {
            height: 250px;
          }

          .modal-hero-image img {
            height: 250px !important;
          }
        }

        @media (max-width: 576px) {
          .btn-close-custom {
            width: 50px;
            height: 50px;
            top: 8px;
            right: 8px;
            font-size: 1.4rem;
          }

          .project-modal-content .p-4 {
            padding: 1.5rem !important;
          }

          .tech-tag-large {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects; 