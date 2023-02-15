import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skillsitos: any = [];

  constructor(private datos: DatosService) { }
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.skillsitos = data.skills;
    })
  }
  
}