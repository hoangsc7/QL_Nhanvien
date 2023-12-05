import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nhanvien } from '../models/nhanvien.model';

const baseUrl = 'http://localhost:9090/api/nhanvien';

@Injectable({
  providedIn: 'root',
})
export class nhanvienService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<nhanvien[]> {
    return this.http.get<nhanvien[]>(`${baseUrl}/list`);
  }
  get(id: any): Observable<nhanvien> {
    return this.http.get<nhanvien>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
  searchnhanvien(tenphongban: string, tuoi: number): Observable<nhanvien[]> {
    // Tạo đối tượng HttpParams và thêm tham số vào URL
    let params = new HttpParams();
    if (tenphongban) {
      params = params.set('tenphongban', tenphongban);
    }
    if (tuoi !== undefined && tuoi !== null) {
      params = params.set('tuoi', tuoi.toString());
    }

    // Thêm tham số vào URL và gửi yêu cầu HTTP GET
    return this.http.get<nhanvien[]>(`${baseUrl}/search`, { params: params });
  }
}
