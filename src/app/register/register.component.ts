import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.registerForm = this.fb.group({
      gender: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.ds.register(
        this.registerForm.value.gender,
        this.registerForm.value.name,
        this.registerForm.value.email,
        this.registerForm.value.phone,
        this.registerForm.value.username,
        this.registerForm.value.password
      ).subscribe(
        (result: any) => {
          alert(result.message);
          this.router.navigateByUrl('');
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid Form');
    }
  }

  ngAfterViewInit() {
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
