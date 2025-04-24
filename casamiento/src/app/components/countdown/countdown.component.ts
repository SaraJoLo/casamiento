import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-countdown',
  imports: [TranslateModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  weddingDate: Date = new Date('2025-09-05T00:00:00');
  remainingTime: any = {};
  private interval: any;

  ngOnInit(): void {
    this.updateRemainingTime();
    this.interval = setInterval(() => this.updateRemainingTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateRemainingTime(): void {
    const now = new Date();
    let target = new Date(this.weddingDate);
    let months = target.getMonth() - now.getMonth() + (12 * (target.getFullYear() - now.getFullYear()));
    
    if (now.getDate() > target.getDate()) {
      months--;
    }

    const countdown = target.getTime() - now.getTime();

    this.remainingTime = {
      months: months,
      weeks: Math.floor(countdown / (1000 * 60 * 60 * 24 * 7)),
      days: Math.floor((countdown % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)),
      hours: Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((countdown % (1000 * 60)) / 1000)
    };
  }
}
