import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transparent-header',
  templateUrl: './transparent-header.component.html',
  styleUrls: ['./transparent-header.component.css']
})
export class TransparentHeaderComponent {
  @Input() showRegisterButton: boolean = true; // To toggle register/login
  @Input() isLoggedIn: boolean = false; // To determine if the user is logged in

  constructor(private router: Router) {
  
    }

  logout() {
    localStorage?.removeItem('currentEmailid');
    localStorage?.removeItem('currentUser');
    localStorage?.removeItem('token');
    localStorage?.removeItem('role');
    localStorage?.removeItem('gender');
    this.router.navigateByUrl("");
  }
}
