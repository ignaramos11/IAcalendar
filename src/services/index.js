import projectService from './projectService';
import taskService from './taskService';
import eventService from './eventService';
import storageService from './storageService';

export const initializeApp = () => {
  projectService.seedDefaultData();
  taskService.seedDefaultData();
  eventService.seedDefaultData();
};

export {
  projectService,
  taskService,
  eventService,
  storageService
};
