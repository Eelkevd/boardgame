import { Injectable, signal } from '@angular/core';
import { Tile } from '../models/Tile';
import { TileService } from './tile.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerMovementTrackerService {
  currentTile = signal<Tile | null>(null);
  allTiles: Tile[] = [];

  constructor() {
    // this.tileService
  }

  setTiles(tiles: Tile[]) {
    this.allTiles = tiles;
    
    if (tiles.length > 0) {
      this.currentTile.set(tiles[0])
    }

    // console.log(this.currentTile())
  }

  // Function to upgrade current tile
  moveToTile() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const current = this.currentTile();
    const currentIndexPosition = this.allTiles.findIndex(t => t.tileId === current?.tileId)
    const newIndexPosition = currentIndexPosition + diceRoll;

    if(newIndexPosition < this.allTiles.length) {
      this.currentTile.set(this.allTiles[newIndexPosition]);
    }

    console.log("player rolled a:", diceRoll)
    console.log(this.currentTile())
  };
}
