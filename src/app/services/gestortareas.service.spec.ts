import { TestBed } from '@angular/core/testing';

import { GestortareasService } from './gestortareas.service';

describe('GestortareasService', () => {
  let service: GestortareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestortareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
