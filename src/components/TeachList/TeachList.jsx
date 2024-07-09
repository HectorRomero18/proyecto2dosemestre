import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // Importa componentes de react-bootstrap
import { House, Person } from 'react-bootstrap-icons'; // Importa iconos de react-bootstrap-icons
import './TeachList.css'; // Importa el archivo CSS para estilizar el componente
import Comentarios from '../Comentarios/Comentarios';

const TeachList = () => {
  const location = useLocation(); // Obtiene la ubicación actual de la ruta
  const [posts, setPosts] = useState(
    location.state?.posts || JSON.parse(localStorage.getItem('posts')) || [] // Estado inicial para almacenar los posts
  );
  const [selectedPostIndex, setSelectedPostIndex] = useState(null); // Estado para mantener el índice del post seleccionado

  useEffect(() => {
    // Efecto que se ejecuta cuando cambia el estado de la ubicación
    if (location.state?.posts) {
      // Actualiza los posts si hay nuevos posts en el estado de la ubicación
      setPosts(location.state.posts);
    }
  }, [location.state]); // Dependencia del efecto: se ejecuta cuando location.state cambia

  // Función para manejar el clic en un post
  const handlePostClick = (index) => {
    setSelectedPostIndex(selectedPostIndex === index ? null : index); // Alterna entre seleccionar y deseleccionar el post
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand href="/app">
          <House size={30} className="house" /> {/* Ícono de casa */}
        </Navbar.Brand>
        <Navbar.Brand href="/crear">
          <Person size={30} className="house" /> {/* Ícono de persona/contacto */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>

      {/* Contenido principal */}
      <div className="teach-list-container">
        <div className="teach-list">
          {posts.length > 0 ? (
            <>
              <h2>Posts Creados</h2>
              <div className="post-list">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className={`post ${selectedPostIndex === index ? 'selected' : ''}`}
                    onClick={() => handlePostClick(index)}
                  >
                    <h3>Título: {post.title}</h3>
                    <p>Contenido: {post.content}</p>
                    <Comentarios />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h2>No se ha creado ningún post</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default TeachList;
