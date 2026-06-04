class Project {
  constructor({ id, nombre, descripcion, progreso }) {
    this.id = id || Date.now().toString();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.progreso = progreso || 0;
  }

  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      progreso: this.progreso
    };
  }

  static fromJSON(json) {
    return new Project(json);
  }
}

export default Project;
