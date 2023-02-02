import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any = [];
  tituloUno: string = '';
  imagenUno: string = '';
  institucionUno: string = '';
  tituloDos: string = '';
  imagenDos: string = '';
  institucionDos: string = '';

  constructor(private datos: DatosService) { }
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.educacion = data.educacion;
      this.tituloUno = data.tituloUno;
      this.imagenUno = data.imagenUno;
      this.institucionUno = data.institucionUno;
      this.tituloDos = data.tituloDos;
      this.imagenDos = data.imagenDos;
      this.institucionDos = data.institucionDos;
    })
  }
}
