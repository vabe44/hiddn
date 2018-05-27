import { User } from './../../data/users.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-people-card',
  templateUrl: './new-people-card.component.html',
  styleUrls: ['./new-people-card.component.css']
})
export class NewPeopleCardComponent implements OnInit {
  @Input() user: User;
  @Output() like = new EventEmitter<any>();
  @Output() pass = new EventEmitter<User>();
  showOverlay = false;

  constructor() { }

  ngOnInit() {
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
    // this.showOverlay = true;
  }

  onMouseOver() {
    this.showOverlay = true;
  }

  onMouseOut() {
    this.showOverlay = false;
  }

  onLike() {
    const like = {
      user: this.user,
      matched: true
    };
    this.like.emit(like);
  }

  onPass() {
    this.pass.emit(this.user);
  }
}
