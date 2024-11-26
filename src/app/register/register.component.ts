import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.pattern('')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  register() {
    if (this.registerForm.valid) {
      this.ds.register(
        this.registerForm.value.firstName,
        this.registerForm.value.lastName,
        this.registerForm.value.email,
        this.registerForm.value.phone,
        this.registerForm.value.username,
        this.registerForm.value.password
      ).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl("")
      },
      result=>{
        alert(result.error.message)
      }
    )
    }
    else {
      alert("Invalid Form")
    }
  }
}
