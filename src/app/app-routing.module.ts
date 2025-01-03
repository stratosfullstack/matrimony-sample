import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AuthGuard } from './auth-guard.guard';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegSuccessPageComponent } from './reg-success-page/reg-success-page.component';
import { ProfileCreateSuccessPageComponent } from './profile-create-success-page/profile-create-success-page.component';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EmailVerificationPageComponent } from './email-verification-page/email-verification-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'registrationsuccesspage', component: RegSuccessPageComponent },
  { path: 'email-verification', component: EmailVerificationPageComponent },

  {
    path: 'profilecreationsuccesspage',
    component: ProfileCreateSuccessPageComponent,
    canActivate: [AuthGuard],
    data: { role: 0 }
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 1 }
  },
  {
    path: 'user/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 0 }
  },
  {
    path: 'user/create-profile',
    component: CreateProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 0 }
  },
  {
    path: 'update-profile/:id',
    component: UpdateProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 0 }
  },
  {
    path: 'view-profile/:id',
    component: ViewProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 0 }
  },
  {
    path: 'view-my-profile/:id',
    component: ViewMyProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 0 }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
