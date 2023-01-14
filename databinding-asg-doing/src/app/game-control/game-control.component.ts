import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  interval;

  @Output() intervalFired = new EventEmitter<number>();
  numberCount = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      console.log(this.numberCount);
      this.intervalFired.emit(this.numberCount + 1);
      this.numberCount++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
