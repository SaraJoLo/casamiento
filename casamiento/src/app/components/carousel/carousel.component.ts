import { Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
images: Signal<string[]> = signal([
  'assets/IMG/1bfcc3620db8113dfcf54a0a80b66f7c.jpg',
  'assets/IMG/1db0a53f976613319c46665f4b9742d4.jpg',
  'assets/IMG/11fbeb8a1c648240a2baec37a2479336.jpg',
  'assets/IMG/11fbeb8a1c648240a2baec37a2479336.jpg',
  'assets/IMG/949e2c64552988268abcc63feae05843.jpg',
  'assets/IMG/05546fd241ac2ed0cec01f5e462cafd7.jpg',
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
