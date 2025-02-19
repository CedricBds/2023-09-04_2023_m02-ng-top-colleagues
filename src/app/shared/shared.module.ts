import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from '../shared/components/voting-history/voting-history.component';
import { Subject } from 'rxjs';
import { Vote } from '../models/vote';
import { ScoreHistoryPipe } from '../shared/pipes/score-history.pipe';
import { CounterComponent } from '../shared/components/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    ScoreHistoryPipe,
    CounterComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent
  ],
})
export class SharedModule {

}
