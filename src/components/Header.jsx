import './Header.css';

const Header = ({ title }) => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">{title}</h1>
        <p className="header-date text-secondary text-sm">{currentDate}</p>
      </div>
      <div className="header-right">
        <button className="header-btn notification-btn">
          🔔
          <span className="notification-badge">3</span>
        </button>
        <button className="header-btn search-btn">🔍</button>
      </div>
    </header>
  );
};

export default Header;
