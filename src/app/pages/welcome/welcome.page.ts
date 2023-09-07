import { Component, EventEmitter, Output } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  constructor(private sharedModule: SharedModule) {}

  @Output() votingHistoryAdd: EventEmitter<Vote> = new EventEmitter<Vote>();

  title = 'top-colleagues';

  votingHistory: Vote[] = [];

  ngOnInit() {
    this.sharedModule.getVoteHistoryEvents().subscribe((vote: Vote) => {
     this.votingHistory?.push(vote)
    })
  }
}
