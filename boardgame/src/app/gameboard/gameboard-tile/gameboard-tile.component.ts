import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gameboard-tile',
  imports: [CommonModule],
  templateUrl: './gameboard-tile.component.html',
  styleUrl: './gameboard-tile.component.scss'
})
export class GameboardTileComponent {
  @Input() tileNumber!: number;
  @Input() tileId!: string;
  @Input() tileName!: string;
  @Input() tileEffect!: string;

  // getTileName(): string {
  //   switch (this.tileName) {
  //     case 'pitfall':
  //       return 'tile'
  //   }
  // }
}

