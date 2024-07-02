import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { List } from 'react-bootstrap-icons'; // Importamos el icono de menú
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Translate, Person, Gear, InfoCircle, FileCode, BoxArrowRight } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home'); //Aquí se manejara el tema de los links para navegar en la misma pagina
  const [scrolled, setScrolled] = useState(false); //Aqui se maneja el tema de cuando el usuario se desplace hacia arriba y abajo (scroll)
  const [showDropdown, setShowDropdown] = useState(false); // Estado para controlar la visibilidad del menú desplegable
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para la barra de navegación vertical
  const { t, i18n } = useTranslation();

  // Funcion que se encargará del efecto del Scroll
  useEffect(() => {
    const onScroll = () => {
      // Si se empieza a mover se aplicara el efecto (true)
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Aplicamos el evento una vez se inicie el scroll
    window.addEventListener("scroll", onScroll);

    // Cuando se deje de mover removemos el evento
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // Función que se encarga de actualizar la posicion en la pagina mediante los links (Home, Pagina/Blog, Utilizado)
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // Función para el menú desplegable
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  // Función para mostrar/ocultar la barra de navegación vertical
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Navbar id="nav-1" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Icono de menú */}
          <button className="menu-button" onClick={toggleNav}>
            <List size={80} /> {/* Usamos el icono de Bootstrap Icons */}
          </button>
          {/* Aquí va el logo de esta pagina Web (Unemi) */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Links (home, Pagina/Blog, Utilizado) */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t('home')}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t('skills')}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t('projects')}</Nav.Link>
              {/* Dropdown */}
              <Dropdown show={showDropdown} onToggle={toggleDropdown}>
                <Dropdown.Toggle as={Nav.Link} className="navbar-link" id="dropdown-basic">
                  <List size={24} /> {/* Ícono de list de Bootstrap Icons */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Enlaces que se mostrarán después de presionar el menú desplegable */}
                  <Dropdown.Item as={Link} to="/crear">{t('create')}</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/editar">{t('myPublications')}</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/eliminar">{t('delete')}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            {/* Iconos de las redes sociales */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              {/* Boton de Iniciar Sesión */}
                <button className="vvd">
                  <a href="https://test242212.000webhostapp.com/index.php" rel="noopener noreferrer">{t('logout')}</a>
                </button>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`vertical-nav ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><button onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}><Translate size={24} /></button></li>
          <li><button><Gear size={24} /></button></li>
          <li><button><InfoCircle size={24} /></button></li>
          <li><button><Person size={24} /></button></li>
          <li><button><FileCode size={24} /></button></li>
          <li><button><BoxArrowRight size={24} /></button></li>
         
        </ul>
      </div>
    </>
  )
}

export default NavBar;



