import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  emailId: string = ""
  password: string = ""
  firstName: string = ""
  lastName: string = ""
  gender: string = ""
  countryName: string = ""
  phoneNumber: string = ""
  userName: string = ""
  confirmPassword: string = ""

  constructor(private ds: DataService, private router :Router) { }

  register() {
    const result = this.ds.register(this.firstName, this.lastName, this.gender, this.countryName, this.emailId, this.userName, this.password)
    if (result) {
      alert("Registration Success")
      this.router.navigateByUrl('')
    }
    else {
      alert("User Already Exists")
    }
  }

}
