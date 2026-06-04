class Task {
  constructor({ id, titulo, descripcion, fecha, prioridad, proyecto }) {
    this.id = id || Date.now().toString();
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.prioridad = prioridad || 'media';
    this.proyecto = proyecto;
  }

  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.fecha,
      prioridad: this.prioridad,
      proyecto: this.proyecto
    };
  }

  static fromJSON(json) {
    return new Task(json);
  }
}

export default Task;
