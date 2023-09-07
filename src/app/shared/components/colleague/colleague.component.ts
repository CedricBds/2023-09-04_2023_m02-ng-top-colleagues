import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { SharedModule } from '../../shared.module';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent {
  constructor(private voteService: VoteService) {}

  @Input() colleague: Colleague = {
    pseudo: 'Cedric',
    score: 0,
    photo: '',
  };

  ngOnInit() {}

  onScoreChange(event: any) {
    let currentColleague = this.colleague;
    switch (event) {
      case 0: // score up
        this.colleague.score += 300;
        this.voteService.emitVoteHistoryEvent({
          vote: LikeHate.LIKE,
          colleague: currentColleague,
        })
        break;
      case 1: //score down
        this.colleague.score -= 300;
        this.voteService.emitVoteHistoryEvent({
          vote: LikeHate.HATE,
          colleague: currentColleague,
        })
        break;
      default:
        //on fait cracher une exception?
        break;
    }
  }
}
