import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RsvpEmailService } from '../../services/rsvp-email.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.scss',
})
export class RsvpFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private emailService = inject(RsvpEmailService);
  private router = inject(Router);

  rsvpForm!: FormGroup;
  showInputs: boolean = false;

  ngOnInit(): void {
    this.rsvpForm = this.fb.group({
      nombre: ['', Validators.required],
      nombrePareja: [''],
      invitado1: [''],
      invitado2: [''],
      confirmacion: [false],
      alimentacion: ['', Validators.required],
      comentariosAlimentacion: [''],
      cancion: [''],
      mail: ['', [Validators.email]],
    });
  }

  showMoreInputs(): void {
    this.showInputs = !this.showInputs;
  }

  sendRsvp(event: Event): void {
    event.preventDefault();

    if (!this.rsvpForm.valid) {
      alert('Por favor, completa los campos requeridos correctamente.');
      return;
    }

    const formData = {
      nombre: this.rsvpForm.value.nombre,
      nombrePareja: this.rsvpForm.value.nombrePareja,
      confirmacion: this.rsvpForm.value.confirmacion ? 'Sí' : 'No',
      alimentacion: this.rsvpForm.value.alimentacion,
      comentariosAlimentacion: this.rsvpForm.value.comentariosAlimentacion,
      cancion: this.rsvpForm.value.cancion,
      mail: this.rsvpForm.value.mail,
      to_email: this.rsvpForm.value.mail,
    };
    
  
    this.emailService.sendEmail(formData).then(
      (response) => {
        console.log('Confirmación enviada con éxito', response);
        alert('¡Gracias por confirmar! Te esperamos 💕');
        this.rsvpForm.reset();
        this.router.navigate([], { fragment: 'presents' });
      },
      (error) => {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un problema al enviar el formulario. Intentá más tarde.');
      }
    );
  
  }
}