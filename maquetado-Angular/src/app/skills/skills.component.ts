import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  constructor(private datos: DatosService) { }
  skillUno: any = [];
  skillDos: any = [];
  skillTres: any = [];
  skillCuatro: any = [];
  skillCinco: any = [];

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.skillUno = data.skillUno;
      this.skillDos = data.skillDos;
      this.skillTres = data.skillTres;
      this.skillCuatro = data.skillCuatro;
      this.skillCinco = data.skillCinco;
    })
  }
  
}