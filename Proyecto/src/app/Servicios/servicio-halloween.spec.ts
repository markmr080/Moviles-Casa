import { TestBed } from '@angular/core/testing';
import { ServicioHalloween } from './servicio-halloween';


describe('ServicioHalloween', () => {
  let service: ServicioHalloween;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHalloween);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
