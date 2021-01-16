import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarCategoryComponent } from './car-category/car-category.component';
import { HttpClientModule } from "@angular/common/http";

import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { MemberLoginComponent } from './member-login/member-login.component';

import { CustomerService } from './customer.service';
import { CustomerAdapter } from './customer';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateLocationSelectionComponent } from './date-location-selection/date-location-selection.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatCardModule,} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarCategoryComponent,
    MembershipRegistrationComponent,
    MemberLoginComponent,
    BookingDetailsComponent,
    ConfirmBookingComponent,
    HomepageComponent,
    DateLocationSelectionComponent,
    CarouselComponent,
    StaffloginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
    CarouselModule, WavesModule,
    MatCardModule,
  ],
  providers: [CustomerService,CustomerAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
