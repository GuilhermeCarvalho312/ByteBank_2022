/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrasnferenciaService } from './trasnferencia.service';

describe('Service: TrasnferenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrasnferenciaService]
    });
  });

  it('should ...', inject([TrasnferenciaService], (service: TrasnferenciaService) => {
    expect(service).toBeTruthy();
  }));
});
