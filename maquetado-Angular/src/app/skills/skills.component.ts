import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  constructor(private datos: DatosService) { }
  skills: any = [];
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.skills = data.skills;
    })
  }
  
}