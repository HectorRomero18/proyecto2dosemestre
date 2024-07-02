import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
import './RegisterCard.css';

const RegisterCard = () => {
  return (
    <div className="register-card-container">
      <div className="register-card">
        <h1>¿Aún no tienes una cuenta?</h1>
        <h2>Regístrate para que puedas iniciar sesión</h2>
        <Button as={Link} to="https://test242212.000webhostapp.com/index.php" className="register-button">Registrarse</Button>
      </div>
    </div>
  );
};

export default RegisterCard;
