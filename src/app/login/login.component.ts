import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
        console.log("login successful",response);
        this.errorMessage ='';
        this.loading = false;
        this._router.navigate(['/home']);
      },
      error : (error)=>{
        console.error("login failed",error);
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.loading = false;
      }
    });
    this.loading = true;
  }

}
