import { Component } from '@angular/core';
import { ConectionBackService } from '../conection-back.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aggregate',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent {
  datosFormulario = {
    nombre: '',
    saldo: 0,
    activo: true
  };

  constructor(private aggregateService: ConectionBackService) {}
  
  async enviarFormulario() {
    try {
      const response = await this.aggregateService.post(this.datosFormulario);
      console.log('Formulario enviado con éxito', response);
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  }
}
