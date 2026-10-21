// src/components/Contacto/Contacto.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const templateParams = {
        nombre: formulario.nombre,
        email: formulario.email,
        mensaje: formulario.mensaje
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Alerta estilizada para coincidir con la paleta Azul/Cian
      Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te responderé a la brevedad.',
        icon: 'success',
        confirmButtonColor: '#06b6d4',
        background: '#0d111a',
        color: '#ffffff',
        customClass: {
          popup: 'swal2-glass-popup'
        }
      });

      // Limpia el formulario
      setFormulario({
        nombre: '',
        email: '',
        mensaje: ''
      });

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);

      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
        icon: 'error',
        confirmButtonColor: '#06b6d4',
        background: '#0d111a',
        color: '#ffffff'
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        
        {/* Título de la Sección */}
        <h2 className="section-title text-center">
          Trabajemos <span className="text-gradient">Juntos</span>
        </h2>

        <div className="contacto-grid">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO */}
          <div className="contacto-info-col">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente, una consulta técnica o buscas incorporar un desarrollador a tu equipo? Me encantaría escucharte.
            </p>

            <div className="info-cards-list">
              {/* Correo */}
              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <a href="mailto:diegoaltoperu2014@gmail.com" className="info-value">
                    diegoaltoperu2014@gmail.com
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="info-label">Ubicación</span>
                  <span className="info-value-text">Lima - Perú</span>
                </div>
              </div>
            </div>

            {/* Enlaces a Redes Profesionales */}
            <div className="contacto-socials">
              <span className="socials-label">Redes & Repositorios:</span>
              <div className="social-buttons">
                <a href="https://github.com/DiegoLvn04" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO INTERACTIVO */}
          <div className="contacto-form-card">
            <form className="contacto-form" onSubmit={manejarEnvio}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre completo"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  rows="4"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  required
                  disabled={cargando}
                ></textarea>
              </div>

              <button type="submit" className="btn-send" disabled={cargando}>
                {cargando ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Enviar Mensaje
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contacto;