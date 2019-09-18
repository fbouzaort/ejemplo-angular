import { FormsModule } from "@angular/forms";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TareaDetalleComponent } from "./tarea-detalle.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TareaDetalleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
