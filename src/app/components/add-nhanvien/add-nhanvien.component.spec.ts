import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnhanvienComponent } from './add-nhanvien.component';


describe('AddnhanvienvienComponent', () => {
  let component: AddnhanvienComponent;
  let fixture: ComponentFixture<AddnhanvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnhanvienComponent]
    });
    fixture = TestBed.createComponent(AddnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
