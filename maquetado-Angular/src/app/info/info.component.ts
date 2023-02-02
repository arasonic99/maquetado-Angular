import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  constructor(private datos: DatosService) { }
  nombre: string = '';
  puesto: string = '';
  imagen: string = '';
  descripcionInicio: string = '';
  descripcionFin: string = '';
  
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.puesto = data.puesto;
      this.imagen = data.imagen;
      this.descripcionInicio = data.descripcionInicio;
      this.descripcionFin = data.descripcionFin;
    })
  }
}