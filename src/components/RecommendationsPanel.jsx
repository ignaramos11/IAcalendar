import { recommendations } from '../data/sampleData';
import './RecommendationsPanel.css';

const RecommendationsPanel = () => {
  return (
    <div className="card recommendations-panel">
      <h2 className="section-title">Recomendaciones para Ti</h2>
      <div className="recommendations-list">
        {recommendations.map((rec, index) => (
          <div key={rec.id} className="recommendation-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="rec-icon">{rec.icon}</div>
            <div className="rec-content">
              <h4 className="rec-title">{rec.title}</h4>
              <p className="rec-description text-sm text-secondary">{rec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;
