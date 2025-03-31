import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  private tileCountTracker = new BehaviorSubject<number>(10);
  tileCount = this.tileCountTracker.asObservable();

  setTileCount(count: number) {
    this.tileCountTracker.next(count);
  }
}
