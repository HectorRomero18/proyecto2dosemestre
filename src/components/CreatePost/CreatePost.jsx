import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate para la navegación programática
import { Navbar, Nav, Button } from 'react-bootstrap'; // Importa componentes de react-bootstrap
import { House, Person } from 'react-bootstrap-icons'; // Importa iconos de react-bootstrap-icons
import { Link } from 'react-router-dom'; // Importa Link para la navegación entre rutas
import { v4 as uuidv4 } from 'uuid'; // Importa uuid para generar identificadores únicos
import './CreatePost.css'; // Importa estilos CSS específicos para CreatePost

const CreatePost = () => {
  const [title, setTitle] = useState(''); // Estado para el título del post
  const [content, setContent] = useState(''); // Estado para el contenido del post
  const navigate = useNavigate(); // Obtiene la función de navegación desde useNavigate()

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Crea un objeto post con el título, el contenido y un identificador único
    const post = { id: uuidv4(), title, content };

    // Obtiene los posts actuales de localStorage o inicializa un arreglo vacío si no hay ninguno
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

    // Agrega el nuevo post al arreglo existente de posts
    const updatedPosts = [...existingPosts, post];

    // Guarda la lista actualizada de posts en localStorage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Muestra un mensaje en la consola con el nuevo post creado
    console.log('Nuevo post creado:', post);

    // Navega a la ruta '/editar' y pasa los posts actualizados como estado
    navigate('/editar', { state: { posts: updatedPosts } });
  };

  return (
    <div className="create-post">
      {/* Barra de navegación */}
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand as={Link} to="/app">
          <House size={30} className="house" /> {/* Ícono de casa */}
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/crear">
          <Person size={30} className="house" /> {/* Ícono de persona/contacto */}
        </Navbar.Brand>
        <Nav className="ml-auto">
          {/* Botón de continuar */}
          <Button as={Link} to="/eliminar" variant="primary">Continuar</Button>
        </Nav>
      </Navbar>
      
      {/* Formulario para crear un nuevo post */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title">Título</label>
          <input
            type="text"
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="post-content">Contenido</label>
          <textarea
            id="post-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Post</button> {/* Botón para enviar el formulario */}
      </form>
    </div>
  );
};

export default CreatePost;


