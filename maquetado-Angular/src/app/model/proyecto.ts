export class Proyecto {
    id: number;
    proyecto: string;
    url: string;
    about: string;
    pic: string;

    constructor(proyecto:string, url:string, about:string, pic:string) {
        this.proyecto = proyecto;
        this.url = url;
        this.about = about;
        this.pic = pic;
    }
}