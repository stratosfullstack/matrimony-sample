import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSuccessPageComponent } from './reg-success-page.component';

describe('RegSuccessPageComponent', () => {
  let component: RegSuccessPageComponent;
  let fixture: ComponentFixture<RegSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegSuccessPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
