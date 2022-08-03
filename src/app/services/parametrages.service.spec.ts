import { TestBed } from '@angular/core/testing';

import { ParametragesService } from './parametrages.service';

describe('ParametragesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametragesService = TestBed.get(ParametragesService);
    expect(service).toBeTruthy();
  });
});
