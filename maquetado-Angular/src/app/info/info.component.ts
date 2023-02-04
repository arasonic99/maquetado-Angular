import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  nombresito: string = '';
  puestito: string = '';
  descripcioncita: string = '';
  imagencita: string = '';
  constructor(private datos: DatosService) { }
  
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombresito = data.nombre;
      this.puestito = data.puesto;
      this.descripcioncita = data.descripcion;
      this.imagencita = data.imagen;

    })
  }
}