import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: '🏠', label: 'Inicio' },
    { path: '/asistente', icon: '🤖', label: 'Asistente' },
    { path: '/calendario', icon: '📅', label: 'Calendario' },
    { path: '/proyectos', icon: '📁', label: 'Proyectos' },
    { path: '/configuracion', icon: '⚙️', label: 'Configuración' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🧠</span>
          <span className="logo-text">IANACHO</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <div className="user-name">Estudiante</div>
            <div className="user-role text-secondary text-sm">Usuario</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
