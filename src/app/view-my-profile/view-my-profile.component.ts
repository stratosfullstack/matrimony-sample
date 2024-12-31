import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

interface Profile {
  _id: string;
  name: string;
  age: number;
  gender: string;
  height: number;
  country: string;
  state: string;
  district: string;
  place: string;
  education: string;
  occupation: string;
  imagePath: string;
  countryCode: number;
  phone: number;
  email: number;
  fatherName: string;
  motherName: string;
  parish: string;
  diocese: string;
  houseName: string;
}

@Component({
  selector: 'app-view-my-profile',
  templateUrl: './view-my-profile.component.html',
  styleUrl: './view-my-profile.component.css'
})
export class ViewMyProfileComponent {
  profile: Profile[] = []; // Define profile as an array of Profile objects
  userId: any = '';

  constructor(
    private route: ActivatedRoute, private ds: DataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');  
      this.ds.viewMyProfile(this.userId).subscribe({
        next: (response) => {
          this.profile = response.data;
          console.log(this.profile);
        },
        error: (error) => {
          console.error(error);
        }
      });
    });
  }

  getImageUrl(imagePath: string): string {
    return this.ds.getImageUrl(imagePath);
  }
}
