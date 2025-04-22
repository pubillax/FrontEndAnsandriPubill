import { Component } from '@angular/core';
import { ConectionBackService } from '../conection-back.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  mensaje: string = '';
  id: number|null = null;


  constructor(private aggregateService: ConectionBackService) {}
  
  async delete() {
    if (this.id) {
      try {
        const result = await this.aggregateService.delete(this.id);
        this.mensaje = result.mensaje;
      } catch (error) {
        this.mensaje = 'Error al eliminar la cuenta bancaria';
      }
    }
  }
}
