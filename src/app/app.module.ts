import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationSelectionComponent } from './location-selection/location-selection.component';
import { FormsModule } from "@angular/forms";
import { AddOnComponent } from './add-on/add-on.component';
import { HttpClientModule } from "@angular/common/http";
import { ModifyCancelBookingComponent } from './modify-cancel-booking/modify-cancel-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationSelectionComponent,
    AddOnComponent,
    ModifyCancelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
