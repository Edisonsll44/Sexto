import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFactura } from '../Interfaces/factura';
import { Observable } from 'rxjs';
import { BaseService } from '../Services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService extends BaseService<IFactura> {

  constructor(private http: HttpClient) {
    super(http, 'http://localhost/sexto/Proyectos/03MVC/controllers/factura.controller.php?op=');
  }

  insertar(factura: IFactura): Observable<string> {
    const formData = new FormData();
    formData.append('Fecha', factura.Fecha);
    formData.append('Sub_total', factura.Sub_total.toString());
    formData.append('Sub_total_iva', factura.Sub_total_iva.toString());
    formData.append('Valor_IVA', factura.Valor_IVA.toString());
    formData.append('Clientes_idClientes', factura.Clientes_idClientes.toString());
    return this.http.post<string>(this.apiurl + 'insertar', formData);
  }

  actualizar(factura: IFactura): Observable<string> {
    const formData = new FormData();
    formData.append('idFactura', factura.idFactura.toString());
    formData.append('Fecha', factura.Fecha);
    formData.append('Sub_total', factura.Sub_total.toString());
    formData.append('Sub_total_iva', factura.Sub_total_iva.toString());
    formData.append('Valor_IVA', factura.Valor_IVA.toString());
    formData.append('Clientes_idClientes', factura.Clientes_idClientes.toString());
    return this.http.post<string>(this.apiurl + 'actualizar', formData);
  }
}
