import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object // Inject platform check
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // Toggle password visibility
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Login logic
  login() {
    this.ds.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((result: any) => {
      localStorage.setItem('currentUserId', JSON.stringify(result.currentUserId));
      localStorage.setItem('currentEmailid', JSON.stringify(result.currentEmailid));
      localStorage.setItem('currentUser', JSON.stringify(result.currentUser));
      localStorage.setItem('token', JSON.stringify(result.token));
      localStorage.setItem('role', JSON.stringify(result.role));
      localStorage.setItem('gender', JSON.stringify(result.gender));
      localStorage.setItem('isProfileApproved',JSON.stringify(result.isProfileApproved))
      alert(result.message);

      // if (result.role === 1) {
      //   this.router.navigateByUrl("admin/dashboard");
      // } else if (result.role === 0) {
      //   if (result.profile === 1) {
      //     this.router.navigateByUrl("user/dashboard");
      //   } else {
      //     this.router.navigateByUrl("user/create-profile");
      //   }
      // }

      if (result.role === 1) {
        this.router.navigateByUrl("admin/dashboard");
      } else if (result.role === 0) {
        if (result.profile === 1) {
          if (result.isProfileApproved === 1) {
            this.router.navigateByUrl("user/dashboard");
          } else if (result.isProfileApproved === null) {
            this.router.navigateByUrl("profilecreationsuccesspage");
          } else {
            // Handle other status values, if any
          }
        } else {
          this.router.navigateByUrl("user/create-profile");
        }
      }


    },
      result => {
        alert(result.error.message);
      });
  }

  // Fade Slider Logic
  ngAfterViewInit() {
    // Run only in the browser
    if (isPlatformBrowser(this.platformId)) {
      const slider = document.querySelector('.slider .list') as HTMLElement;
      const items = document.querySelectorAll<HTMLElement>('.slider .list .item');

      let active = 0; // Start with the first image
      const lengthItems = items.length;

      // Set initial visibility
      items.forEach((item, index) => {
        item.style.position = 'absolute';
        item.style.top = '0';
        item.style.left = '0';
        item.style.opacity = index === active ? '1' : '0';
        item.style.transition = 'opacity 1s ease-in-out';
      });

      // Fade function
      function fadeSlider() {
        const prevActive = active;
        active = (active + 1) % lengthItems;

        items[prevActive].style.opacity = '0';
        items[active].style.opacity = '1';
      }

      // Auto-slide every 4 seconds
      setInterval(fadeSlider, 4000);

      // Handle window resize
      window.onresize = () => {
        items[active].style.opacity = '1';
      };
    }
  }
}
