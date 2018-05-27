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
  showMatchedOverlay = false;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }

  onLike(like) {
    if (like.matched) {
      this.matchedWith = like.user;
      this.showMatchedOverlay = true;
    } else {
      this.showMatchedOverlay = false;
    }
  }

  hideMatchedOverlay() {
    this.showMatchedOverlay = false;
  }

  onPass(user: User) {
    this.users = this.users.filter(u => u !== user);
  }
}
