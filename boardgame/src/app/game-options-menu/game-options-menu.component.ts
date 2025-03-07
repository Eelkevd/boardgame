import { Component, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-game-options-menu',
  imports: [],
  templateUrl: './game-options-menu.component.html',
  styleUrl: './game-options-menu.component.scss'
})
export class GameOptionsMenuComponent {
  @Output() tileCountChange: EventEmitter<number> = new EventEmitter<number>();
  tileCount: number = 10;

  onSubmit(event: Event) {
    event.preventDefault();
    this.tileCountChange.emit(this.tileCount);
  }
}
