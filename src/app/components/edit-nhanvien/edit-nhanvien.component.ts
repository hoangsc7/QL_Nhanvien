import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { nhanvien } from 'src/app/models/nhanvien.model';
import { nhanvienService } from 'src/app/services/nhanvien.service';

@Component({
  selector: 'app-edit-nhanvien',
  templateUrl: './edit-nhanvien.component.html',
  styleUrls: ['./edit-nhanvien.component.css'],
})
export class EditnhanvienComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentTutorial: nhanvien = {
    manv: '',
    tennhanvien: '',
    tenphongban: '',
    gioitinh:'',
    tuoi: 0,
  };
  message = '';
  constructor(
    private tutorialService: nhanvienService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }
  getTutorial(id: string): void {
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  updateTutorial(): void {
    this.message = '';
    this.tutorialService
      .update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/nhanvien']);
        },
        error: (e) => console.error(e),
      });
  }
}
