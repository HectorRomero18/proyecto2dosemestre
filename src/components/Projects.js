// Importamos dependencias
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Tecnology.jfif";
import projImg2 from "../assets/img/musica.jfif";
import projImg3 from "../assets/img/sports.jfif";
import projImg4 from "../assets/img/ciencia.jfif";
import projImg5 from "../assets/img/Cine.jfif";
import projImg6 from "../assets/img/otro.jfif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Componente
export const Projects = () => {

  // Establecemos un arreglo que conntenndra la información que mostraremos en las cartas
  const projects = [
    {
      title: "Tecnologias",
      description: "Noticias nuevas",
      imgUrl: projImg1,
    },
    {
      title: "Música",
      description: "Nuevos Lanzamientos",
      imgUrl: projImg2,
    },
    {
      title: "Deportes",
      description: "Competiciones",
      imgUrl: projImg3,
    },
    {
      title: "Ciencia",
      description: "Avances",
      imgUrl: projImg4,
    },
    {
      title: "Cine",
      description: "Nuevos Lanzamientos",
      imgUrl: projImg5,
    },
    {
      title: "Otros",
      description: "Descubre",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Páginas/Blog</h2>
                <p>Descubre nuevas noticias y mantente actualizado!!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* Aqui ira la barra de seleccion */}
                    <Nav.Item>
                      <Nav.Link eventKey="first">Primero</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Segundo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tercero</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* Aplicamos cambios de diseño usando el map */}
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
