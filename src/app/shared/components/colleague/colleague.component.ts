import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent {
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
        break;
      case 1:
        this.colleague.score -= 300;
        break;
      default:
        //on fait cracher une exception?
        break;
    }
  }
}
