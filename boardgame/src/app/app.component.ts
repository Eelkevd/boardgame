import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameboardComponent } from './gameboard/gameboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'boardgame';
}
