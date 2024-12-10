import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 1 } // Add the data property
  },
  {
    path: 'user/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 0 } // Add the data property
  },
  {
    path: 'user/create-profile',
    component: CreateProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 0 } // Add the data property
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }