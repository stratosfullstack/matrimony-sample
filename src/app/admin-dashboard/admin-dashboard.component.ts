import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

interface Profile {
  _id: string;
  name: string;
  age: number;
  country: string;
  imagePath: string;
  pdfPath: string;
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

  downloadPdf(pdfPath: string) {
    console.log('pdfPath:', pdfPath);
    const pdfName = pdfPath.split('\\').pop(); // Remove uploads/ directory
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



