import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { menu } from './shared/menu/menu';

@Component({
  imports: [RouterOutlet, Footer, menu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = 'Formula 1';
}
