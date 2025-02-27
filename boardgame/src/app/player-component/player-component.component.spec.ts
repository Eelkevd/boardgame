import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponentComponent } from './player-component.component';

describe('PlayerComponentComponent', () => {
  let component: PlayerComponentComponent;
  let fixture: ComponentFixture<PlayerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
