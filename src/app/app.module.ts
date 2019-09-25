import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { TareaDetalleComponent } from "./tarea-detalle.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, TareaDetalleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
