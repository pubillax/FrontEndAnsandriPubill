import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CuentaService, CuentaBancaria } from '../../services/cuenta.service';
@Component({
  selector: 'app-cuenta-formulario',
  templateUrl: './cuenta-formulario.component.html',
})
export class CuentaFormularioComponent implements OnChanges {
  @Input() cuenta: CuentaBancaria | null = null;
  @Output() refrescar = new EventEmitter();
  nuevaCuenta: CuentaBancaria = { titular: '', saldo: 0, activa: false };

  constructor(private cuentaService: CuentaService) {}

  ngOnChanges() {
    if (this.cuenta) {
      this.nuevaCuenta = { ...this.cuenta };
    } else {
      this.nuevaCuenta = { titular: '', saldo: 0, activa: false };
    }
  }

  guardar() {
    if (this.nuevaCuenta.id) {
      this.cuentaService.actualizarCuenta(this.nuevaCuenta.id, this.nuevaCuenta).subscribe(() => {
        this.refrescar.emit();
      });
    } else {
      this.cuentaService.crearCuenta(this.nuevaCuenta).subscribe(() => {
        this.refrescar.emit();
        this.nuevaCuenta = { titular: '', saldo: 0, activa: false };
      });
    }
  }
}
