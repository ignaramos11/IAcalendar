import Header from '../components/Header';
import './SettingsScreen.css';

const SettingsScreen = () => {
  const settingsSections = [
    {
      title: 'Perfil',
      icon: '👤',
      items: [
        { label: 'Editar perfil', hasArrow: true },
        { label: 'Cambiar foto', hasArrow: true },
      ],
    },
    {
      title: 'Notificaciones',
      icon: '🔔',
      items: [
        { label: 'Recordatorios de tareas', hasToggle: true, isOn: true },
        { label: 'Notificaciones por email', hasToggle: true, isOn: false },
        { label: 'Alertas de eventos', hasToggle: true, isOn: true },
      ],
    },
    {
      title: 'Apariencia',
      icon: '🎨',
      items: [
        { label: 'Modo oscuro', hasToggle: true, isOn: false },
        { label: 'Tema de color', hasArrow: true },
      ],
    },
    {
      title: 'Datos',
      icon: '💾',
      items: [
        { label: 'Exportar datos', hasArrow: true },
        { label: 'Borrar cuenta', hasArrow: true, isDanger: true },
      ],
    },
  ];

  return (
    <div className="settings-screen">
      <Header title="Configuración" />
      <main className="main-content">
        <div className="settings-container">
          {settingsSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="settings-section card">
              <div className="section-header">
                <span className="section-icon">{section.icon}</span>
                <h3 className="section-title">{section.title}</h3>
              </div>
              <div className="section-items">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`settings-item ${
                      item.isDanger ? 'danger-item' : ''
                    }`}
                  >
                    <span className="item-label">{item.label}</span>
                    {item.hasArrow && <span className="item-arrow">→</span>}
                    {item.hasToggle && (
                      <div className={`toggle ${item.isOn ? 'on' : ''}`}>
                        <div className="toggle-knob"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SettingsScreen;
