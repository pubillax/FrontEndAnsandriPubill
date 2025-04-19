import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CuentaBancaria {
  id?: number;
  titular: string;
  saldo: number;
  activa: boolean;
}

@Injectable({ providedIn: 'root' })
export class CuentaService {
  private apiUrl = 'http://localhost:3000/api/cuentas';

  constructor(private http: HttpClient) {}

  getCuentas(): Observable<CuentaBancaria[]> {
    return this.http.get<CuentaBancaria[]>(this.apiUrl);
  }

  crearCuenta(cuenta: CuentaBancaria): Observable<CuentaBancaria> {
    return this.http.post<CuentaBancaria>(this.apiUrl, cuenta);
  }

  actualizarCuenta(id: number, cuenta: CuentaBancaria): Observable<CuentaBancaria> {
    return this.http.put<CuentaBancaria>(`${this.apiUrl}/${id}`, cuenta);
  }

  eliminarCuenta(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
