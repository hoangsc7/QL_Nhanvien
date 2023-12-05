import { TestBed } from '@angular/core/testing';
import { nhanvienService } from './nhanvien.service';


describe('nhanvienService', () => {
  let service: nhanvienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(nhanvienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
