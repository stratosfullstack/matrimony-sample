import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {
  forgotPasswordForm: FormGroup;
  forgotPasswordSuccess = false;
  forgotPasswordError = false;
  forgotPasswordMessage = '';

  constructor(
    private http: HttpClient,
    private ds: DataService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Slider logic
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

  submitForgotPassword(): void {
    const email = this.forgotPasswordForm.value.email;
    this.ds.forgotPassword(email).subscribe((response: any) => {
      if (response.status === 200) {
        this.forgotPasswordSuccess = true;
      } else {
        this.forgotPasswordError = true;
        this.forgotPasswordMessage = response.message;
      }
    });
  }
}
