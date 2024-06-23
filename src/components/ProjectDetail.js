// ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams(); // Obtiene el parámetro de la URL

  // Lógica para mostrar los detalles del proyecto según el id
  // Aquí puedes usar el id para cargar los datos del proyecto desde una fuente de datos (API, base de datos, etc.)

  return (
    <div className="project-detail">
      <h2>Detalles del Proyecto {id}</h2>
      {/* Mostrar detalles del proyecto según el id */}
    </div>
  );
};

export default ProjectDetail;
