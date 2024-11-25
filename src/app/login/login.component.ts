import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.ds.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((result: any) => {
      localStorage.setItem('currentEmailid',JSON.stringify(result.currentEmailid))
      localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
      localStorage.setItem('token',JSON.stringify(result.token))
      alert(result.message);
      this.router.navigateByUrl("create-profile")
    },
      result => {
        alert(result.error.message);
      }
    )
  }
}
