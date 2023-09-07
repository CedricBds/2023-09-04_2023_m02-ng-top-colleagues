import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
})
export class ColleagueListComponent {
 constructor(private colleagueService: ColleagueService){}

  colleagues$: Observable<Colleague[]> | undefined;

  ngOnInit() {
    this.colleagues$ = this.colleagueService.list();
    console.log(this.colleagues$)
  }
}
