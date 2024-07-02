import React, { useState } from 'react'; // Importa React y useState desde 'react'
import { Container, Row, Col, Card, Button, Collapse, Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Importa componentes de React Bootstrap necesarios
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación
import { House, Plus } from 'react-bootstrap-icons'; // Importa los íconos de House y Plus desde react-bootstrap-icons
import Imagen from "../assets/img/musica.jfif"; // Importa la imagen de música desde la ruta especificada
import colorSharp2 from "../assets/img/color-sharp2.png"; // Importa la imagen de color-sharp2 desde la ruta especificada

// Datos de noticias de música (puedes reemplazarlos con datos dinámicos más adelante)
const noticiasMusica = [
  {
    titulo: "Nuevo álbum de Bad Bunny",
    descripcion: "Artist X lanza su nuevo álbum, lleno de innovaciones y colaboraciones sorprendentes.",
    fecha: "2024-06-20",
    imagen: Imagen, // Asigna la imagen importada a la propiedad imagen del primer objeto
    masInformacion: "Detalles adicionales sobre el nuevo álbum de Bad Bunny."
  },
  {
    titulo: "Concierto de Anuel AA",
    descripcion: "Anuel AA anuncia una nueva gira mundial para el 2024. ¡No te lo pierdas!",
    fecha: "2024-06-18",
    imagen: Imagen, // Asigna la misma imagen importada a la propiedad imagen del segundo objeto
    masInformacion: "Información detallada sobre las fechas y lugares del tour de Anuel AA."
  },
  {
    titulo: "Premios de la música 2024",
    descripcion: "Revelados los nominados para los premios de la música 2024. ¡Descubre quiénes son los favoritos!",
    fecha: "2024-06-15",
    imagen: Imagen, // Asigna la misma imagen importada a la propiedad imagen del tercer objeto
    masInformacion: "Lista completa de nominados y categorías para los premios de la música 2024."
  },
  {
    titulo: "Nuevo sencillo de Maluma",
    descripcion: "Maluma lanza un nuevo sencillo que promete ser el éxito del verano.",
    fecha: "2024-06-10",
    imagen: Imagen, // Asigna la misma imagen importada a la propiedad imagen del cuarto objeto
    masInformacion: "Escucha aquí el nuevo sencillo de Maluma y lee más sobre su producción."
  },
  {
    titulo: "Colaboración entre Jon Z y Arcangel",
    descripcion: "Jon Z y Arcangel se unen para crear una nueva canción increíble.",
    fecha: "2024-06-05",
    imagen: Imagen, // Asigna la misma imagen importada a la propiedad imagen del quinto objeto
    masInformacion: "Detalles exclusivos sobre la colaboración entre Jon Z y Arcangel."
  }
];

// Componente
const Musica = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Define el estado para controlar qué carta está expandida

  // Función para manejar el click en las cartas y expandirlas o colapsarlas
  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Alterna entre expandir o colapsar la carta al hacer clic en ella
  };

  return (
    <div className="musica-background" style={{ backgroundImage: `url(${colorSharp2})` }}>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Descubre tu estilo</Navbar.Brand> {/* Enlace al inicio de la aplicación */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> {/* Contenedor para elementos de navegación en el lado derecho */}
              <NavDropdown title={<Plus size={29} />} id="basic-nav-dropdown" className="me-4"> {/* Dropdown con ícono de '+' */}
                <NavDropdown.Item as={Link} to="/musica">Contactos</NavDropdown.Item> {/* Enlace a la página de música */}
                <NavDropdown.Item as={Link} to="/musica">Configuración</NavDropdown.Item> {/* Enlace a la configuración */}
              </NavDropdown>
              <Nav.Link as={Link} to="/" className="ml-5"> {/* Enlace al inicio con ícono de House */}
                <House size={29} /> {/* Ícono de House */}
              </Nav.Link>
              {/* Puedes agregar más enlaces aquí según sea necesario */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="musica-container">
        <Row className="my-5">
          <Col>
            <h2 className="musica-title mt-5">Últimas Noticias del Mundo de la Música</h2> {/* Título de la sección de noticias */}
            <p className="musica-description">Mantente actualizado con las últimas noticias y novedades en el mundo de la música.</p> {/* Descripción de la sección */}
          </Col>
        </Row>
        <Row>
          {noticiasMusica.map((noticia, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card
                className={`musica-card ${expandedIndex === index ? 'active' : ''}`} // Clase condicional para activar el estilo de carta activa
                onClick={() => handleCardClick(index)} // Maneja el clic en la carta para expandirla o colapsarla
                style={{ backgroundColor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} // Estilo de fondo y sombra de la carta
              >
                <Card.Body>
                  <Card.Title className="musica-card-title">{noticia.titulo}</Card.Title> {/* Título de la noticia */}
                  <Card.Text className="musica-card-text">{noticia.descripcion}</Card.Text> {/* Descripción de la noticia */}
                  <Card.Img variant="top" src={noticia.imagen} className="musica-card-img" /> {/* Imagen asociada a la noticia */}
                  <Card.Footer>
                    <small className="text-muted">{noticia.fecha}</small> {/* Fecha de la noticia */}
                  </Card.Footer>
                </Card.Body>
                <Collapse in={expandedIndex === index}>
                  <div className="musica-card-collapse"> {/* Contenido colapsable */}
                    <Card.Body>
                      <Card.Text>
                        {noticia.masInformacion} {/* Información adicional que se muestra al expandir la carta */}
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Collapse>
                <Card.Footer className="text-center"> {/* Pie de la carta */}
                  <Button
                    variant="primary"
                    onClick={() => handleCardClick(index)}
                  >
                    {expandedIndex === index ? 'Cerrar' : 'Más Información'} {/* Texto del botón para expandir o colapsar la carta */}
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Musica; // Exporta el componente Musica
