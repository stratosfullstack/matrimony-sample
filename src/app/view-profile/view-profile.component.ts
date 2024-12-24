import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service'

interface Profile {
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
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  profile: Profile | null = null;
  profileId: any = '';

  constructor(
    private route: ActivatedRoute, private ds: DataService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.profileId = params.get('id');
      this.ds.viewProfile(this.profileId).subscribe({
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
