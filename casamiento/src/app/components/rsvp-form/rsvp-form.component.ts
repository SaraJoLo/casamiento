import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RsvpEmailService } from '../../services/rsvp-email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      confirmacion: ['', Validators.required],
      bus: [''],
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

    const formData = this.rsvpForm.value;

    this.emailService.sendEmail(formData).then(
      (response) => {
        console.log('Confirmación enviada con éxito', response);
        alert('Confirmación enviada con éxito.');
        this.router.navigate([], { fragment: 'presents' });
      },
      (error) => {
        console.error('Error al enviar la confirmación por correo', error);
        alert(
          'Error al enviar la confirmación. Por favor, intenta de nuevo.'
        );
      }
    );
  }
}