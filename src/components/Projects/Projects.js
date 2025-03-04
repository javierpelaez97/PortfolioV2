import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carro from "../../Assets/Projects/Carro-de-la-compra.png";
import ToDo from "../../Assets/Projects/ToDo-List.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis últimos <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí te dejo algunos de mis últimos proyectos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carro}
              isBlog={false}
              title="Carro de la compra"
              description="Web creada con React para la gestíon de un carro de la compra"
              ghLink="https://github.com/javierpelaez97/Carro-de-la-compra"
              demoLink="https://carro-de-la-compra.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="ToDO-List"
              description="Mi primer proyecto React y Boostrap donde aprendí el manejo de props e implementar boostrap  "
              ghLink="https://github.com/javierpelaez97/ToDo-List"
              demoLink="https://todolistjjpg.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
