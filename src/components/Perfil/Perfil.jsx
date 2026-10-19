import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="sobre-mi-grid">
          {/* TARJETA 1: PERFIL PROFESIONAL */}
          <div className="card">
            <div className="card-header">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>
            <p className="card-text">
              Estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI y formación técnica complementaria en la Universidad Nacional de Ingeniería (UNI), enfocado en el desarrollo de soluciones de software eficientes y escalables.
              <br /><br />
              Cuento con certificaciones internacionales de Oracle en Database Design, Database Programming with SQL, Java Fundamentals y Java Foundations, respaldando sólidas bases técnicas en diseño de datos y programación orientada a objetos.
              <br /><br />
              Experiencia práctica en el desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Laravel, Java, Android Studio y Python, además de la gestión de bases de datos relacionales y control de versiones con Git y GitHub.
            </p>
          </div>

          {/* TARJETA 2: EDUCACIÓN */}
          <div className="card">
            <div className="card-header">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Practicante de Desarrollo de Software</h4>
                  <span className="badge badge-outline">CERTIFICADO</span>
                </div>
                <span className="timeline-date">UNIVERSIDAD NACIONAL DE INGENIERIA</span>
              </div>

              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>PRINCIPIANTE EN PROGRAMACION</h4>
                  <span className="badge badge-outline">CERTIFICADO</span>
                </div>
                <span className="timeline-date">ALURA LATAM (ONE)</span>
              </div>

              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>INGENIERIA DE SOFTWARE CON INTELIGENCIA ARTIFICIAL</h4>
                  <span className="badge badge-outline">CARRERA TECNICA</span>
                </div>
                <span className="timeline-date">SENATI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;