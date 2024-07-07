import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { HandThumbsUp } from 'react-bootstrap-icons'; // Importa el ícono de HandThumbsUp desde react-bootstrap-icons
import './comentarios.css'; // Estilos CSS personalizados

const Comentarios = () => {
  // Estado para almacenar la lista de comentarios
  const [comentarios, setComentarios] = useState([]);
  // Estado para almacenar el nuevo comentario que se está escribiendo
  const [nuevoComentario, setNuevoComentario] = useState('');

  // Función para manejar el envío del formulario de comentario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    if (nuevoComentario.trim() === '') {
      return; // Evita agregar comentarios vacíos
    }
    
    // Crea un objeto de comentario nuevo
    const nuevoComentarioObj = {
      id: comentarios.length + 1, // Genera un ID único basado en la longitud actual de comentarios
      contenido: nuevoComentario,
      usuario: 'Usuario Anónimo', // Nombre de usuario temporal, puede ser dinámico si se implementa la autenticación
      fecha: new Date().toLocaleString(), // Fecha y hora actual del comentario
      likes: 0 // Inicialmente el comentario no tiene likes
    };
    
    // Actualiza el estado de comentarios agregando el nuevo comentario
    setComentarios([...comentarios, nuevoComentarioObj]);
    // Reinicia el estado del nuevo comentario a una cadena vacía
    setNuevoComentario('');
  };

  // Función para manejar el evento de dar "Like" a un comentario específico
  const handleLike = (id) => {
    // Actualiza la lista de comentarios incrementando el número de likes para el comentario con el ID proporcionado
    const updatedComentarios = comentarios.map(comentario => {
      if (comentario.id === id) {
        return { ...comentario, likes: comentario.likes + 1 };
      }
      return comentario;
    });
    // Actualiza el estado de comentarios con la lista actualizada que contiene el comentario con el like incrementado
    setComentarios(updatedComentarios);
  };

  // Renderiza el componente de comentarios
  return (
    <Container className="comentarios-container">
      <h2>Comentarios</h2>
      
      {/* Formulario para agregar nuevos comentarios */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formComentario">
          {/* Campo de texto para escribir un nuevo comentario */}
          <Form.Control
            as="textarea"
            rows={4}
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            placeholder="Agrega tu comentario..."
            required // Campo requerido
          />
        </Form.Group>
        {/* Botón para enviar el formulario */}
        <Button variant="primary" type="submit">
          Agregar Comentario
        </Button>
      </Form>
      
      {/* Lista de comentarios */}
      <div className="lista-comentarios">
        {/* Verifica si hay comentarios para mostrar */}
        {comentarios.length > 0 ? (
          // Mapea la lista de comentarios y renderiza cada comentario
          comentarios.map((comentario) => (
            <div key={comentario.id} className="comentario">
              {/* Nombre de usuario del comentario */}
              <p className="usuario">{comentario.usuario}</p>
              {/* Contenido del comentario */}
              <p className="contenido">{comentario.contenido}</p>
              {/* Contenedor de acciones (por ejemplo, botón de "Like") */}
              <div className="acciones">
                {/* Botón de "Like" con el ícono de HandThumbsUp y el número de likes */}
                <button className="like-btn" onClick={() => handleLike(comentario.id)}>
                  <HandThumbsUp size={18} /> {comentario.likes} Likes
                </button>
              </div>
              {/* Fecha y hora del comentario */}
              <p className="fecha">{comentario.fecha}</p>
            </div>
          ))
        ) : (
          // Mensaje si no hay comentarios
          <p>No hay comentarios aún.</p>
        )}
      </div>
    </Container>
  );
};

export default Comentarios;
