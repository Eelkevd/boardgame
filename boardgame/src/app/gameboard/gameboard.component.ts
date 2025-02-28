import { Component } from '@angular/core';
import { GameboardTileComponent } from './gameboard-tile/gameboard-tile.component';
import { CommonModule } from '@angular/common';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-gameboard',
  imports: [GameboardTileComponent, CommonModule],
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss'
})
export class GameboardComponent {
  tiles: Tile[] = [
    new Tile(1, "start"),
    new Tile(2, "pitfall")
  ];
}
