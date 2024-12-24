import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { TransparentHeaderComponent } from './transparent-header/transparent-header.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RegSuccessPageComponent } from './reg-success-page/reg-success-page.component';
import { ProfileCreateSuccessPageComponent } from './profile-create-success-page/profile-create-success-page.component';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AdminDashboardComponent,
    BannerSectionComponent,
    CreateProfileComponent,
    ViewProfileComponent,
    TransparentHeaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    MainHeaderComponent,
    RegSuccessPageComponent,
    ProfileCreateSuccessPageComponent,
    ViewMyProfileComponent,
    UpdateProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
