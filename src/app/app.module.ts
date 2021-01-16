import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomerService } from './customer.service';
import { CustomerAdapter } from './customer';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MembershipRegistrationComponent,
    MemberLoginComponent,
    BookingDetailsComponent,
    ConfirmBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CustomerService,CustomerAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
