import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFactura } from '../Interfaces/factura';
import { BaseService } from './service-base.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService extends BaseService<IFactura> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  todos() {
    return this.getAll('todos');
  }

  uno(idFactura: number) {
    return this.getById('uno', idFactura);
  }

  eliminar(idFactura: number) {
    return this.delete('eliminar', idFactura);
  }

  insertar(factura: IFactura) {
    return this.create('insertar', factura);
  }

  actualizar(factura: IFactura) {
    return this.update('actualizar', factura);
  }
}
