// src/components/Perfil/Perfil.jsx
import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        
        {/* Título de la sección centrado y con resplandor */}
        <h2 className="section-title text-center">
          Sobre <span className="text-gradient">mí</span>
        </h2>

        <div className="sobre-mi-grid">
          
          {/* TARJETA 1: PERFIL PROFESIONAL */}
          <div className="card profile-card">
            <div className="card-header">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>

            <p className="card-text">
              Estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI y formación técnica complementaria en la Universidad Nacional de Ingeniería (UNI), enfocado en el desarrollo de soluciones de software eficientes y escalables.
            </p>
            <p className="card-text">
              Cuento con certificaciones internacionales de Oracle en Database Design, Database Programming with SQL, Java Fundamentals y Java Foundations, respaldando sólidas bases técnicas en diseño de datos y programación orientada a objetos.
            </p>
            <p className="card-text">
              Experiencia práctica en el desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Laravel, Java, Android Studio y Python, además de la gestión de bases de datos relacionales y control de versiones con Git y GitHub.
            </p>
          </div>

          {/* TARJETA 2: EDUCACIÓN */}
          <div className="card education-card">
            <div className="card-header">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Ingeniería de Software con IA</h4>
                  <span className="badge badge-cyan">Carrera Técnica</span>
                </div>
                <span className="timeline-date">SENATI</span>
              </div>

              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Desarrollo de Software</h4>
                  <span className="badge badge-blue">Especialización / Prácticas</span>
                </div>
                <span className="timeline-date">UNIVERSIDAD NACIONAL DE INGENIERÍA</span>
              </div>

              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Database Design & Programming w/ SQL</h4>
                  <span className="badge badge-outline">Certificación Internacional</span>
                </div>
                <span className="timeline-date">ORACLE ACADEMY</span>
              </div>

              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Java Fundamentals & Foundations</h4>
                  <span className="badge badge-outline">Certificación Internacional</span>
                </div>
                <span className="timeline-date">ORACLE ACADEMY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Perfil;