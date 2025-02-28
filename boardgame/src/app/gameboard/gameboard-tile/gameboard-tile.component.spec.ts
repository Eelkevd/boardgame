import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboardTileComponent } from './gameboard-tile.component';

describe('GameboardTileComponent', () => {
  let component: GameboardTileComponent;
  let fixture: ComponentFixture<GameboardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameboardTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
