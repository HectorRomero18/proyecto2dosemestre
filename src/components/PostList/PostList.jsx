import React, { useState, useEffect } from 'react';
import './PostList.css'; // Asegúrate de que este archivo CSS esté correctamente importado
import EditPost from './EditPost'; // Asegúrate de que la ruta del archivo sea correcta

const PostList = () => {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleSave = (updatedPost) => {
    const updatedPosts = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
    setPosts(updatedPosts);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <EditPost 
            key={post.id} 
            post={post} 
            onSave={handleSave} 
            onDelete={handleDelete} 
          />
        ))
      ) : (
        <h2>No se ha creado ningún post</h2>
      )}
    </div>
  );
};

export default PostList;

