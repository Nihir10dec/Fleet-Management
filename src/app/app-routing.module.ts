import { AddOnComponent } from './add-on/add-on.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CarCategoryComponent } from './car-category/car-category.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HandoverComponent } from './handover/handover.component';


  

=======
import { CarCategoryComponent } from './car-category/car-category.component'; 
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LocationSelectionComponent } from './location-selection/location-selection.component';
>>>>>>> 26519b4e50191992ad588622d0dae452be8168da

const routes: Routes = 
[
  {path:'carcategory',component:CarCategoryComponent},
  {path:'memberRegistrationForm',component:MembershipRegistrationComponent},
<<<<<<< HEAD
  {path:'ConfirmBookingComponent',component:ConfirmBookingComponent},
  {path:'home',component:ConfirmBookingComponent},
  {path:'vehiclSelection',component:ConfirmBookingComponent},
  {path:'rentalAddOn',component:ConfirmBookingComponent},
=======
  {path:'ConfirmBookingComponent',component:ConfirmBookingComponent}, 
  {path:'locationselection',component:LocationSelectionComponent},
  {path:'rentalAddOn',component:AddOnComponent},
>>>>>>> 26519b4e50191992ad588622d0dae452be8168da
  { path: 'home', component: HomepageComponent },
  {path :"stafflogin" , component: StaffloginComponent},
  {path:'handover',component:HandoverComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
