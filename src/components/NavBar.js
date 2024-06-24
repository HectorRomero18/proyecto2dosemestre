// Importamos dependencias
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import logo from '../assets/img/unemi.jfif';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { MenuButton } from "react-bootstrap-icons";


// Componente
const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home'); //Aquí se manejara el tema de los links para navegar en la misma pagina
  const [scrolled, setScrolled] = useState(false); //Aqui se maneja el tema de cuando el usuario se desplace hacia arriba y abajo (scroll)
  const [showDropdown, setShowDropdown] = useState(false); // Estado para controlar la visibilidad del menú desplegable

  const List = [
    {
      name: "Cerrar Sesión",
      href: "/pruebas"
    }
  ]



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

  return (
    <Navbar id="nav-1" expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* Aquí va el logo de esta pagina Web (Unemi) */}
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Links (home, Pagina/Blog, Utilizado) */}
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Utilizado</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Páginas/Blog</Nav.Link>
            {/* Dropdown */}
            <Dropdown show={showDropdown} onToggle={toggleDropdown}>
              <Dropdown.Toggle as={Nav.Link} className="navbar-link" id="dropdown-basic">
                <MenuButton /> {/* Ícono de list de Bootstrap Icons */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
          {/* Enlace que se mostrará despues de presionar el menú desplegable */}
                <Dropdown.Item href="/Pages/Pruebas">Crear</Dropdown.Item>
          {/* Enlace que se mostrará despues de presionar el menú desplegable */}

                <Dropdown.Item href="#action/2">Editar</Dropdown.Item>
          {/* Enlace que se mostrará despues de presionar el menú desplegable */}

                <Dropdown.Item href="#action/3">Eliminar</Dropdown.Item>
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
            {/* Boton de Cerrar Sesión */}
              <button className="vvd">
                  
                  {List.map((x) => (
                    <Link key={x.name} to={x.href}>{x.name}</Link>
                  ))}
                </button>

          </span>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  )
}

export default NavBar;
