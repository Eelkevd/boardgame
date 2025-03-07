import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GameOptionsMenuComponent } from './game-options-menu/game-options-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameboardComponent, GameOptionsMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tileCount: number = 10;

  updateTileCount(newCount: number) {
    this.tileCount = newCount;
  }
  title = 'boardgame';
}
