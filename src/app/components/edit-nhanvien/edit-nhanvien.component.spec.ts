import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditnhanvienComponent } from './edit-nhanvien.component';

describe('EditnhanvienComponent', () => {
  let component: EditnhanvienComponent;
  let fixture: ComponentFixture<EditnhanvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditnhanvienComponent]
    });
    fixture = TestBed.createComponent(EditnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
