import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public _authService :AuthService) { }

  logOut(){
    localStorage.removeItem('token');
    this._authService.userToken ='';
  }

}
