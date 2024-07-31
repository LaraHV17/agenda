import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class GestortareasService {
  tareas: Tarea[] = [];
  constructor() { }
  agregar(tarea: Tarea): void {
    //no retorna nada
    this.tareas.push(tarea); //ahora sí que está definido "tarea"
  }
}
