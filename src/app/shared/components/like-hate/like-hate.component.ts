import { Component, EventEmitter, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss'],
})
export class LikeHateComponent {
  @Output() score: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();

  addScore() {
    this.score.emit(LikeHate.LIKE)
  }

  removeScore() {
    this.score.emit(LikeHate.HATE)
  }
  
}
