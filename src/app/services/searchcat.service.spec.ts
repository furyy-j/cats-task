import { TestBed } from '@angular/core/testing';

import { SearchcatService } from './searchcat.service';

describe('SearchcatService', () => {
  let service: SearchcatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchcatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
