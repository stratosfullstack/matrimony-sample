import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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
