import React, { useState } from 'react';
import './EditPost.css'; // Asegúrate de que este archivo CSS esté correctamente importado

const EditPost = ({ post, onSave, onDelete }) => {
   // Declaración de estados locales para el contenido editado y el modo de edición
  const [editedContent, setEditedContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);

  // Función que maneja el cambio en el contenido editado
  const handleChange = (event) => {
    setEditedContent(event.target.value);
  };

  // Función que maneja el guardado del contenido editado
  const handleSave = () => {
    onSave({ ...post, content: editedContent });
    setIsEditing(false);
  };

  // Función que cancela la edición y restablece el contenido original
  const cancelEdit = () => {
    setEditedContent(post.content);
    setIsEditing(false);
  };

  // Función que maneja la eliminación del post
  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div className="edit-post">
      <div className="post-header">
        <h3>{post.title}</h3>
      <div className="post-content">
        {isEditing ? (
          // Muestra un textarea si está en modo de edición
          <textarea value={editedContent} onChange={handleChange} />
        ) : (
           // Muestra el contenido del post si no está en modo de edición
          <p>{post.content}</p>
        )}
      </div>
        {!isEditing ? (
          // Botones de editar y eliminar visibles si no está en modo de edición
          <div className="button-group">
            <button className="edit-button" onClick={() => setIsEditing(true)}>Editar</button>
            <button className="delete-button" onClick={handleDelete}>Eliminar</button>
          </div>
        ) : null}
      </div>
      {isEditing && (
        // Botones de guardar y cancelar visibles si está en modo de edición
        <div className="button-group">
          <button className="save-button" onClick={handleSave}>Guardar cambios</button>
          <button className="cancel-button" onClick={cancelEdit}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default EditPost;
