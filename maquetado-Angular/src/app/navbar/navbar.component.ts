import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(private datos: DatosService) { }
  redUno: any = [];
  redDos: any = [];
  redTres: any = [];
  
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.redUno = data.redUno;
      this.redDos = data.redDos;
      this.redTres = data.redTres;
    })
  }
  
}