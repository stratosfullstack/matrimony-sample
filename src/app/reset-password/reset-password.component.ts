import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {

  token: any = '';
  newPassword: any = '';
  resetPasswordForm: FormGroup;

  constructor(private route: ActivatedRoute, private ds: DataService, private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  resetPassword(): void {
    this.newPassword = this.resetPasswordForm.value.password;
    this.ds.resetPassword(this.token, this.newPassword).subscribe(response => {
      console.log(response);
    });
  }

}
