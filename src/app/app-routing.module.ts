import { HomepageComponent } from './homepage/homepage.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarCategoryComponent } from './car-category/car-category.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'carcategory',component:CarCategoryComponent},
  {path:'memberRegistrationForm',component:MembershipRegistrationComponent},
  {path:'ConfirmBookingComponent',component:ConfirmBookingComponent}, 
  {path:'vehiclSelection',component:ConfirmBookingComponent},
  {path:'rentalAddOn',component:ConfirmBookingComponent},
  { path: 'home', component: HomepageComponent },
  {path :"stafflogin" , component: StaffloginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
