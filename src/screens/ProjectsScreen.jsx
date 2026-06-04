import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/sampleData';
import './ProjectsScreen.css';

const ProjectsScreen = () => {
  const filterOptions = ['Todos', 'En Progreso', 'Completados', 'Pendientes'];

  return (
    <div className="projects-screen">
      <Header title="Proyectos" />
      <main className="main-content">
        <div className="projects-header">
          <div className="filter-buttons">
            {filterOptions.map((filter, index) => (
              <button
                key={filter}
                className={`filter-btn ${index === 0 ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="btn btn-primary">
            ➕ Nuevo Proyecto
          </button>
        </div>

        <div className="projects-grid-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          <div className="add-project-card">
            <div className="add-project-content">
              <div className="add-project-icon">➕</div>
              <p>Crear nuevo proyecto</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsScreen;
