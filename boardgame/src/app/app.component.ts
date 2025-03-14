import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GameOptionsMenuComponent } from './game-options-menu/game-options-menu.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameboardComponent, GameOptionsMenuComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tileCount: number = 10;
  showMenu: boolean = false;

  updateTileCount(newCount: number) {
    this.tileCount = newCount;
  }
  // title = 'boardgame';

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
