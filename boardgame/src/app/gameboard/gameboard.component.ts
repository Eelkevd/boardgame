import { Component, computed, effect, Signal } from '@angular/core';
import { GameboardTileComponent } from './gameboard-tile/gameboard-tile.component';
import { CommonModule } from '@angular/common';
import { Tile } from '../../models/Tile';
import { TileService } from '../../services/tile.service';
import { PlayerMovementTrackerService } from '../../services/player-movement-tracker.service';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-gameboard',
  imports: [GameboardTileComponent, PlayerComponent, CommonModule],
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss'
})
export class GameboardComponent {
  tileCount!: Signal<number>;
  tiles: Tile[] = [];
  // readonly tileCountComputed = computed(() => this.tileCount());

  constructor(
    private tileService: TileService,
    private playerMovementTrackerService: PlayerMovementTrackerService
  ) {
    this.tileCount = this.tileService.tileCount;
    effect(() => {
      const count = this.tileCount();
      this.generateTiles(count);
    })
  }

  ngOnInit() { }

  private generateTiles(count: number) {
    this.tiles = [];
    this.tiles.push(new Tile(1, "start-tile", "Start", "Begin your journey"));

    for (let i = 2; i <= count; i++) {
      this.tiles.push(createTileAttributes(i));
    }

    this.playerMovementTrackerService.moveToTile(this.tiles[0]);
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
  );
}
