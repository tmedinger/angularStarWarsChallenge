import { TestBed, inject } from '@angular/core/testing';

import { StarwarsDataService } from './starwars-data.service';

describe('StarwarsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarwarsDataService]
    });
  });

  it('should be created', inject([StarwarsDataService], (service: StarwarsDataService) => {
    expect(service).toBeTruthy();
  }));
});
