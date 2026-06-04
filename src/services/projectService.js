import Project from '../models/Project';
import storageService from './storageService';

const STORAGE_KEY = 'projects';

export const projectService = {
  getAll() {
    const data = storageService.getItem(STORAGE_KEY) || [];
    return data.map(item => Project.fromJSON(item));
  },

  getById(id) {
    const projects = this.getAll();
    return projects.find(project => project.id === id) || null;
  },

  create(projectData) {
    const project = new Project(projectData);
    const projects = this.getAll();
    projects.push(project);
    storageService.setItem(STORAGE_KEY, projects.map(p => p.toJSON()));
    return project;
  },

  update(id, updates) {
    const projects = this.getAll();
    const index = projects.findIndex(project => project.id === id);
    if (index === -1) return null;
    
    const updatedProject = new Project({
      ...projects[index].toJSON(),
      ...updates,
      id
    });
    
    projects[index] = updatedProject;
    storageService.setItem(STORAGE_KEY, projects.map(p => p.toJSON()));
    return updatedProject;
  },

  delete(id) {
    const projects = this.getAll();
    const filtered = projects.filter(project => project.id !== id);
    storageService.setItem(STORAGE_KEY, filtered.map(p => p.toJSON()));
    return true;
  },

  seedDefaultData() {
    const existing = this.getAll();
    if (existing.length > 0) return;

    const defaultProjects = [
      new Project({
        id: '1',
        nombre: 'Educabot',
        descripcion: 'Asistente educativo inteligente',
        progreso: 65
      }),
      new Project({
        id: '2',
        nombre: 'Samsung',
        descripcion: 'Proyecto de innovación tecnológica',
        progreso: 40
      }),
      new Project({
        id: '3',
        nombre: 'EYSTEM',
        descripcion: 'Sistema de gestión educativa',
        progreso: 80
      }),
      new Project({
        id: '4',
        nombre: 'Escuela',
        descripcion: 'Organización académica general',
        progreso: 55
      })
    ];

    storageService.setItem(STORAGE_KEY, defaultProjects.map(p => p.toJSON()));
  }
};

export default projectService;
