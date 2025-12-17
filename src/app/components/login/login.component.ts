import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ErrorResponse } from 'src/app/interfaces/error-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup;
  errorMessage = '';
  showPassword = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private authService :AuthService,
              private _router: Router
            )
  {
    this.loginForm = this.fb.group
    (
      {
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
      }
    );

    if(this.authService.userToken){
      this._router.navigate(['/home']);
    }
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe({
      next : (response)=>{
        // console.log("login successful",response);
        // console.log(response.token);
        //store the token in local storage
        localStorage.setItem('token',response.token);
        this.authService.userToken = response.token;
        this.errorMessage ='';
        this.loading = false;
        this._router.navigate(['/home']);
      },
      error : (error: { error: ErrorResponse })=>{
      console.error("login failed",error);
      
      const errorResponse = error.error;
      
      if (errorResponse.errors && errorResponse.errors.length > 0) {
        this.errorMessage = errorResponse.errors.join(', ');
      } else if (errorResponse.title) {
        this.errorMessage = errorResponse.title;
      } else {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
      
      this.loading = false;
    }
  });
  this.loading = true;
  }

}
