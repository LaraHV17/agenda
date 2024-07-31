import { Component } from '@angular/core';
import { Tarea1Component } from "../tarea1/tarea1.component";
import { GestortareasService } from '../../services/gestortareas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [Tarea1Component, CommonModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  constructor(public gestorTareas: GestortareasService) {

  }
}
