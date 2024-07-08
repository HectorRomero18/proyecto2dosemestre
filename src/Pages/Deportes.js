import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { House, Person } from 'react-bootstrap-icons';

const Deportes = () => {
  const [articles, setArticles] = useState([]); // Estado para almacenar los artículos de noticias
  const apiKey = '4a358e0392554b8c93beaeb2274092d7';

  // Usa useEffect para obtener los artículos de noticias cuando se monta el componente
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=deportes&apiKey=${apiKey}`
        );
        setArticles(response.data.articles); // Actualiza el estado con los artículos obtenidos
      } catch (error) {
        console.error('Error fetching sports news:', error);
      }
    };

    fetchArticles(); // Llama a la función para obtener los artículos
  }, []);

  return (
    <div className="deportes-container">
      {/* Barra de navegación */}
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand as={Link} to="/app">
          <House size={30} className="house" /> {/* Ícono de casa */}
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/crear">
          <Person size={30} className="house" /> {/* Ícono de persona/contacto */}
        </Navbar.Brand>
      </Navbar>

      {/* Contenedor de noticias */}
      <Container>
        <Row>
          {articles.map((article, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card className="news-card">
                {article.urlToImage && (
                  <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
                )}
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Leer más
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Deportes;
