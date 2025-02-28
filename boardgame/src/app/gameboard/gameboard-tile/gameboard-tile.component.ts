import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gameboard-tile',
  imports: [],
  templateUrl: './gameboard-tile.component.html',
  styleUrl: './gameboard-tile.component.scss'
})
export class GameboardTileComponent {
  @Input() tileId!: number;
  @Input() tileDescription!: string;
}
