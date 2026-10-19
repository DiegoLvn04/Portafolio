// src/components/Banner/Banner.jsx
import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
  return (
    <section className="hero-section">
      {/* Luces decorativas de fondo (Tonos azules y cian) */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <div className="hero-container">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y TEXTOS */}
        <div className="hero-text-col">
          
          <div className="status-badge">
            <span className="status-dot"></span>
            Disponible para prácticas y proyectos
          </div>

          <h1 className="hero-title">
            ¡Hola! Soy <br />
            <span className="text-gradient">Juan Diego Levano</span>
          </h1>

          <h2 className="hero-subtitle">
            Estudiante de Ingeniería de Software con IA
          </h2>

          <p className="hero-description">
            Especializado en desarrollo Web & Móvil, arquitectura de software y gestión de bases de datos relacionales. Enfocado en construir soluciones inteligentes, limpias y escalables.
          </p>

          {/* Badges de Tecnologías Clave */}
          <div className="hero-tech-pills">
            <span className="tech-pill">React</span>
            <span className="tech-pill">Java</span>
            <span className="tech-pill">Python</span>
            <span className="tech-pill">SQL</span>
            <span className="tech-pill">Laravel</span>
          </div>

          {/* Botones de Acción */}
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">
              Ver Proyectos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contáctame
            </a>
          </div>

        </div>

        {/* COLUMNA DERECHA: FOTO DE PERFIL CON TARJETA FLOTANTE */}
        <div className="hero-image-col">
          <div className="profile-wrapper">
            
            {/* Marco decorativo */}
            <div className="profile-frame">
              <img src={miFoto} alt="Juan Diego Levano" className="profile-img" />
            </div>

            {/* Tarjetas flotantes */}
            <div className="floating-card card-top">
              <div className="card-icon">⚡</div>
              <div>
                <h4>Certified</h4>
                <p>Oracle Specialist</p>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <div className="card-icon">💻</div>
              <div>
                <h4>Software & IA</h4>
                <p>SENATI & UNI</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;