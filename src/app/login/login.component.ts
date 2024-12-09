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
      localStorage.setItem('currentEmailid', JSON.stringify(result.currentEmailid))
      localStorage.setItem('currentUser', JSON.stringify(result.currentUser))
      localStorage.setItem('token', JSON.stringify(result.token))
      localStorage.setItem('role', JSON.stringify(result.role))
      localStorage.setItem('gender', JSON.stringify(result.gender))
      alert(result.message);
      if (result.role === 1) {
        this.router.navigateByUrl("admin/dashboard")
      } else if (result.role === 0) {
        if (result.profile === 1) {
          this.router.navigateByUrl("user/dashboard")
        }
        else {
          this.router.navigateByUrl("user/create-profile")
        }
      }
    },
      result => {
        alert(result.error.message);
      }
    )
  }
}
