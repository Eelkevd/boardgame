import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  tileCount = signal<number>(10);

  setTileCount(count: number) {
    this.tileCount.set(count);
  };
}
