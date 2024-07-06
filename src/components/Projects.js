// Projects.jsx

import React from "react";
import { useTranslation } from 'react-i18next';
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
import { Link } from "react-router-dom";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('technologies'),
      description: t('discoverNews'),
      imgUrl: projImg1,
      category: 'technology',
      link: '/tecnologias'
    },
    {
      title: t('music'),
      description: t('discoverNews'),
      imgUrl: projImg2,
      category: 'music',
      link: '/musica'
    },
    {
      title: t('sports'),
      description: t('discoverNews'),
      imgUrl: projImg3,
      category: 'sports',
      link: '/crear'
    },
    {
      title: t('science'),
      description: t('discoverNews'),
      imgUrl: projImg4,
      category: 'science',
      link: '/crear'
    },
    {
      title: t('movies'),
      description: t('discoverNews'),
      imgUrl: projImg5,
      category: 'movies',
      link: '/cine'
    },
    {
      title: t('others'),
      description: t('discoverNews'),
      imgUrl: projImg6,
      category: 'others',
      link: '/crear'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t('blogPages')}</h2>
                  <p>{t('discoverNews')}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="technology">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="technology">{t('technologies')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="music">{t('music')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sports">{t('sports')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="science">{t('science')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="movies">{t('movies')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="others">{t('others')}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {['technology', 'music', 'sports', 'science', 'movies', 'others'].map(category => (
                        <Tab.Pane eventKey={category} key={category}>
                          <Row>
                            {projects.filter(project => project.category === category).map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  )
}
