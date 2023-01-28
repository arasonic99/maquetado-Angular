import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  constructor(private datos: DatosService) { }
  experiencia: any = [];
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.experiencia = data.experiencia;
    })
  }
  
}
