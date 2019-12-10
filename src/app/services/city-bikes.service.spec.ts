import { TestBed } from '@angular/core/testing';
import { CityBikesService } from './city-bikes.service';

describe('CityBikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityBikesService = TestBed.get(CityBikesService);
    expect(service).toBeTruthy();
  });
});