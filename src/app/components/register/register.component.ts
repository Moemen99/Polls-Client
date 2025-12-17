import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
private readonly PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
registerForm : FormGroup;
  errorMessage = '';
  showPassword = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private authService :AuthService,
              private _router: Router
            )
  {
    this.registerForm = this.fb.group
    (
      {
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.pattern(this.PASSWORD_PATTERN)]],
      firstName: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      lastName: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]]
      }
    );

    if(this.authService.userToken){
      this._router.navigate(['/home']);
    }
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  register(){
        this.authService.register(this.registerForm.value).subscribe({
      next : (response)=>{
        this.errorMessage ='';
        this.loading = false;
        this._router.navigate(['/login']);
      },
      error : (error)=>{
        console.error("register failed",error);
        this.errorMessage = 'register failed. Invalid Values.';
        this.loading = false;
      }
    });
    this.loading = true;
    
    console.log(

      this.registerForm.value
    );
  }

}
