import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddnhanvienComponent } from './components/add-nhanvien/add-nhanvien.component';
import { EditnhanvienComponent } from './components/edit-nhanvien/edit-nhanvien.component';
import { ListnhanvienComponent } from './components/list-nhanvien/list-nhanvien.component';

@NgModule({
  declarations: [
    AppComponent,
    AddnhanvienComponent,
    EditnhanvienComponent,
    ListnhanvienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
