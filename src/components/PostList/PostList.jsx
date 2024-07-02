import React, { useState } from 'react';
import './PostList.css'; // Importa el archivo CSS para los estilos de PostList
import EditPost from './EditPost'; // Importa el componente EditPost, asegúrate de que la ruta sea correcta

function PostList({ posts, editPost, deletePost }) {
  // Estados para controlar qué publicación está expandida y cuál está en modo de edición
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);
  const [editingPostIndex, setEditingPostIndex] = useState(null);

  // Función para alternar entre mostrar más o menos contenido de la publicación
  const toggleReadMore = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  // Función para alternar entre el modo de edición de una publicación
  const toggleEdit = (index) => {
    setEditingPostIndex(editingPostIndex === index ? null : index);
  };

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post, index) => {
          const isExpanded = expandedPostIndex === index;
          const isEditing = editingPostIndex === index;
          // Determina qué contenido mostrar basado en si la publicación está expandida o no
          const contentToShow = isExpanded ? post.content : post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '');

          return (
            <div key={index} className={`post ${isExpanded ? 'expanded' : ''}`}>
              <h3>{post.title}</h3>
              {isEditing ? ( // Renderiza el componente EditPost si la publicación está en modo de edición
                <EditPost
                  post={post}
                  onSave={(updatedPost) => {
                    editPost(updatedPost); // Llama a la función editPost con la publicación actualizada
                    toggleEdit(index); // Cierra el modo de edición al guardar
                  }}
                  onDelete={() => deletePost(post.id)} // Llama a la función deletePost con el ID de la publicación a eliminar
                />
              ) : (
                <>
                  <p className={isExpanded ? 'expanded' : ''}>{contentToShow}</p>
                  {post.content.length > 100 && (
                    <button className="read-more" onClick={() => toggleReadMore(index)}>
                      {isExpanded ? 'Leer menos' : 'Leer más'}
                    </button>
                  )}
                  <div className="edit-post">
                    <button className="edit-button" onClick={() => toggleEdit(index)}>Editar</button> {/* Botón para entrar en modo de edición */}
                    <button className="delete-button" onClick={() => deletePost(post.id)}>Eliminar</button> {/* Botón para eliminar la publicación */}
                  </div>
                </>
              )}
            </div>
          );
        })
      ) : (
        <p className="no-posts">No hay publicaciones aún.</p>
      )}
    </div>
  );
}

export default PostList;
