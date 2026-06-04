import { NavLink } from 'react-router-dom';
import './BottomNavigation.css';

const BottomNavigation = () => {
  const navItems = [
    { path: '/', icon: '🏠', label: 'Inicio' },
    { path: '/asistente', icon: '🤖', label: 'Asistente' },
    { path: '/calendario', icon: '📅', label: 'Calendario' },
    { path: '/proyectos', icon: '📁', label: 'Proyectos' },
    { path: '/configuracion', icon: '⚙️', label: 'Ajustes' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `bottom-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <span className="bottom-nav-icon">{item.icon}</span>
          <span className="bottom-nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavigation;
