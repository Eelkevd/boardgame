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
  @Output() tileCountChange: EventEmitter<number> = new EventEmitter<number>();
  tileCount: number = 10;

  constructor(private tileService: TileService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.tileService.setTileCount(this.tileCount);
  }
}
