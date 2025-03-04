import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos yo soy  <span className="purple">Javier Pelaez </span>
            de <span className="purple"> Valencia, España.</span>
            <br />
            Actualmente trabajando en una empresa de soporte <strong className="purple">IT</strong>
            <br />
            Dando soprte a empresas y desarrollador web en mis ratos libres.
            <br />
            <br />
            No todo es programar! también tengo otras aficiones.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Crossfit.
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La vida con buen humor es mejor vida"{" "}
          </p>
          <footer className="blockquote-footer">Javier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
