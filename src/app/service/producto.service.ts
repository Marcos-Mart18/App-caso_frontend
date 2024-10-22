import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl ='http://localhost:3000/api/producto';
  constructor(private http: HttpClient) { }

  getProdcuctos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getProductoById(id_producto:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.apiUrl}/${id_producto}`);
  }
  crearProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.apiUrl,producto);
  }
  editarProducto(producto: Producto): Observable<Producto> {
    const url = `${this.apiUrl}/${producto.id_producto}`; 
    return this.http.put<Producto>(url, producto); 
  }
  deleteProducto(id_producto: number){
    return this.http.delete(`${this.apiUrl}/${id_producto}`);
  }
}
