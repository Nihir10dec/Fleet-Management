import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModifyCancelookingModel } from "./modify-cancelooking-model";
import { ModifyCancelBookingServiceService } from "./modify-cancel-booking-service.service";

@Component({
  selector: 'app-modify-cancel-booking',
  templateUrl: './modify-cancel-booking.component.html',
  styleUrls: ['./modify-cancel-booking.component.css']
})
export class ModifyCancelBookingComponent implements OnInit {

  inboundClick = false;
  modifyCancelBookingData : any;//ModifyCancelookingModel;
  constructor( private _modifyCancelBookingSevice : ModifyCancelBookingServiceService) { }

  ngOnInit(){
  }
  modify(){
    alert("to modifying page");
  }

  cancelBookingId(cancelbookId : any){
    alert("Booking will be cancelled");
    console.log("booking cancelled for Booking id :" + cancelbookId);
    let id:number=parseInt(cancelbookId);
    this._modifyCancelBookingSevice.cancelBooking(id).subscribe();
  }

  selectedBookingId(BookingId : any){
    const bkid = BookingId.value;
    alert(BookingId.value);
    console.log(BookingId.value);
    const json = this._modifyCancelBookingSevice.getBookingByCode(bkid).subscribe(data=> this.modifyCancelBookingData=data);
    //const json = this._modifyCancelBookingSevice.getAmmenities().subscribe(data=> this.modifyCancelBookingData=data);
    console.log(json);

  }
}