export class Persona {
    id: number;
    nombre: string;
    puesto: string;
    descripcion: string;
    imagen: string;

    constructor(nombre:string, puesto:string, descripcion:string, imagen:string) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}