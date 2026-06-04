import Task from '../models/Task';
import storageService from './storageService';

const STORAGE_KEY = 'tasks';

export const taskService = {
  getAll() {
    const data = storageService.getItem(STORAGE_KEY) || [];
    return data.map(item => Task.fromJSON(item));
  },

  getById(id) {
    const tasks = this.getAll();
    return tasks.find(task => task.id === id) || null;
  },

  getByProject(projectId) {
    const tasks = this.getAll();
    return tasks.filter(task => task.proyecto === projectId);
  },

  create(taskData) {
    const task = new Task(taskData);
    const tasks = this.getAll();
    tasks.push(task);
    storageService.setItem(STORAGE_KEY, tasks.map(t => t.toJSON()));
    return task;
  },

  update(id, updates) {
    const tasks = this.getAll();
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return null;
    
    const updatedTask = new Task({
      ...tasks[index].toJSON(),
      ...updates,
      id
    });
    
    tasks[index] = updatedTask;
    storageService.setItem(STORAGE_KEY, tasks.map(t => t.toJSON()));
    return updatedTask;
  },

  delete(id) {
    const tasks = this.getAll();
    const filtered = tasks.filter(task => task.id !== id);
    storageService.setItem(STORAGE_KEY, filtered.map(t => t.toJSON()));
    return true;
  },

  deleteByProject(projectId) {
    const tasks = this.getAll();
    const filtered = tasks.filter(task => task.proyecto !== projectId);
    storageService.setItem(STORAGE_KEY, filtered.map(t => t.toJSON()));
    return true;
  },

  seedDefaultData() {
    const existing = this.getAll();
    if (existing.length > 0) return;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    const defaultTasks = [
      new Task({
        id: '1',
        titulo: 'Estudiar matemáticas',
        descripcion: 'Preparar evaluación del viernes',
        fecha: tomorrow.toISOString().split('T')[0],
        prioridad: 'alta',
        proyecto: '4'
      }),
      new Task({
        id: '2',
        titulo: 'Finalizar módulo de IA',
        descripcion: 'Completar integración del chatbot',
        fecha: tomorrow.toISOString().split('T')[0],
        prioridad: 'alta',
        proyecto: '1'
      }),
      new Task({
        id: '3',
        titulo: 'Revisar diseño UI',
        descripcion: 'Aprobar mockups del dashboard',
        fecha: dayAfter.toISOString().split('T')[0],
        prioridad: 'media',
        proyecto: '2'
      }),
      new Task({
        id: '4',
        titulo: 'Documentar API',
        descripcion: 'Escribir documentación técnica',
        fecha: dayAfter.toISOString().split('T')[0],
        prioridad: 'baja',
        proyecto: '3'
      })
    ];

    storageService.setItem(STORAGE_KEY, defaultTasks.map(t => t.toJSON()));
  }
};

export default taskService;
