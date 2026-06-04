import { upcomingEvents } from '../data/sampleData';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const getEventTypeIcon = (type) => {
    const icons = {
      evaluation: '📝',
      project: '📁',
      meeting: '👥',
      competition: '🏆',
    };
    return icons[type] || '📌';
  };

  return (
    <div className="card upcoming-events">
      <h2 className="section-title">Próximos Eventos</h2>
      <div className="events-list">
        {upcomingEvents.map((event, index) => (
          <div key={event.id} className="event-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="event-icon" style={{ backgroundColor: `${event.color}20` }}>
              <span style={{ color: event.color }}>{getEventTypeIcon(event.type)}</span>
            </div>
            <div className="event-content">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-date text-sm text-secondary">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
