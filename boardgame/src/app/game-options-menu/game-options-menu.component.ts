import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TileService } from '../../services/tile.service';

@Component({
  selector: 'app-game-options-menu',
  imports: [FormsModule],
  templateUrl: './game-options-menu.component.html',
  styleUrl: './game-options-menu.component.scss'
})
export class GameOptionsMenuComponent {
  tileCount!: number;

  constructor(private tileService: TileService) {
    this.tileCount = this.tileService.tileCount();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.tileService.setTileCount(this.tileCount);
  }
}
