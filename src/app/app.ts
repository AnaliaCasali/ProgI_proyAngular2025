import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VistaEstudiante } from './features/vista-estudiante/vista-estudiante';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { Login } from "./features/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VistaEstudiante, Header, Footer, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyAngular2025');
}
