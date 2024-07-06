import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { House, Person } from 'react-bootstrap-icons';
import {Link} from "react-router-dom"
import './CreatePost.css'; // Importa los estilos CSS específicos para CreatePost

const CreatePost = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="create-post">
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand as={Link} to="/app" >
          <House  size={30} className="house" /> {/* Ícono de casa */}
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/crear">
          <Person size={30} className="house" /> {/* Ícono de contacto/persona */}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button as={Link} to="/editar" variant="primary">Continuar</Button> {/* Botón que no lleva a ningún lado */}
        </Nav>
      </Navbar>
      
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
        <button type="submit">Crear Post</button> {/* Botón original del formulario */}
      </form>
    </div>
  );
};

export default CreatePost;

