import { Component } from '@angular/core';
import { GameboardTileComponent } from './gameboard-tile/gameboard-tile.component';
import { CommonModule } from '@angular/common';
import { Tile } from '../models/Tile';
import { TileService } from '../../services/tile.service';

@Component({
  selector: 'app-gameboard',
  imports: [GameboardTileComponent, CommonModule],
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss'
})
export class GameboardComponent {
  tileCount: number = 10;
  tiles: Tile[] = [];
  
  constructor(private tileService: TileService) {}

  ngOnInit() {
    this.tileService.tileCount.subscribe((count) => {
      this.tileCount = count;
      this.generateTiles();
    })
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
  const random = Math.random();
  let tileName: string;
  let tileEffect: string;

  if (random < 0.7) {
    tileName = "forest";
    tileEffect = "Beneficial effect";
  } else if (random < 0.9) {
    tileName = "pitfall";
    tileEffect = "0 to 6 damage, please roll the dice";
  } else {
    tileName = "merchant";
    tileEffect = "Buy or sell items";
  }

  return new Tile(
    tileNumber,
    Math.random().toString(36).substring(2, 8),
    tileName,
    tileEffect
  )
}
