export class EstadoActuacion {
  constructor(
    public nombreEstado: string,
    public comentario?: string,
    public activoEstado?: boolean,
    public id?: string
  ) {}
}
