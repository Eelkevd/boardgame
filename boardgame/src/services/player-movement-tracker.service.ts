import { Injectable, signal } from '@angular/core';
import { Tile } from '../models/Tile';

@Injectable({
  providedIn: 'root'
})
export class PlayerMovementTrackerService {
  currentTile = signal<Tile | null>(null);

  constructor() { }

  // Function to upgrade current tile
  moveToTile(tile: Tile) {
    this.currentTile.set(tile);
  };
}
