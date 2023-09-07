import { Component } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  likeCount: number = 0;
  hateCount: number = 0;

  constructor(private voteService: VoteService) {}

  ngOnInit() {
    this.voteService.getVoteHistoryEvents().subscribe((vote: Vote) => {
      if (vote.vote === LikeHate.LIKE) {
        this.likeCount++;
      } else {
        this.hateCount++;
      }
    });
  }
}
