import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {

  constructor(private datos: DatosService) { }
  info: any = [];
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.info = data.info;
    })
  }
  
}