import { CustomerCareComponent } from './customer-care/customer-care.component';
import { AffiliatedHotelsComponent } from './affiliated-hotels/affiliated-hotels.component';
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
import { CareerComponent } from './career/career.component';
import { AppGuard } from './app.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InvoiceGenerationComponent } from './invoice-generation/invoice-generation.component';


const routes: Routes = 
[
  {path:'DateLocationSelection',component:DateLocationSelectionComponent},
  {path:'locationselection',component:LocationSelectionComponent,canActivate : [AppGuard]},
  {path:'carcategory',component:CarCategoryComponent,canActivate : [AppGuard]},
  {path:'addOn',component:AddOnComponent,canActivate : [AppGuard]},
  {path:'memberRegistrationForm',component:MembershipRegistrationComponent,canActivate : [AppGuard]},
  {path:'ConfirmBookingComponent',component:ConfirmBookingComponent,canActivate : [AppGuard]},
  { path: 'home', component: HomepageComponent },
  {path :"stafflogin" , component: StaffloginComponent},
  {path:'handover',component:HandoverComponent},
  {path:'invoice', component:InvoiceGenerationComponent},
  {path:'return',component:ReturnComponent},
  {path:"career",component:CareerComponent},
  {path:"affiliatedhotel",component:AffiliatedHotelsComponent},
  {path:"customercare",component:CustomerCareComponent},
  {path:'handover',component:HandoverComponent,canActivate : [AppGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'aboutus', component:AboutUsComponent},
  {path: 'contactus', component:ContactUsComponent},
  { path: '**', component: PagenotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
