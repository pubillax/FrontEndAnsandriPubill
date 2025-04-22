import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ConectionBackService } from './conection-back.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { cuentaBancaria } from './cuentaBancaria';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  datosBdd: cuentaBancaria[]=[] ;
  constructor(private _router: Router, private service: ConectionBackService) {
    this.service.getCuentaBancaria().then((v) => {
      console.log("Datos recibidos:", v);
      this.datosBdd = v;
    });

  }
  datosFormulario = {
    nombre: '',
    saldo: 0,
    activo: true
  };

  nombre: string|null = null;
  saldo: number|null = null;
  activo: boolean|null = null;
  mensaje: string = '';

  async delete(id: number) {
    if (id) {
      try {
        const result = await this.service.delete(id);
        this.mensaje = result.mensaje;
      } catch (error) {
        this.mensaje = 'Error al eliminar la cuenta bancaria';
      }
    }
  }
  async enviarFormulario() {
    try {
      const response = await this.service.post(this.datosFormulario);
      console.log('Formulario enviado con éxito', response);
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  }

  async modify(id: number) {
    try {
      const response = await this.service.put(id, this.datosFormulario.nombre, this.datosFormulario.saldo, this.datosFormulario.activo);
      console.log('Restaurante modificado con éxito', response);
    } catch (error) {
      console.error('Error al modificar', error);
    }
  }
  

  navigateToAggregate() {
    console.log("Navegando a /aggregate");
    this._router.navigate(['aggregate'])
  }
  navigateToHome() {
    console.log("Navegando a /aggregate");
    this._router.navigate([''])
  }
}