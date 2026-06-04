import Event from '../models/Event';
import storageService from './storageService';

const STORAGE_KEY = 'events';

export const eventService = {
  getAll() {
    const data = storageService.getItem(STORAGE_KEY) || [];
    return data.map(item => Event.fromJSON(item));
  },

  getById(id) {
    const events = this.getAll();
    return events.find(event => event.id === id) || null;
  },

  getByProject(projectId) {
    const events = this.getAll();
    return events.filter(event => event.proyecto === projectId);
  },

  getByDate(date) {
    const events = this.getAll();
    return events.filter(event => event.fecha === date);
  },

  create(eventData) {
    const event = new Event(eventData);
    const events = this.getAll();
    events.push(event);
    storageService.setItem(STORAGE_KEY, events.map(e => e.toJSON()));
    return event;
  },

  update(id, updates) {
    const events = this.getAll();
    const index = events.findIndex(event => event.id === id);
    if (index === -1) return null;
    
    const updatedEvent = new Event({
      ...events[index].toJSON(),
      ...updates,
      id
    });
    
    events[index] = updatedEvent;
    storageService.setItem(STORAGE_KEY, events.map(e => e.toJSON()));
    return updatedEvent;
  },

  delete(id) {
    const events = this.getAll();
    const filtered = events.filter(event => event.id !== id);
    storageService.setItem(STORAGE_KEY, filtered.map(e => e.toJSON()));
    return true;
  },

  deleteByProject(projectId) {
    const events = this.getAll();
    const filtered = events.filter(event => event.proyecto !== projectId);
    storageService.setItem(STORAGE_KEY, filtered.map(e => e.toJSON()));
    return true;
  },

  seedDefaultData() {
    const existing = this.getAll();
    if (existing.length > 0) return;

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    const defaultEvents = [
      new Event({
        id: '1',
        titulo: 'Clase de Programación',
        fecha: today.toISOString().split('T')[0],
        lugar: 'Aula 301',
        proyecto: '1'
      }),
      new Event({
        id: '2',
        titulo: 'Reunión Educabot',
        fecha: today.toISOString().split('T')[0],
        lugar: 'Sala de conferencias',
        proyecto: '1'
      }),
      new Event({
        id: '3',
        titulo: 'Examen de Matemáticas',
        fecha: tomorrow.toISOString().split('T')[0],
        lugar: 'Aula 205',
        proyecto: '4'
      }),
      new Event({
        id: '4',
        titulo: 'Entrega Proyecto Samsung',
        fecha: nextWeek.toISOString().split('T')[0],
        lugar: 'Online',
        proyecto: '2'
      })
    ];

    storageService.setItem(STORAGE_KEY, defaultEvents.map(e => e.toJSON()));
  }
};

export default eventService;
