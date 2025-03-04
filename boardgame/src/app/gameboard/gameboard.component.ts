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
  tiles: Tile[] = [];

  constructor() {
    // this.generateTiles(10)
  }

  private generateTiles(count: number) {
    for (let i = 1; i <= count; i++) {
      this.tiles.push(createTileAttributes(i));
    }
    console.log(this.tiles)
  }
}


function createTileAttributes(tileNumber: number): Tile {
  const tileName = ["start", "pitfall", "forest", "merchant"]

  return new Tile(
    tileNumber,
    Math.random().toString(36).substring(2, 8),
    tileName[Math.floor(Math.random() * tileName.length)],
    "test"
  )
}
