import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {

  isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(
        authStatus => this.isAuthenticated = authStatus
    );
  }



  isAuth() {
    return this.isAuthenticated;
  }

  onLogout() {
    this.authService.logout();
  }

}
