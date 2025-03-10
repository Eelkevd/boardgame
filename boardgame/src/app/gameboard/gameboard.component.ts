import { Component, Input } from '@angular/core';
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
  @Input() tileCount: number = 10;
  tiles: Tile[] = [];

  ngOnChanges() {
    this.generateTiles();
  }

  private generateTiles() {
    this.tiles = [];
    this.tiles.push(new Tile(1, "start-tile", "Start", "Begin your journey"))
    for (let i = 2; i <= this.tileCount; i++) {
      this.tiles.push(createTileAttributes(i));
    }
  }
}

function createTileAttributes(tileNumber: number): Tile {
  const tileName = ["pitfall", "forest", "merchant"]

  return new Tile(
    tileNumber,
    Math.random().toString(36).substring(2, 8),
    tileName[Math.floor(Math.random() * tileName.length)],
    "test"
  )
}
