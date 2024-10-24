import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl ='http://localhost:3000/api/cliente';
  constructor(private http: HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }
  getClienteById(id_cliente:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/${id_cliente}`);
  }
  crearCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl,cliente);
  }
  editarCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/${cliente.id_cliente}`; 
    return this.http.put<Cliente>(url, cliente); 
  }
  deleteCliente(id_cliente: number){
    return this.http.delete(`${this.apiUrl}/${id_cliente}`);
  }
}
