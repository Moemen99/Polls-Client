import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    _router: Router,
   private _authService :AuthService
  ) { 
    if(!this._authService.userToken){
      _router.navigate(['/login']);
      this._authService.userToken ='';
    }
  }

}
