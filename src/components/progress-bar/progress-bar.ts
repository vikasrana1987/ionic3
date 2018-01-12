import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
 
  @Input('progress') progress;
  @Input('backgroundcolor') backgroundcolor;
  @Input('score') score;
  @Input('maxscore') maxScore;
  constructor() {
 
  }
 
}