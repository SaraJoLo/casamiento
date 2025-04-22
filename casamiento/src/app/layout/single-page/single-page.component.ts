import { Component, HostListener, signal, WritableSignal, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RsvpFormComponent } from "../../components/rsvp-form/rsvp-form.component";
import { CountdownComponent } from "../../components/countdown/countdown.component";
import { GoogleMapsComponent } from "../../components/google-maps/google-maps.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-page',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, TranslateModule, RsvpFormComponent, CountdownComponent, GoogleMapsComponent, CarouselComponent],
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements AfterViewInit {
  contentLoaded: WritableSignal<boolean> = signal(false);
  showHeader: boolean = true;
  lastScrollTop: number = 0;

  @ViewChild('audioPlayer') audioPlayer: any;  // Referencia al elemento de audio

  constructor() {
    setTimeout(() => {
      this.contentLoaded.set(true);
    }, 1500); // Simula la carga de contenido
  }

  // Lógica para controlar la visibilidad del header al hacer scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      // Si estamos bajando, ocultamos el header
      this.showHeader = false;
    } else {
      // Si estamos subiendo, mostramos el header
      this.showHeader = true;
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evitar valores negativos
  }

  // Lógica de reproducción de audio
  ngAfterViewInit() {
    // Comenzar la reproducción automática solo si no ha comenzado
    if (this.audioPlayer && this.audioPlayer.nativeElement.paused) {
      this.audioPlayer.nativeElement.play();
    }
  }
}
