import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
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
