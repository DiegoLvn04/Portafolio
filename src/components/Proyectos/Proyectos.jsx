// src/components/Proyectos/Proyectos.jsx
import './Proyectos.css';

// Si tienes imágenes en src/assets/ las puedes importar aquí:
// import imgForia from '../../assets/proyecto-foria.png';

const Proyectos = () => {
  // Arreglo de proyectos estructurado (Fácil de modificar en el futuro)
  const proyectosData = [
    {
      id: 1,
      titulo: "E-Commerce & Carrito de Compras - FORIA SAC",
      subtitulo: "Plataforma Web Comercial",
      descripcion: "Aplicación web completa para venta de calzado (varones, mujeres y niños). Incluye catálogo interactivo, carrito de compras, gestión de inventario y panel de administración.",
      tags: ["React", "Laravel", "PostgreSQL", "Bootstrap"],
      imagen: null, // Reemplazar con imgForia cuando tengas la imagen en src/assets/
      demoUrl: "https://github.com/DiegoLvn04",
      githubUrl: "https://github.com/DiegoLvn04"
    },
    {
      id: 2,
      titulo: "Sistema de Monitoreo & Visión Artificial",
      subtitulo: "Inteligencia Artificial & FastAPI",
      descripcion: "Sistema de detección y análisis en tiempo real utilizando OpenCV, MediaPipe y Python. Procesa flujos de video mediante WebSockets para monitoreo continuo.",
      tags: ["Python", "FastAPI", "OpenCV", "MediaPipe"],
      imagen: null,
      demoUrl: "https://github.com/DiegoLvn04",
      githubUrl: "https://github.com/DiegoLvn04"
    },
    {
      id: 3,
      titulo: "App Móvil de Gestión & Mantenimiento",
      subtitulo: "Aplicación Nativa Android",
      descripcion: "Aplicación móvil nativa para registro y gestión de datos con base de datos SQLite local, interfaz intuitiva en XML y controladores orientados a objetos en Java.",
      tags: ["Android Studio", "Java", "SQLite", "Material Design"],
      imagen: null,
      demoUrl: "https://github.com/DiegoLvn04",
      githubUrl: "https://github.com/DiegoLvn04"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        
        {/* Título de la Sección */}
        <h2 className="section-title text-center">
          Proyectos <span className="text-gradient">Destacados</span>
        </h2>

        {/* Grilla de Proyectos */}
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-card">
              
              {/* VISTA PREVIA DE IMAGEN / MOCKUP */}
              <div className="proyecto-img-wrapper">
                {proyecto.imagen ? (
                  <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-img" />
                ) : (
                  <div className="proyecto-placeholder">
                    <div className="placeholder-icon">💻</div>
                    <span>{proyecto.subtitulo}</span>
                  </div>
                )}
                <div className="proyecto-overlay">
                  <a href={proyecto.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-icon-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* CONTENIDO DEL PROYECTO */}
              <div className="proyecto-content">
                <span className="proyecto-subtitulo">{proyecto.subtitulo}</span>
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                {/* TECNOLOGÍAS UTILIZADAS */}
                <div className="proyecto-tags">
                  {proyecto.tags.map((tag, idx) => (
                    <span key={idx} className="proyecto-tag">{tag}</span>
                  ))}
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="proyecto-actions">
                  <a href={proyecto.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-primary-proj">
                    Demo en Vivo
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a href={proyecto.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-secondary-proj">
                    Ver Código
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proyectos;