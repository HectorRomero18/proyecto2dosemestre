import React, { useState } from 'react';
import './CreatePost.css'; // Importa los estilos CSS específicos para CreatePost

// Define el componente funcional CreatePost que acepta onSubmit como prop
const CreatePost = ({ onSubmit }) => {
  // Define dos estados locales usando useState: title y content
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    onSubmit({ title, content }); // Llama a la función onSubmit pasando el título y contenido como argumentos
    setTitle(''); // Reinicia el estado del título a una cadena vacía
    setContent(''); // Reinicia el estado del contenido a una cadena vacía
  };

  // Renderiza el formulario de creación de post
  return (
    <div className="create-post"> {/* Contenedor principal con clase "create-post" */}
      <form onSubmit={handleSubmit}> {/* Formulario que llama a handleSubmit al enviar */}
        <div className="form-group"> {/* Grupo de campo para el título */}
          <label htmlFor="post-title">Título</label> {/* Etiqueta para el campo de entrada del título */}
          <input
            type="text"
            id="post-title"
            value={title} // Asigna el valor del estado title al campo de entrada
            onChange={(e) => setTitle(e.target.value)} // Maneja el cambio en el campo de entrada y actualiza el estado title
            required // Campo requerido
          />
        </div>
        <div className="form-group"> {/* Grupo de campo para el contenido del post */}
          <label htmlFor="post-content">Contenido</label> {/* Etiqueta para el área de texto del contenido */}
          <textarea
            id="post-content"
            value={content} // Asigna el valor del estado content al área de texto
            onChange={(e) => setContent(e.target.value)} // Maneja el cambio en el área de texto y actualiza el estado content
            required // Campo requerido
          />
        </div>
        <button type="submit">Crear Post</button> {/* Botón para enviar el formulario */}
      </form>
    </div>
  );
};

export default CreatePost; // Exporta el componente CreatePost para ser usado en otros componentes
