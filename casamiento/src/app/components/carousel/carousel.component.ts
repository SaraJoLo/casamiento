import { Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
images: Signal<string[]> = signal([
  'assets/img/castillo.jpeg',
  'assets/img/jungla.jpeg',
  'assets/img/mar.jpeg',
  'assets/img/montaña.jpeg',
  'assets/img/nieve.jpeg',
  'assets/img/playa.jpeg',
  'assets/img/piramides.jpeg',
  'assets/img/portugal.jpeg',
  'assets/img/gigi2.jpeg',
])

currentIndex: WritableSignal<number> = signal(0)

constructor(){
  setInterval(()=> {
  this.nextImage();
   }, 3000);
  }
  nextImage() {
    this.currentIndex.update((index) => (index + 1) % this.images().length);
  }

  prevImage() {
    this.currentIndex.update((index) => (index - 1 + this.images().length) % this.images().length);
  }
}
