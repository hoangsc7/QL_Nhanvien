import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { nhanvien } from 'src/app/models/nhanvien.model';
import { nhanvienService } from 'src/app/services/nhanvien.service';

@Component({
  selector: 'app-add-nhanvien',
  templateUrl: './add-nhanvien.component.html',
  styleUrls: ['./add-nhanvien.component.css'],
})
export class AddnhanvienComponent {
  nhanvien: nhanvien = {
    manv: '',
    tennhanvien: '',
    tenphongban: '',
    gioitinh: '',
    tuoi: 0,
  };
  submitted = false;

  constructor(
    private nhanvienService: nhanvienService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  saveTutorial(): void {
    const data = {
      manv: this.nhanvien.manv,
      tennhanvien: this.nhanvien.tennhanvien,
      tenphongban: this.nhanvien.tenphongban,
      gioitinh: this.nhanvien.gioitinh,
      tuoi: this.nhanvien.tuoi,
    };
    this.nhanvienService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/nhanvien']);
      },
      error: (e) => console.error(e),
    });
  }
  newTutorial(): void {
    this.submitted = false;
    this.nhanvien = {
      manv: '',
      tennhanvien: '',
      tenphongban: '',
      gioitinh: '',
      tuoi: 0,
    };
  }
}
