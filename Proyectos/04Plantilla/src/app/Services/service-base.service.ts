import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  constructor(protected lector: HttpClient, private apiurl: string) {}

  todos(): Observable<T[]> {
    return this.lector.get<T[]>(this.apiurl + 'todos');
  }

  uno(id: number): Observable<T> {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.lector.post<T>(this.apiurl + 'uno', formData);
  }

  eliminar(id: number): Observable<number> {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar', formData);
  }

  insertar(data: T): Observable<string> {
    const formData = this.buildFormData(data);
    return this.lector.post<string>(this.apiurl + 'insertar', formData);
  }

  actualizar(id: number, data: T): Observable<string> {
    const formData = this.buildFormData(data);
    formData.append('id', id.toString());
    return this.lector.post<string>(this.apiurl + 'actualizar', formData);
  }

  protected buildFormData(data: T): FormData {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, (data as any)[key].toString());
      }
    }
    return formData;
  }
}
