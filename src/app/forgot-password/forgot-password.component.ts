import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  forgotPasswordSuccess = false;
  forgotPasswordError = false;
  forgotPasswordMessage = '';

  constructor(private http: HttpClient, private ds: DataService, private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]],
    });
  }

  submitForgotPassword(): void {
    const email = this.forgotPasswordForm.value.email;
    this.ds.forgotPassword(email).subscribe((response: any) => {
      if (response.status === 200) {
        this.forgotPasswordSuccess = true;
      } else {
        this.forgotPasswordError = true;
        this.forgotPasswordMessage = response.message;
      }
    });
  }
}