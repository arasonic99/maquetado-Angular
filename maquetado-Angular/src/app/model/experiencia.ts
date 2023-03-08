export class Experiencia {
    id: number;
    experiencia: string;
    periodo: string;

    constructor(experiencia:string, periodo:string) {
        this.experiencia = experiencia;
        this.periodo = periodo;
    }
}