import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //línea añadida 1 para el ngModel - Import FormsModule
import { GestortareasService } from '../../services/gestortareas.service';
import { Tarea1Component } from '../tarea1/tarea1.component';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],//Línea añadida 2 para el ngModel - Import ngModule
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public nombre: string = "";
  public fecha: string = "";
  constructor(public gestorTareas: GestortareasService) {
    //estamos inyectando el servicio
  }
  crearTarea() {
    const nuevaTarea: Tarea = {
      nombre: this.nombre,//así le damos el valor del nombre
      fecha: this.fecha
    }
    //console.log("Creando tarea: " + this.nombre + " - " + this.fecha);
    this.gestorTareas.agregar(nuevaTarea);
  }

}
