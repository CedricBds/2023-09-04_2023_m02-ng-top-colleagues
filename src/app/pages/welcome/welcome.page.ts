import { Component, EventEmitter, Output } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  constructor(private voteService: VoteService) {}

  @Output() votingHistoryAdd: EventEmitter<Vote> = new EventEmitter<Vote>();

  title = 'top-colleagues';

  votingHistory: Vote[] = [];

  ngOnInit() {
    this.voteService.getVoteHistoryEvents().subscribe((vote: Vote) => {
     this.votingHistory?.push(vote)
    })
  }

  fresh(){
    alert('ah quel fraicheur');
  }
}
