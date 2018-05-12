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
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }


}
