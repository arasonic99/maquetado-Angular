import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  nombre: string = '';
  puesto: string = '';
  descripcion: string = '';
  imagen: string = '';
  constructor(private datos: DatosService) { }
  
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
    /*this.nombre = data.nombre;
      this.puesto = data.puesto;
      this.descripcion = data.descripcion;
      this.imagen = data.imagen;*/
      console.log(data)

    })
  }
}