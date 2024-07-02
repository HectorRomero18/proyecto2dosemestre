import React, { useState } from 'react';
import './PostList.css'; // Asegúrate de que este archivo CSS esté correctamente importado

const EditPost = ({ post, onSave, onDelete }) => {
  // Estado para el contenido editado y el estado de edición
  const [editedContent, setEditedContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);

  // Función para manejar el cambio en el contenido editado
  const handleChange = (event) => {
    setEditedContent(event.target.value);
  };

  // Función para guardar los cambios editados
  const handleSave = () => {
    onSave({ ...post, content: editedContent }); // Llama a la función onSave con el post actualizado
    setIsEditing(false); // Cambia el estado de edición a false para salir del modo de edición
  };

  // Función para cancelar la edición y restaurar el contenido original
  const cancelEdit = () => {
    setEditedContent(post.content); // Restaura el contenido original del post
    setIsEditing(false); // Cambia el estado de edición a false para salir del modo de edición
  };

  // Función para manejar la eliminación del post
  const handleDelete = () => {
    onDelete(post.id); // Llama a la función onDelete con el ID del post a eliminar
  };

  return (
    <div className="edit-post">
      {!isEditing ? ( // Renderiza el botón de Editar si no se está editando
        <button className="edit-button" onClick={() => setIsEditing(true)}>Editar</button>
      ) : ( // Renderiza el formulario de edición si se está editando
        <div className="edit-form">
          <textarea value={editedContent} onChange={handleChange} /> {/* Área de texto para editar el contenido */}
          <div className="button-group">
            <button className="save-button" onClick={handleSave}>Guardar cambios</button> {/* Botón para guardar los cambios */}
            <button className="cancel-button" onClick={cancelEdit}>Cancelar</button> {/* Botón para cancelar la edición */}
          </div>
        </div>
      )}
      <button className="delete-button" onClick={handleDelete}>Eliminar</button> {/* Botón para eliminar el post */}
    </div>
  );
};

export default EditPost;
