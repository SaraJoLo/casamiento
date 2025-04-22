import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RsvpEmailService } from '../../services/rsvp-email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvp-form',
  imports: [TranslateModule, ReactiveFormsModule],
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
      // vienePor: ['', Validators.required],
      confirmacion: ['', Validators.required],
      bus: [''],
      alimentacion: ['', Validators.required],
      comentariosAlimentacion: [''],
      cancion: [''],
      comentario: [''],
      mail: [''],
    });
  }

  constructor() {}
  showMoreInputs(): void {
    this.showInputs = !this.showInputs;
  }

  sendRsvp(event: Event): void {
    event.preventDefault();
    if (this.rsvpForm.valid) {
      const formData = this.rsvpForm.value;
      this.emailService.sendEmail(formData).then(
        (response) => {
          console.log('Confirmación enviada con éxito', response);
          alert('Confirmación enviada con éxito.');

          this.router.navigate([], { fragment: 'presents' });
        },
        (error) => {
          console.log('Error al enviar la confirmación por correo', error);
          alert(
            'Error al enviar la confirmación por correo. Por favor, inténtalo de nuevo hasta ver el mensaje de éxito'
          );
        }
      );
    }
  }
}
