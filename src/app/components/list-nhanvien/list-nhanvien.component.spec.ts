import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListnhanvienComponent } from './list-nhanvien.component';


describe('ListnhanvienComponent', () => {
  let component: ListnhanvienComponent;
  let fixture: ComponentFixture<ListnhanvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListnhanvienComponent]
    });
    fixture = TestBed.createComponent(ListnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
