import React, { useState } from 'react';
import './TeachList.css'; // Asegúrate de importar tu archivo CSS

// Estado para rastrear el índice de la publicación expandida
function TeachList({ posts = [] }) {
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);

  // Función para alternar entre expandir y contraer el contenido de la publicación
  const toggleReadMore = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  return (
    <div className="teach-list">
      {/* Verifica si hay publicaciones */}
      {posts.length > 0 ? (
        posts.map((post, index) => {
          // Determina si la publicación está expandida
          const isExpanded = expandedPostIndex === index;
          // Determina qué contenido mostrar
          const contentToShow = isExpanded ? post.content : post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '');

          return (
            <div key={index} className="teach-post"> {/* Contenedor de cada publicación */}
              <h3>{post.title}</h3> {/* Título de la publicación */}
              {/* Contenido de la publicación, ajustado según esté expandido o no */}
              <p style={{ maxHeight: isExpanded ? 'none' : '200px' }}>{contentToShow}</p>
              {/* Verifica si la longitud del contenido es mayor a 100 caracteres */}
              {post.content.length > 100 && (
                <button className="read-more" onClick={() => toggleReadMore(index)}>{/* Botón para expandir/cerrar */}
                  {isExpanded ? 'Leer menos' : 'Leer más'} {/* Texto dinámico basado en si está expandido o no */}
                </button>
              )}
            </div>
          );
        })
      ) : (
        <p>No hay publicaciones aún.</p>
      )}
    </div>
  );
}

export default TeachList;
