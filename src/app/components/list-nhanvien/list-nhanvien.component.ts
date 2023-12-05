import { Component } from '@angular/core';
import { nhanvien } from 'src/app/models/nhanvien.model';
import { nhanvienService } from 'src/app/services/nhanvien.service';

@Component({
  selector: 'app-list-nhanvien',
  templateUrl: './list-nhanvien.component.html',
  styleUrls: ['./list-nhanvien.component.css'],
})
export class ListnhanvienComponent {
  nhanviens?: nhanvien[];
  currentnhanvien: nhanvien = {};
  currentIndex = -1;
  title = '';

  searchTenphongban = '';
  searchTuoi: number | undefined;
  constructor(private nhanvienService: nhanvienService) {}

  ngOnInit(): void {
    this.retrievenhanvien();
  }

  retrievenhanvien(): void {
    this.nhanvienService.getAll().subscribe({
      next: (data) => {
        this.nhanviens = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  //Hàm tìm kiếm
  search(): void {
    // Kiểm tra nếu searchGiasach là undefined, thì gán giá trị mặc định là 0
    const tuoiValue= this.searchTuoi !== undefined ? this.searchTuoi : 0;
  
    this.nhanvienService
      .searchnhanvien(this.searchTenphongban, tuoiValue)
      .subscribe({
        next: (data) => {
          this.nhanviens = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  // search(): void {
  //   console.log('tenkhoa:', this.searchTenkhoa);
  //   console.log('diemtin:', this.searchDiemtin);
    
  //   const diemtinValue = this.searchDiemtin !== undefined ? this.searchDiemtin : 0;
  
  //   this.sinhvienService
  //     .searchsinhvien(this.searchTenkhoa, diemtinValue)
  //     .subscribe({
  //       next: (data) => {
  //         this.sinhviens = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e),
  //     });
  // }
  refreshList(): void {
    this.retrievenhanvien();
    this.currentnhanvien = {};
    this.currentIndex = -1;
  }

  setActivenhanvien(nhanvien: nhanvien, index: number): void {
    this.currentnhanvien = nhanvien;
    this.currentIndex = index;
  }
  deletenhanvien(i: any): void {
    this.nhanvienService.delete(i).subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
}
