import { Injectable } from '@angular/core';
import axios from "axios"
import { cuentaBancaria } from './cuentaBancaria'

@Injectable({
  providedIn: 'root'
})
export class ConectionBackService {
  private baseUrl = 'http://localhost:3012';
  constructor() {}
  async getCuentaBancaria(): Promise<cuentaBancaria[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/cuentaBancaria`);
      return response.data;
    } catch (error) {
      console.error('Error con cuenta bancaria', error);
      return [];
    }
  }
  async post(data: any): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/cuentaBancaria/create/nombre/${data.nombre}/saldo/${data.saldo}/activo/${data.activo}`, data);
      return response.data;
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.baseUrl}/cuentaBancaria/delete/id/${id}`);
      return response.data;
    }
    catch (error){
      console.error('Error al eliminar la cuenta bancaria', error);
      throw error;
    }
  }
  async put(id: number, nombre: string, saldo: number, activo:boolean): Promise<any>{
    try {
      const response = await axios.put(`${this.baseUrl}/cuentaBancaria/update/id/${id}/nombre/${nombre}/saldo/${saldo}/activo/${activo}`, { id, nombre, saldo, activo }); 
      return response.data;
    }
    catch (error){
      console.error('Error al modificar la cuenta bancaria');
      throw error;
    }
  }
}
