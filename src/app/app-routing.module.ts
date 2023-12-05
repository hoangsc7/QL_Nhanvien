import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListnhanvienComponent } from './components/list-nhanvien/list-nhanvien.component';
import { EditnhanvienComponent } from './components/edit-nhanvien/edit-nhanvien.component';
import { AddnhanvienComponent } from './components/add-nhanvien/add-nhanvien.component';


const routes: Routes = [
  { path: '', redirectTo: 'nhanvien', pathMatch: 'full' },
  { path: 'nhanvien', component: ListnhanvienComponent },
  { path: 'nhanvien/:id', component: EditnhanvienComponent },
  { path: 'add', component: AddnhanvienComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
