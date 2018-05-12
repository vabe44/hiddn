import { User } from './../../data/users.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-people-card',
  templateUrl: './new-people-card.component.html',
  styleUrls: ['./new-people-card.component.css']
})
export class NewPeopleCardComponent implements OnInit {
  @Input() user: User;
  showOverlay = false;

  constructor() { }

  ngOnInit() {
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }

  onMouseOver() {
    this.showOverlay = true;
  }

  onMouseOut() {
    this.showOverlay = false;
  }
}
