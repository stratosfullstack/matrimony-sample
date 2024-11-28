import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

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

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    
    this.ds.getProfiles().subscribe((result: any) => {
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
