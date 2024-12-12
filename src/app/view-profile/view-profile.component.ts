import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
<<<<<<< HEAD
import { error } from 'console';
=======
>>>>>>> 96f80e943f2046c0d0905ce5bfb9686aedc41849

interface Profile {
  name: string;
  age: number;
  country: string;
<<<<<<< HEAD
  gender: string;
  occupation:string;
  imagePath: string;
  phone:number;
  email:number;
=======
  imagePath: string;
>>>>>>> 96f80e943f2046c0d0905ce5bfb9686aedc41849
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

  
  profile: Profile | null = null;
  profileId: any = '';
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.profileId = params.get('profileId');
      this.dataService.getProfile(this.profileId).subscribe({
        next: (response) => {
          this.profile = response.data;
        },
        error: (error) => {
          console.error(error);
          // Handle error here
        }
      });
    });
  }
  
  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/images/${imagePath}`;
  }
}
