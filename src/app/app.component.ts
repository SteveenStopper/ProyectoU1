import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameCodeComponent } from './game-code/game-code.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoU1';
}
