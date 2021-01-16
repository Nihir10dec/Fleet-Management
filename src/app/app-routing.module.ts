import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';

const routes: Routes = 
[
  {path:'memberRegistrationForm',component:MembershipRegistrationComponent},
  {path:'ConfirmBookingComponent',component:ConfirmBookingComponent},
  {path:'home',component:ConfirmBookingComponent},
  {path:'vehiclSelection',component:ConfirmBookingComponent},
  {path:'rentalAddOn',component:ConfirmBookingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
