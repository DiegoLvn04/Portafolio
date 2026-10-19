// src/components/Habilidades/Habilidades.jsx
import './Habilidades.css';

const Habilidades = () => {
  // Datos categorizados y optimizados
  const categorias = [
    {
      id: "frontend",
      titulo: "Frontend & Diseño",
      skills: [
        { nombre: "React", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { nombre: "JavaScript", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { nombre: "CSS Grid / Flexbox", nivel: "Experto", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { nombre: "Bootstrap", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      id: "backend",
      titulo: "Backend & Móvil",
      skills: [
        { nombre: "Java", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { nombre: "Python", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { nombre: "Laravel", nivel: "Intermedio", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { nombre: "Android Studio", nivel: "Intermedio", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
      ]
    },
    {
      id: "database",
      titulo: "Bases de Datos",
      skills: [
        { nombre: "Oracle DB", nivel: "Certificado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { nombre: "MySQL", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { nombre: "PostgreSQL", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { nombre: "SQL Server", nivel: "Intermedio", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
      ]
    },
    {
      id: "tools",
      titulo: "Herramientas & BI",
      skills: [
        { nombre: "Git & GitHub", nivel: "Avanzado", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { nombre: "Power BI", nivel: "Avanzado", icono: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg" },
        { nombre: "Excel / VBA", nivel: "Experto", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        
        <h2 className="section-title text-center">
          Habilidades <span className="text-gradient">Técnicas</span>
        </h2>

        {/* Mapeo de Categorías */}
        <div className="categorias-grid">
          {categorias.map((cat) => (
            <div key={cat.id} className="categoria-card">
              <h3 className="categoria-titulo">{cat.titulo}</h3>
              
              <div className="skills-compact-grid">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icono} alt={skill.nombre} className="skill-icon-img" />
                    <div className="skill-info">
                      <span className="skill-name">{skill.nombre}</span>
                      <span className="skill-level">{skill.nivel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Habilidades;