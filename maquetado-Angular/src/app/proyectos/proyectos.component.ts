import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  "proyecto": string = '';
  "url": string = '';
  "about": string = '';
  "pic": string = '';
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proyecto = data.proyecto;
      this.url = data.url;
      this.about = data.about;
      this.pic = data.pic;

    })
  }
}

