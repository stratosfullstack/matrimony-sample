import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

interface Profile {
  _id: string;
  name: string;
  age: number;
  gender: string;
  country: string;
  countryCode: number;
  phone: number;
  imagePath: string;
  pdfPath: string;
  status:number;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  profiles: Profile[] = [];
  profileCount: any;

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {

    if (typeof localStorage !== 'undefined' && !localStorage.getItem('token')) {
      alert('Please login first');
      this.router.navigateByUrl('');
    }
  
    this.ds.getProfiles().subscribe((result: any) => {
      this.profiles = result.data;
      console.log(this.profiles);
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

    this.ds.getProfileCount().subscribe((result: any) => {
      this.profileCount = result.data;
    },
      result => {
        alert(result.error.message);
      }
    )

  }
  
  approveProfile(profileId: string) {
    this.ds.approveProfile(profileId).subscribe(response => {
      console.log(response);
      const index = this.profiles.findIndex(profile => profile._id === profileId);
      if (index !== -1) {
        this.profiles[index].status = 1; 
      }
    }, error => {
      console.error(error);
    });
  }
  
  disapproveProfile(profileId: string) {
    this.ds.disapproveProfile(profileId).subscribe(response => {
      console.log(response);
      const index = this.profiles.findIndex(profile => profile._id === profileId);
      if (index !== -1) {
        this.profiles[index].status = 0;
      }
    }, error => {
      console.error(error);
    });
  }

  confirmDelete(profileId: string) {
    if (confirm('Are you sure you want to delete this profile?')) {
      this.deleteProfile(profileId);
    }
  }

  deleteProfile(profileId: string) {
    this.ds.deleteProfile(profileId).subscribe(
      (response: any) => {
        console.log(response);
        this.removeProfileFromArray(profileId);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  private removeProfileFromArray(profileId: string) {
    const index = this.profiles.findIndex(profile => profile._id === profileId);
    if (index !== -1) {
      this.profiles.splice(index, 1);
    }
  }

  getImageUrl(imagePath: string): string {
    return this.ds.getImageUrl(imagePath);
  }

  downloadPdf(pdfPath: string) {
    console.log('pdfPath:', pdfPath);
    const pdfName = pdfPath.split('\\').pop();
    if (pdfName) {
      this.ds.downloadPdf(pdfName).subscribe((response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdfName;
        a.click();
      }, (error: any) => {
        console.error(error);
      });
    } else {
      console.error('pdfName is undefined');
    }
  }
}
