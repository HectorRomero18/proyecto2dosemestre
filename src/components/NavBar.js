import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { List } from 'react-bootstrap-icons';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Translate, Person, InfoCircle, DatabaseFillAdd, Wrench } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

// Componente de alerta de SweetAlert2 con React
const MySwal = withReactContent(Swal);

const NavBar = () => {
  // Estados para manejar enlaces activos, desplazamiento, visualización de dropdown y estado del menú
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // Hook para la traducción
  const { t, i18n } = useTranslation();
  // Hook para navegación
  const navigate = useNavigate();

  // Efecto para manejar el evento de desplazamiento
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Función para actualizar el enlace activo
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Función para alternar la visualización del dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Función para alternar el estado del menú
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Función para navegar a la página de usuarios
  const users = () => {
    navigate("/app");
  }
  
  // Función para redirigir a la página de la base de datos
  const DataBase = () => {
    window.location.href = "https://databases-auth.000webhost.com/index.php";
  }
  
  const Login = () => {
    window.location.href = "https://files.000webhost.com";
  }
  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: 'Vas a cerrar sesión.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://test242212.000webhostapp.com/index.php'; // Redirección a una URL externa
      }
    });
  };

  return (
    <>
      {/* Barra de navegación */}
      <Navbar id="nav-1" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Botón del menú */}
          <button className="menu-button" onClick={toggleNav}>
            <List size={80} />
          </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Enlaces de navegación */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t('home')}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t('projects')}</Nav.Link>
              {/* Botón para cambiar el idioma */}
              <button onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')} style={{ color: '#fff' }}><Translate size={24} /></button>
              {/* Dropdown */}
              <Dropdown show={showDropdown} onToggle={toggleDropdown}>
                <Dropdown.Toggle as={Nav.Link} className="navbar-link" id="dropdown-basic">
                  <List size={24} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/crear">{t('create')}</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/editar">{t('myPublications')}</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/eliminar">{t('edit')}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <span className="navbar-text">
              {/* Iconos sociales */}
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              {/* Botón de logout */}
              <button className="vvd" onClick={handleLogout}>
                {t('logout')}
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Menú vertical */}
      <div className={`vertical-nav ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><button onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}><Translate size={24} /></button></li>
          <li><button><InfoCircle size={24} /></button></li>
          <li><button onClick={users}><Person size={24} /></button></li>
          <li><button onClick={DataBase}><DatabaseFillAdd size={24} /></button></li>
          <li><button onClick={Login}><Wrench size={24} /></button></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
