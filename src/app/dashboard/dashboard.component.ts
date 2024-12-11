import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

interface Profile {
  _id: string;
  name: string;
  age: number;
  country: string;
  imagePath: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  profiles: Profile[] = [];
  profileCount: any;
  loggedInUserGender: any;

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
      alert('Please login first');
      this.router.navigateByUrl('');
    }

    const userData = JSON.parse(localStorage.getItem('gender') ?? '');
    this.loggedInUserGender = userData;
    console.log(this.loggedInUserGender);

    this.ds.getProfilesUser(this.loggedInUserGender).subscribe((result: any) => {
      this.profiles = result.data;
    },
      result => {
        alert(result.error.message);
      }
    )

    this.ds.getProfileCount().subscribe((result: any) => {
      this.profileCount = result.data;
    },
      result => {
        alert(result.error.message);
      }
    )
  }
  
  getImageUrl(imagePath: string): string {
    return this.ds.getImageUrl(imagePath);
  }
}
