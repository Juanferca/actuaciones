
export class Central {
  constructor(
    public codigo: string,
    public nombreCentral: string,
    public provincia: string [],
    public zona: string,
    public distancia: number,
    public comentarioCentral?: string,
    public activo?: boolean,
    public id?: string
  ) {}
}
