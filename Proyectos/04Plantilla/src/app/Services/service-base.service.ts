import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroment/environment';

export abstract class BaseService<T> {
  protected apiurl = environment.apiUrl; // Cambiar a protected para acceso en subclases

  constructor(protected http: HttpClient) {}

  getAll(endpoint: string) {
    return this.http.get<T[]>(this.apiurl + endpoint);
  }

  getById(endpoint: string, id: number) {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.http.post<T>(this.apiurl + endpoint, formData);
  }

  delete(endpoint: string, id: number) {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.http.post<number>(this.apiurl + endpoint, formData);
  }

  create(endpoint: string, item: T) {
    const formData = this.convertToFormData(item);
    return this.http.post<string>(this.apiurl + endpoint, formData);
  }

  update(endpoint: string, item: T) {
    const formData = this.convertToFormData(item);
    return this.http.post<string>(this.apiurl + endpoint, formData);
  }

  private convertToFormData(item: T): FormData {
    const formData = new FormData();
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        formData.append(key, item[key] as any);
      }
    }
    return formData;
  }
}
