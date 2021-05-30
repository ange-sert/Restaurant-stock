import { TestBed } from '@angular/core/testing';

import { Beefstew1pieceService } from './beefstew1piece.service';

describe('Beefstew1pieceService', () => {
  let service: Beefstew1pieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Beefstew1pieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
