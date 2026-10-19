// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta el scroll para agregar sombra y blur más pronunciado al bajar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        
        {/* LOGO ESTILIZADO */}
        <a href="#" className="navbar-logo">
          <span className="logo-brackets">&lt;</span>
          <span className="logo-name">JuanDiego</span>
          <span className="logo-dot">.dev</span>
          <span className="logo-brackets">/&gt;</span>
        </a>

        {/* ENLACES DE NAVEGACIÓN */}
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Perfil</a>
          <a href="#tech-stack" onClick={() => setIsOpen(false)}>Tech Stack</a>
          <a href="#certificaciones" onClick={() => setIsOpen(false)}>Certificaciones</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contacto" className="nav-btn-cta" onClick={() => setIsOpen(false)}>
            Contacto
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA PARA MÓVILES */}
        <div className={`navbar-toggle ${isOpen ? 'toggle-active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;