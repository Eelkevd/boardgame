import { TestBed } from '@angular/core/testing';

import { PlayerMovementTrackerService } from './player-movement-tracker.service';

describe('PlayerMovementTrackerService', () => {
  let service: PlayerMovementTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerMovementTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
