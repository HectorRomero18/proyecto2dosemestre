import React, { useState } from 'react';
import './EditPost.css'; // Asegúrate de que este archivo CSS esté correctamente importado

const EditPost = ({ post, onSave, onDelete }) => {
  const [editedContent, setEditedContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleSave = () => {
    onSave({ ...post, content: editedContent });
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditedContent(post.content);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div className="edit-post">
      <div className="post-header">
        <h3>{post.title}</h3>
      <div className="post-content">
        {isEditing ? (
          <textarea value={editedContent} onChange={handleChange} />
        ) : (
          <p>{post.content}</p>
        )}
      </div>
        {!isEditing ? (
          <div className="button-group">
            <button className="edit-button" onClick={() => setIsEditing(true)}>Editar</button>
            <button className="delete-button" onClick={handleDelete}>Eliminar</button>
          </div>
        ) : null}
      </div>
      {isEditing && (
        <div className="button-group">
          <button className="save-button" onClick={handleSave}>Guardar cambios</button>
          <button className="cancel-button" onClick={cancelEdit}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default EditPost;
