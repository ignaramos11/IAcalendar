import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BottomNavigation from './components/BottomNavigation';
import HomeScreen from './screens/HomeScreen';
import AssistantScreen from './screens/AssistantScreen';
import CalendarScreen from './screens/CalendarScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { initializeApp } from './services';
import './styles/global.css';
import './App.css';

function App() {
  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/asistente" element={<AssistantScreen />} />
            <Route path="/calendario" element={<CalendarScreen />} />
            <Route path="/proyectos" element={<ProjectsScreen />} />
            <Route path="/configuracion" element={<SettingsScreen />} />
          </Routes>
        </div>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
