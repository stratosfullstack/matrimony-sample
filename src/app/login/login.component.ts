import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailId: string = "";
  password: string = "";

  userDetails: any[] = [
    { user_name: "libinj", email_id: "libin@gmail.com", first_name: "Libin", last_name: "Jacob", gender: "Male", country: "Bahrain", password: "123", role: 0 },
    { user_name: "manuj", email_id: "manu@gmail.com", first_name: "Manu", last_name: "Joseph", gender: "Male", country: "England", password: "123", role: 1 },
    { user_name: "riyam", email_id: "riya@gmail.com", first_name: "Riya", last_name: "Mathew", gender: "Male", country: "Kuwait", password: "123", role: 1 },
    { user_name: "ninua", email_id: "ninu@gmail.com", first_name: "Ninu", last_name: "Abraham", gender: "Male", country: "India", password: "100", role: 1 },
    { user_name: "jeenas", email_id: "jeena@gmail.com", first_name: "Jeena", last_name: "Reji", gender: "Male", country: "India", password: "123", role: 1 }
  ];

  constructor(private router: Router, private ds: DataService) { }

  login() {
    const result = this.ds.login(this.emailId, this.password)
    if (result) {
      alert("Login Successful")
      this.router.navigateByUrl("user")
    }
    else {
      alert("Incorrect User Credentials")
    }
  }
}
