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
}
