import './DashboardCard.css';

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className="dashboard-card fade-in">
      <div className="dashboard-card-header">
        <div className="dashboard-card-icon" style={{ backgroundColor: `${color}20` }}>
          <span style={{ color }}>{icon}</span>
        </div>
      </div>
      <div className="dashboard-card-content">
        <h3 className="dashboard-card-value">{value}</h3>
        <p className="dashboard-card-title text-secondary">{title}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
