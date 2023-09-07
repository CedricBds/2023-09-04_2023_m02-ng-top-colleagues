import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  private voteHistoryEmitter = new Subject<any>();

  emitVoteHistoryEvent(vote: Vote) {
    this.voteHistoryEmitter.next(vote);
  }

  getVoteHistoryEvents(){
    return this.voteHistoryEmitter.asObservable();
  }
}
