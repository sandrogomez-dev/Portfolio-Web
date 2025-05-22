import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section py-5 bg-light">
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
                <span className="text-gradient">Skills & Tecnologías</span>
              </h2>
              <p className="text-center text-muted mb-5">
                Herramientas y tecnologías que domino
              </p>
              
              <div className="text-center">
                <div className="p-5 border border-dashed rounded-3">
                  <h4 className="text-muted">🛠️ Skills Matrix</h4>
                  <p className="text-muted">
                    Próximamente: Radar chart interactivo y skills matrix
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

export default Skills; 