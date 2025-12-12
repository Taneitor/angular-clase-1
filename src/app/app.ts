import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  parrafo = "Soy victor Vincitorio, quiero aprender angular porque es uno de los frameworks mas utilizados y creo que es una buena tecnologia para aprender!"
  texto = "Apreta el boton para cambiarme!"
  cambiar(){
    alert("el texto ha sido cambiado!")
    this.texto = "cambie!"
  }
}
