import { TestBed } from '@angular/core/testing';
import { TileService } from './tile.service';

describe('TileService', () => {
  let service: TileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tileCount start value should be 10', (done) => {
    service.tileCount.subscribe((count) => {
      expect(count).toBe(10);
      (done);
    });
  });

  it('change tile count when setTileCount is called', (done) => {
    service.setTileCount(15);

    service.tileCount.subscribe((count) => {
      expect(count).toBe(15);
      (done);
    });
  });
});
