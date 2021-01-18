import { AddOnComponent } from './add-on/add-on.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarCategoryComponent } from './car-category/car-category.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HandoverComponent } from './handover/handover.component';
import { DateLocationSelectionComponent } from './date-location-selection/date-location-selection.component';
import { LocationSelectionComponent } from './location-selection/location-selection.component';
import { ReturnComponent } from './return/return.component';


  


const routes: Routes = 
[
  // {path:'DateLocationSelection',component:DateLocationSelectionComponent},
  {path:'locationselection',component:LocationSelectionComponent},
  {path:'carcategory',component:CarCategoryComponent},
  {path:'addOn',component:AddOnComponent},
  {path:'memberRegistrationForm',component:MembershipRegistrationComponent},
  {path:'ConfirmBookingComponent',component:ConfirmBookingComponent},
  { path: 'home', component: HomepageComponent },
  {path :"stafflogin" , component: StaffloginComponent},
  {path:'handover',component:HandoverComponent},
  {path:'return',component:ReturnComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
