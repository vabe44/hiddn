import { Component, OnInit } from '@angular/core';
import { User } from '../../data/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-new-people',
  templateUrl: './new-people.component.html',
  styleUrls: ['./new-people.component.css']
})
export class NewPeopleComponent implements OnInit {

  users: User[] = [];
  matchedWith: User;
  matchedOverlay = false;
  commonInterestHelper = false;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }

  onLike(like) {
    if (like.matched) {
      this.matchedWith = like.user;
      this.matchedOverlay = true;
    } else {
      this.matchedOverlay = false;
    }
  }

  onPass(user: User) {
    this.users = this.users.filter(u => u !== user);
  }

  hideMatchedOverlay() {
    this.matchedOverlay = false;
    this.showCommonInterestHelper();
  }

  showCommonInterestHelper() {
    this.commonInterestHelper = true;
  }

  hideCommonInterestHelper() {
    this.commonInterestHelper = false;
  }
}
