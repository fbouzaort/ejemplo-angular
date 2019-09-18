import { Component } from '@angular/core';
import { Tarea } from "./tarea";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{titulo}}</h1>
    <h2>Tareas</h2>
    <div>
      <ul class="tareas">
        <li *ngFor="let tarea of tareas" (click)=elegirTarea(tarea)><span>{{tarea.id}}</span> - {{tarea.tituloTarea}}</li>
      </ul>
    </div>
    <mi-tarea-detalle [tareaElegidaDetalle]=tareaElegida></mi-tarea-detalle>
  `,styles:[`
    .tareas {
      list-style-type:none;
    }
  `] 
  
})

export class AppComponent  { 
  titulo = 'Lista de Tareas';
  tareas = tareasLista;
  tareaElegida:Tarea;

  elegirTarea(_tarea:Tarea):void{
    this.tareaElegida = _tarea;
  }
}



const tareasLista:Tarea[] = [
  {id:1, tituloTarea:'Primera tarea'},
  {id:2, tituloTarea:'Segunda tarea'},
  {id:3, tituloTarea:'Tercera tarea'},
  {id:4, tituloTarea:'Cuarta tarea'},
  {id:5, tituloTarea:'Quinta tarea'},
  {id:7, tituloTarea:'Septima tarea'}
]

