import { Component } from '@angular/core';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent {
  type = 1;

  changeType(type: number){
    this.type = type;
  }
}
