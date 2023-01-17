import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PanelComponent } from './panel/panel.component';
import { ErrorComponent } from './error/error.component';
import { InfoComponent } from './info/info.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { RedesPanelComponent } from './panel/redes-panel/redes-panel.component';
import { BannerPanelComponent } from './panel/banner-panel/banner-panel.component';
import { InfoPanelComponent } from './panel/info-panel/info-panel.component';
import { EducPanelComponent } from './panel/educ-panel/educ-panel.component';
import { ExpPanelComponent } from './panel/exp-panel/exp-panel.component';
import { SkillsPanelComponent } from './panel/skills-panel/skills-panel.component';
import { ProyecPanelComponent } from './panel/proyec-panel/proyec-panel.component';
import { MenuPanelComponent } from './panel/menu-panel/menu-panel.component';
import { TabcontPanelComponent } from './panel/tabcont-panel/tabcont-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    BannerComponent,
    LoginComponent,
    RegistroComponent,
    PanelComponent,
    ErrorComponent,
    InfoComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    RedesPanelComponent,
    BannerPanelComponent,
    InfoPanelComponent,
    EducPanelComponent,
    ExpPanelComponent,
    SkillsPanelComponent,
    ProyecPanelComponent,
    MenuPanelComponent,
    TabcontPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
