import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService<T> {
  protected apiurl: string;

  constructor(protected http: HttpClient, apiurl: string) {
    this.apiurl = apiurl;
  }

  todos(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiurl}todos`);
  }

  uno(id: number): Observable<T> {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.http.post<T>(`${this.apiurl}uno`, formData);
  }

  eliminar(id: number): Observable<number> {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.http.post<number>(`${this.apiurl}eliminar`, formData);
  }
}
