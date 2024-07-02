import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Navbar, Nav, Dropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { House, Plus, Person } from 'react-bootstrap-icons'; // Importa los íconos de House, Plus y Person
import { useTranslation } from 'react-i18next';

const Cine = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para la sesión de usuario
  const [userName, setUserName] = useState(''); // Estado para el nombre de usuario
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines", 
          {
            params: {
              category: "entertainment",
              country: "us",
              apiKey: "4a358e0392554b8c93beaeb2274092d7", // Reemplaza con tu propia API key de NewsAPI
            },
          }
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news articles", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Cine News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/app">
                <Nav.Link><House size={28} /></Nav.Link>
              </LinkContainer>
              <Dropdown>
                <Dropdown.Toggle as={Nav.Link}>
                  <Plus size={28} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <LinkContainer to="/Cine">
                    <Dropdown.Item>{t('Configuracion')}</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/cine">
                    <Dropdown.Item>{t('Contactos')}</Dropdown.Item>
                  </LinkContainer>
                  
                </Dropdown.Menu>
              </Dropdown>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h2 className="mt-4">Cine</h2>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <Row>
            {articles.map((article, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={article.urlToImage || 'default-image.jpg'} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Leer más
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Cine;
