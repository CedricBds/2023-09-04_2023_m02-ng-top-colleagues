import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss'],
})
export class LikeHateComponent {


  @Input() currentScore: number = 0;
  @Output() scoreChange: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();

  addScore() {
    this.scoreChange.emit(LikeHate.LIKE)
  }

  removeScore() {
    this.scoreChange.emit(LikeHate.HATE)
  }

}
