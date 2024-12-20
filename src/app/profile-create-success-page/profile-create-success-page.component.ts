import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-profile-create-success-page',
  templateUrl: './profile-create-success-page.component.html',
  styleUrl: './profile-create-success-page.component.css'
})
export class ProfileCreateSuccessPageComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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