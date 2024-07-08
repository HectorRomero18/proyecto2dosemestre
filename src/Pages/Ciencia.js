import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { House, Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Ciencia = () => {
  const [news, setNews] = useState([]); // Estado para almacenar las noticias
  const [loading, setLoading] = useState(true); // Estado para manejar el indicador de carga

  useEffect(() => {
    // Función para obtener noticias de la API
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'science', // Consulta sobre avances científicos
            apiKey: '4a358e0392554b8c93beaeb2274092d7', // Tu clave de API
            language: 'es', // Idioma de las noticias (opcional)
            sortBy: 'publishedAt', // Ordenar por fecha de publicación (opcional)
          },
        });
        setNews(response.data.articles); // Actualiza el estado con las noticias obtenidas
        setLoading(false); // Desactiva el indicador de carga
      } catch (error) {
        console.error('Error fetching the news:', error); // Manejo de errores
      }
    };

    fetchNews(); // Llama a la función para obtener noticias al montar el componente
  }, []);

  return (
    <div className="ciencia-container">
      {/* Barra de navegación */}
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand as={Link} to="/app">
          <House size={30} className="house" /> {/* Ícono de casa */}
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/ciencia">
          <Person size={30} className="house" /> {/* Ícono de persona/contacto */}
        </Navbar.Brand>
      </Navbar>

      {/* Contenido del componente */}
      <div className="news-list">
        {loading ? (
          <p>Cargando noticias...</p> // Muestra un mensaje de carga mientras se obtienen las noticias
        ) : (
          news.map((article, index) => (
            <div key={index} className="news-card">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="news-image" />
              )}
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Leer más</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Ciencia;
