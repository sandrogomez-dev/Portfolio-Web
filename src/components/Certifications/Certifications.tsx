import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section py-5 bg-light">
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
                <span className="text-gradient">Certificaciones</span>
              </h2>
              <p className="text-center text-muted mb-5">
                Cursos y certificaciones completadas
              </p>
              
              <div className="text-center">
                <div className="p-5 border border-dashed rounded-3">
                  <h4 className="text-muted">🎓 Carrusel 3D</h4>
                  <p className="text-muted">
                    Próximamente: Carrusel de certificaciones verificadas
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Certifications; 