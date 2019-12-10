import { TestBed } from '@angular/core/testing';
import { DayLightService } from './daylight.service';

describe('DayLightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayLightService = TestBed.get(DayLightService);
    expect(service).toBeTruthy();
  });
});