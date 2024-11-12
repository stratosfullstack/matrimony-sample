import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email_id: string = "";
  psw: string = "";

  userDetails: any[] = [
    { user_id: 1000, email_id: "libin@gmail.com", password: "123", role:0 },
    { user_id: 1001, email_id: "manu@gmail.com", password: "123" ,role:1 },
    { user_id: 1002, email_id: "riya@gmail.com", password: "123", role:1 },
    { user_id: 1003, email_id: "ninu@gmail.com", password: "123",role:1 },
    { user_id: 1004, email_id: "jeena@gmail.com", password: "123", role:1 }
  ];

  constructor(private router: Router) { }

    login() {
      const user = this.userDetails.find(user => user.email_id === this.email_id);
      if (user) {
        if (user.password === this.psw) {
          alert("Login successful");
          this.router.navigateByUrl('dashboard')
        } else {
          alert("Incorrect password");
        }
      } else {
        alert("Incorrect email ID");
      }
    }

    emailChange(event: any) {
      this.email_id = event.target.value;
    }

    pswChange(event: any) {
      this.psw = event.target.value;
    }

  // login(a: any, b: any) { 
  //   this.email_id = a.value
  //   this.psw = b.value
  //   const user = this.userDetails.find(user => user.email_id === this.email_id);
  //   if (user) {
  //     if (user.password === this.psw) {
  //       alert("Login successful");
  //     } else {
  //       alert("Incorrect password");
  //     }
  //   } else {
  //     alert("Incorrect email ID");
  //   }
  // }

  // emailChange(event: any) {
  //   this.email_id = event.target.value;
  // }

  // pswChange(event: any) {
  //   this.psw = event.target.value;
  // }

}