import { Component, Input } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-tarea1',
  standalone: true,
  imports: [],
  templateUrl: './tarea1.component.html',
  styleUrl: './tarea1.component.css'
})
export class Tarea1Component {
  @Input() tarea: Tarea | undefined;
  /* Con any o undefined hacemos que tarea deje de ser un problema al no tener inicializador
  y no estar asignada de forma definitiva en el constructor.
  Con Input hace que lo que le llegue le llega de fuera, del contenedor, que tiene acceso
  al servicio
  El atributo "tarea" viene de fuera, que es de tipo Tarea*/
}
