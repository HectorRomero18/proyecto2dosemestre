// Importamos dependencias
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import NombreLogo from "../assets/img/NOTA-MENTE-removebg-preview.png";

// Componente
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          {/* Tamaño de la imagen */}
          <Col size={20} sm={6}>
            <img src={NombreLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          {/* Iconos de nuestras redes sociales */}
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Blog hecho por estudiantes de UNEMI</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
