import React, { useState, useEffect } from 'react';
import './PostList.css'; // Asegúrate de que este archivo CSS esté correctamente importado
import EditPost from './EditPost'; // Asegúrate de que la ruta del archivo sea correcta

const PostList = () => {
  // Estado para almacenar los posts, inicializado con los datos del localStorage si existen
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);

  // Efecto que se ejecuta cuando el estado de 'posts' cambia, actualizando el localStorage
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Función para guardar un post actualizado
  const handleSave = (updatedPost) => {
    const updatedPosts = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
    setPosts(updatedPosts);
  };

  // Función para eliminar un post
  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        // Renderiza cada post utilizando el componente EditPost con las funciones onSave y onDelete
        posts.map((post) => (
          <EditPost 
            key={post.id} 
            post={post} 
            onSave={handleSave} 
            onDelete={handleDelete} 
          />
        ))
      ) : (
        // Mensaje mostrado si no hay posts
        <h2>No se ha creado ningún post</h2>
      )}
    </div>
  );
};

export default PostList;
