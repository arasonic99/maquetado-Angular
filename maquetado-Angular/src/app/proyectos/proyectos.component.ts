import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  constructor(private datos: DatosService) { }
  proyecto: any = [];
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proyecto = data.proyecto;
    })
  }
  
}
