import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.user = auth.authInfo;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
