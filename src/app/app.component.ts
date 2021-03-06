import { Component, OnInit } from "@angular/core";
import { Tarea } from "./tarea";
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { map } from "rxjs/operator/map";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styles: [
    `
      .tareas {
        list-style-type: none;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  titulo = "Lista de Tareas";
  tareas = tareasLista;
  usuarios: any = [];
  tareaElegida: Tarea;

  ngOnInit() {
    this.refreshUsers();
  }

  constructor(private http: Http) {}

  elegirTarea(_tarea: Tarea): void {
    this.tareaElegida = _tarea;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const { value: body } = form;
    this.http
      .post("http://user-api-pja.herokuapp.com/api/user", body)
      .subscribe(res => {
        console.log(res);
        this.refreshUsers();
      });
  }

  refreshUsers() {
    this.http
      .get("http://user-api-pja.herokuapp.com/api/user")
      .subscribe(res => {
        this.usuarios = res.json();
      });
  }
}

const tareasLista: Tarea[] = [
  { id: 1, tituloTarea: "Primera tarea" },
  { id: 2, tituloTarea: "Segunda tarea" },
  { id: 3, tituloTarea: "Tercera tarea" },
  { id: 4, tituloTarea: "Cuarta tarea" },
  { id: 5, tituloTarea: "Quinta tarea" },
  { id: 7, tituloTarea: "Septima tarea" }
];
