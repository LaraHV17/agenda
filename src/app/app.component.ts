import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PieComponent } from "./components/pie/pie.component";
import { ContenedorComponent } from "./components/contenedor/contenedor.component";
import { Tarea1Component } from "./components/tarea1/tarea1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, FormularioComponent, PieComponent, Tarea1Component, ContenedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agenda';
}
