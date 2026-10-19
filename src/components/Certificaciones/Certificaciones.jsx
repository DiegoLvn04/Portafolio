// src/components/Certificaciones/Certificaciones.jsx
import './Certificaciones.css';

// Importación de imágenes locales según tus nombres exactos
import imgDatabaseDesign from '../../assets/Database Design.jpeg';
import imgDatabaseProgramming from '../../assets/Database Programming with SQL.jpeg';
import imgJavaFundamentals from '../../assets/Java Fundamentals.jpeg';
import imgJavaFundations from '../../assets/Java Fundations.jpeg';

const Certificaciones = () => {
  const certificacionesData = [
    {
      id: 1,
      titulo: "Database Design",
      institucion: "Oracle",
      descripcion: "Diseño conceptual y lógico de bases de datos relacionales, modelado Entidad-Relación y normalización.",
      fecha: "2026",
      imagen: imgDatabaseDesign,
      enlace: "https://drive.google.com/file/d/1Wb67bMTNo40IDW3Vkx_P4HSFBqaEuDFk/view?usp=sharing"
    },
    {
      id: 2,
      titulo: "Database Programming with SQL",
      institucion: "Oracle",
      descripcion: "Dominio de lenguaje SQL para consulta, manipulación de datos, creación de objetos y subconsultas complejas.",
      fecha: "2026",
      imagen: imgDatabaseProgramming,
      enlace: "https://drive.google.com/file/d/1N14zAGFgVh_vnTzM62czNvmfBIBPuE-i/view?usp=sharing"
    },
    {
      id: 3,
      titulo: "Java Fundamentals",
      institucion: "Oracle",
      descripcion: "Fundamentos de programación orientada a objetos (POO), sintaxis en Java, estructuras de control y algoritmos básicos.",
      fecha: "2026",
      imagen: imgJavaFundamentals,
      enlace: "https://drive.google.com/file/d/1p2ptgwNC1AWMgWCr_HjGGwnWIVwoPDoY/view?usp=sharing"
    },
    {
      id: 4,
      titulo: "Java Fundations",
      institucion: "Oracle",
      descripcion: "Conceptos clave de desarrollo de software en Java, manejo de clases, objetos, arreglos y estructuras de datos avanzadas.",
      fecha: "2026",
      imagen: imgJavaFundations,
      enlace: "https://drive.google.com/file/d/1p2ptgwNC1AWMgWCr_HjGGwnWIVwoPDoY/view?usp=sharing"
    }
  ];

  return (
    <section id="certificaciones" className="certificaciones-section">
      <div className="certificaciones-container">
        <h2 className="section-title text-center">Certificaciones</h2>
        <div className="certificaciones-grid">
          {certificacionesData.map((cert) => (
            <div key={cert.id} className="cert-card">
              
              {/* Vista previa de la imagen local */}
              <div className="cert-image-container">
                <img src={cert.imagen} alt={`Certificado ${cert.titulo}`} className="cert-preview-img" />
                <span className="cert-badge-floating">{cert.fecha}</span>
              </div>
              
              <div className="cert-body">
                <h3 className="cert-title">{cert.titulo}</h3>
                <h4 className="cert-inst">{cert.institucion}</h4>
                <p className="cert-desc">{cert.descripcion}</p>
              </div>

              <div className="cert-footer">
                <a href={cert.enlace} target="_blank" rel="noopener noreferrer" className="btn-cert">
                  Ver Credencial Completa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificaciones;