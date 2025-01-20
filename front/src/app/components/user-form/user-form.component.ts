import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  isLoading = true;

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Tipo_Documento: [{ value: '', disabled: true }],
      Documento: [{ value: '', disabled: true }],
      Nombres: [{ value: '', disabled: true }],
      Nombre: [{ value: '', disabled: true }],
      Apellido_paterno: [{ value: '', disabled: true }],
      Apellido_materno: [{ value: '', disabled: true }],
      Sexo: ['', Validators.required],
      telefono_principal: ['', [Validators.pattern(/^[0-9]+$/)]],
      Mail: ['', [Validators.required, Validators.email]],
    });
    this.loadUserData();
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Datos del formulario:', this.userForm.getRawValue());
    } else {
      console.error('Formulario no válido');
    }
  }

  loadUserData() {
    this.isLoading = true;
    this.userService.getUserData().subscribe(
      (response) => {
        console.log('Datos de la API:', response);

        if (response?.SpResult?.Table && Array.isArray(response.SpResult.Table) && response.SpResult.Table.length > 0) {
          const userData = response.SpResult.Table[0];

          this.userForm.patchValue({
            Tipo_Documento: userData.Tipo_Documento || '',
            Documento: userData.Documento || '',
            Nombres: userData.Nombres || '',
            Nombre: userData.Nombre || '',
            Apellido_paterno: userData.Apellido_paterno || '',
            Apellido_materno: userData.Apellido_materno || '',
            Sexo: userData.Sexo || '',
            telefono_principal: userData.telefono_principal || '',
            Mail: userData.Mail || '',
          });
        } else {
          console.error('La respuesta no contiene datos esperados:', response);
        }

        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener datos del usuario:', error);
        this.isLoading = false;
      }
    );
  }
}