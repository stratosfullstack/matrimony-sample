import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreateSuccessPageComponent } from './profile-create-success-page.component';

describe('ProfileCreateSuccessPageComponent', () => {
  let component: ProfileCreateSuccessPageComponent;
  let fixture: ComponentFixture<ProfileCreateSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileCreateSuccessPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCreateSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
