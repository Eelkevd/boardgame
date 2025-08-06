import { Component, computed } from '@angular/core';
import { PlayerMovementTrackerService } from '../../services/player-movement-tracker.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  constructor(private playerMovementTrackerService: PlayerMovementTrackerService) {}

  currentTile = computed(() => this.playerMovementTrackerService.currentTile());
  tileIndex = computed(() => this.playerMovementTrackerService.getTileIndex());

  getPlayerStyle() {
    const index = this.tileIndex();
    const totalSize = 100 + 10;
    const tilesPerRow = 10;

    const x = (index % tilesPerRow) * totalSize;
    const y = Math.floor(index / tilesPerRow) * totalSize;
    console.log('index:', index, 'x:', x, 'y:', y);
    return {
      transform: `translate(${x}px, ${y}px)`
    }
  }
}
