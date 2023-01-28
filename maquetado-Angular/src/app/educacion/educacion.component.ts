import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
estudios: any;

  constructor(private datos: DatosService) { }
  estudio: any = [];
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.estudio = data.estudio;
    })
  }
  
}
