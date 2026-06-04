import Header from '../components/Header';
import { calendarEvents } from '../data/sampleData';
import './CalendarScreen.css';

const CalendarScreen = () => {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="calendar-screen">
      <Header title="Calendario" />
      <main className="main-content">
        <div className="calendar-container">
          <div className="calendar-main">
            <div className="calendar-header">
              <button className="calendar-nav-btn">←</button>
              <h2 className="calendar-month">Junio 2024</h2>
              <button className="calendar-nav-btn">→</button>
            </div>

            <div className="calendar-grid">
              {days.map((day) => (
                <div key={day} className="calendar-day-header">
                  {day}
                </div>
              ))}
              {calendarDays.map((day) => {
                const dayEvents = calendarEvents.filter((e) => e.day === day);
                const isToday = day === 2;
                return (
                  <div
                    key={day}
                    className={`calendar-day ${isToday ? 'today' : ''} ${
                      dayEvents.length > 0 ? 'has-event' : ''
                    }`}
                  >
                    <span className="day-number">{day}</span>
                    {dayEvents.length > 0 && (
                      <div className="day-events">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className="day-event-dot"
                            style={{ backgroundColor: event.color }}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="events-sidebar">
            <div className="card">
              <h3 className="sidebar-title">Eventos del Día</h3>
              <div className="events-list">
                {calendarEvents.map((event) => (
                  <div key={event.id} className="sidebar-event">
                    <div
                      className="event-color-bar"
                      style={{ backgroundColor: event.color }}
                    ></div>
                    <div className="event-info">
                      <h4 className="event-name">{event.title}</h4>
                      <p className="event-time text-sm text-secondary">
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn btn-primary add-event-btn">
              ➕ Agregar Evento
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalendarScreen;
