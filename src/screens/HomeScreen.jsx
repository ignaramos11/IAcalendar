import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { projectService, eventService, taskService } from '../services';
import './HomeScreen.css';

const HomeScreen = () => {
  const [projects, setProjects] = useState([]);
  const [todayEvents, setTodayEvents] = useState([]);
  const [upcomingEvaluations, setUpcomingEvaluations] = useState([]);
  const [upcomingDeliveries, setUpcomingDeliveries] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const allProjects = projectService.getAll();
    setProjects(allProjects);

    const today = new Date().toISOString().split('T')[0];
    const allEvents = eventService.getByDate(today);
    setTodayEvents(allEvents);

    const allTasks = taskService.getAll();
    const highPriority = allTasks.filter(task => task.prioridad === 'alta').slice(0, 3);
    setUpcomingEvaluations(highPriority.map(task => ({
      id: task.id,
      title: task.titulo,
      subject: allProjects.find(p => p.id === task.proyecto)?.nombre || 'General',
      date: task.fecha
    })));

    const otherTasks = allTasks.filter(task => task.prioridad !== 'alta').slice(0, 3);
    setUpcomingDeliveries(otherTasks.map(task => ({
      id: task.id,
      title: task.titulo,
      subject: allProjects.find(p => p.id === task.proyecto)?.nombre || 'General',
      date: task.fecha
    })));
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 19) return 'Buenas tardes';
    return 'Buenas noches';
  };

  return (
    <div className="home-screen">
      <Header title="Inicio" />
      <main className="main-content">
        <div className="greeting-section fade-in">
          <h1 className="greeting">{getGreeting()}, Nacho</h1>
          <p className="greeting-subtitle">Organiza tu día y alcanza tus objetivos</p>
        </div>

        <div className="today-section fade-in">
          <div className="section-header">
            <h2 className="section-title">Hoy</h2>
          </div>
          
          <div className="today-grid">
            <div className="today-card">
              <div className="card-header">
                <div className="card-icon" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#6366f1' }}>
                  📅
                </div>
                <h3 className="card-title">Eventos de hoy</h3>
              </div>
              <div className="card-content">
                {todayEvents.length > 0 ? (
                  todayEvents.map((event) => (
                    <div key={event.id} className="event-item">
                      <div className="event-dot" style={{ background: '#6366f1' }}></div>
                      <div className="event-info">
                        <span className="event-title">{event.titulo}</span>
                        <span className="event-time">{event.lugar}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-secondary text-sm">No hay eventos hoy</p>
                )}
              </div>
            </div>

            <div className="today-card">
              <div className="card-header">
                <div className="card-icon" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' }}>
                  📊
                </div>
                <h3 className="card-title">Próximas evaluaciones</h3>
              </div>
              <div className="card-content">
                {upcomingEvaluations.length > 0 ? (
                  upcomingEvaluations.map((evalItem) => (
                    <div key={evalItem.id} className="event-item">
                      <div className="event-dot" style={{ background: '#f59e0b' }}></div>
                      <div className="event-info">
                        <span className="event-title">{evalItem.title}</span>
                        <span className="event-sub">{evalItem.subject} • {evalItem.date}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-secondary text-sm">No hay evaluaciones próximas</p>
                )}
              </div>
            </div>

            <div className="today-card">
              <div className="card-header">
                <div className="card-icon" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981' }}>
                  📦
                </div>
                <h3 className="card-title">Próximas entregas</h3>
              </div>
              <div className="card-content">
                {upcomingDeliveries.length > 0 ? (
                  upcomingDeliveries.map((delivery) => (
                    <div key={delivery.id} className="event-item">
                      <div className="event-dot" style={{ background: '#10b981' }}></div>
                      <div className="event-info">
                        <span className="event-title">{delivery.title}</span>
                        <span className="event-sub">{delivery.subject} • {delivery.date}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-secondary text-sm">No hay entregas próximas</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="ai-section fade-in">
          <div className="ai-card">
            <div className="ai-icon">✨</div>
            <div className="ai-content">
              <span className="ai-label">Recomendación IA</span>
              <p className="ai-text">Tienes 1 hora libre. Te recomiendo avanzar Educabot.</p>
            </div>
            <button className="ai-btn">Aceptar</button>
          </div>
        </div>

        <div className="objectives-section fade-in">
          <div className="section-header">
            <h2 className="section-title">Objetivos activos</h2>
          </div>
          
          <div className="objectives-grid">
            {projects.map((project, index) => {
              const colors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
              const color = colors[index % colors.length];
              return (
                <div key={project.id} className="objective-card">
                  <div className="objective-header">
                    <div className="objective-color" style={{ background: color }}></div>
                    <span className="objective-title">{project.nombre}</span>
                    <span className="objective-percent">{project.progreso}%</span>
                  </div>
                  <div className="objective-bar">
                    <div 
                      className="objective-progress" 
                      style={{ 
                        width: `${project.progreso}%`, 
                        background: color 
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
