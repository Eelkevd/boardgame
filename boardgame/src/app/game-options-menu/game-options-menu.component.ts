import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-options-menu',
  imports: [FormsModule],
  templateUrl: './game-options-menu.component.html',
  styleUrl: './game-options-menu.component.scss'
})
export class GameOptionsMenuComponent {
  @Output() tileCountChange: EventEmitter<number> = new EventEmitter<number>();
  tileCount: number = 10;

  onSubmit(event: Event) {
    event.preventDefault();
    const parsedTileCount = Number(this.tileCount);
    if (!isNaN(parsedTileCount) && parsedTileCount > 0) {
      this.tileCountChange.emit(parsedTileCount);
    }
  }
}
