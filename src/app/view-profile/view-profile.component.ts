import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

interface Profile {
  name: string;
  age: number;
  country: string;
  imagePath: string;
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
