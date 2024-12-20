import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {

  token: any = '';
  newPassword: any = '';
  resetPasswordForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private ds: DataService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Slider logic
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

  resetPassword(): void {
    this.newPassword = this.resetPasswordForm.value.password;
    this.ds.resetPassword(this.token, this.newPassword).subscribe(response => {
      console.log(response);
    });
  }
}
