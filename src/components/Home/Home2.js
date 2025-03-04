import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple"> PRESENTO </span> AQUÍ
            </h1>
            <p className="home-about-body">
              Me encanta programar y trabajar en equipo... 🤷‍♂️
              <br />
              <br />Me siento mas comodo con estas tecnologias
              <i>
                <b className="purple"> React, Node, Mongodb, Express </b>
              </i>
              <br />
              <br />
              Mi interés principal es crear&nbsp;
              <i>
                Aplicaciones
                <b className="purple"> web </b> y
                a veces páginas {" "}
                <b className="purple"> web</b>
              </i>
              <br />
              <br />
              Siempre que puedo intento aprender cosas nuevas como <b className="purple">Java</b> y
              <i>
                <b className="purple">
                  {" "}
                  fameworks 
                </b>
              </i>
              &nbsp; para
              <i>
                <b className="purple"> JavaScript</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>¿Donde puedes encotrarme? </h1>
            <p>
               No dudes en <span className="purple">contactar </span> conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/javierpelaez97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jpelaezg/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
