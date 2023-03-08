export class Estudios {
    id: number;
    titulo: string;
    institucion: string;
    descripcion: string;
    imagen: string;

    constructor(titulo:string, institucion:string, descripcion:string, imagen:string) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}