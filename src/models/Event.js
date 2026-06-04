class Event {
  constructor({ id, titulo, fecha, lugar, proyecto }) {
    this.id = id || Date.now().toString();
    this.titulo = titulo;
    this.fecha = fecha;
    this.lugar = lugar;
    this.proyecto = proyecto;
  }

  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      fecha: this.fecha,
      lugar: this.lugar,
      proyecto: this.proyecto
    };
  }

  static fromJSON(json) {
    return new Event(json);
  }
}

export default Event;
