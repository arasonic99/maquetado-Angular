import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private datos: DatosService) { }
  redes: any = [];
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.redes = data.redes;
    })
  }
  
}
