import { Component, OnInit } from '@angular/core';
import { CuentaService, CuentaBancaria } from '../../services/cuenta.service';
@Component({
  selector: 'app-cuenta-listado',
  templateUrl: './cuenta-listado.component.html',
})
export class CuentaListadoComponent implements OnInit {
  cuentas: CuentaBancaria[] = [];
  cuentaEditando: CuentaBancaria | null = null;

  constructor(private cuentaService: CuentaService) {}

  ngOnInit(): void {
    this.cargarCuentas();
  }

  cargarCuentas() {
    this.cuentaService.getCuentas().subscribe(data => this.cuentas = data);
  }

  eliminar(id: number) {
    this.cuentaService.eliminarCuenta(id).subscribe(() => this.cargarCuentas());
  }

  editar(cuenta: CuentaBancaria) {
    this.cuentaEditando = { ...cuenta };
  }

  actualizar(cuenta: CuentaBancaria) {
    if (cuenta.id)
      this.cuentaService.actualizarCuenta(cuenta.id, cuenta).subscribe(() => {
        this.cuentaEditando = null;
        this.cargarCuentas();
      });
  }
}
