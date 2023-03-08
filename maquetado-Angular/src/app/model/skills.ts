export class Skills {
    id: number;
    nombre: string;
    progreso: string;

    constructor(nombre:string, progreso:string) {
        this.nombre = nombre;
        this.progreso = progreso;
    }
}