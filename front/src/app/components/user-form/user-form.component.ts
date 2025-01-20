import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  newUser = {
    Tipo_Documento: '',
    Documento: 0,
    Nombres: '',
    Nombre: '',
    Apellido_paterno: '',
    Apellido_materno: '',
    Sexo: '',
    telefono_principal: 0,
    Mail: '',
  };


  onSubmit() {
    console.log(this.newUser);
  }
}
