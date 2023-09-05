import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent {
  @Output() votingHistoryAdd: EventEmitter<Vote> = new EventEmitter<Vote>();
  @Input() colleague: Colleague = {
    pseudo: 'Cedric',
    score: 0,
    photo: '',
  };

  ngOnInit() {
    console.log(this.colleague);
  }

  onScoreChange(event: any) {
    console.log(event);
    switch (event) {
      case 0: // score up
        this.colleague.score += 300;
        this.votingHistoryAdd.emit({
          vote: LikeHate.LIKE,
          colleague: this.colleague,
        });
        break;
      case 1: //score down
        this.colleague.score -= 300;
        this.votingHistoryAdd.emit({
          vote: LikeHate.HATE,
          colleague: this.colleague,
        });
        break;
      default:
        //on fait cracher une exception?
        break;
    }
  }
}
