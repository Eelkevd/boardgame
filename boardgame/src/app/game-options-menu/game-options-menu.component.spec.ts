import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOptionsMenuComponent } from './game-options-menu.component';

describe('GameOptionsMenuComponent', () => {
  let component: GameOptionsMenuComponent;
  let fixture: ComponentFixture<GameOptionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOptionsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
