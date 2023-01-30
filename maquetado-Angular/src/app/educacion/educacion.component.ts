import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudioUno: any;
  estudioDos: any;
  constructor(private datos: DatosService) { }
  
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.estudioUno = data.estudioUno;
      this.estudioDos = data.estudioDos;
    })
  }
}
