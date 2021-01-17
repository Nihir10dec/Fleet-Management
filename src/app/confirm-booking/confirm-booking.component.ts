import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../icustomer';
import { ModifyCancelBookingServiceService } from '../modify-cancel-booking/modify-cancel-booking-service.service';
import { ModifyCancelookingModel } from '../modify-cancel-booking/modify-cancelooking-model';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  customer :any;
  memberForm!: FormGroup;
  comp1:any;
  comp2:any;
  comp3:any;
  comp4:any;
  comp5:any;
  bookingobj:ModifyCancelookingModel;

  constructor(public fb: FormBuilder, private dataserv: CustomerService,private router: Router,private bookserv:ModifyCancelBookingServiceService){  }

   ngOnInit(){ 
    this.comp1=history.state.data;
    this.comp2=history.state.data1;
    this.comp3=history.state.data2;
    this.comp4=history.state.data3;
    this.comp5=history.state.data4;
   this.dataserv.on().subscribe(data=>this.customer=data);
  }
  confirm()
  {
    alert(console.log("Confirm booking"));
    this.bookingobj=new ModifyCancelookingModel(0,'',0,'','',0,'','','',0,'');
    this.bookingobj.bookingdateAndTime=history.state.data.start;
    this.bookingobj.categoriId=history.state.data2.categorayId;
    this.bookingobj.customerFirstName=this.customer.first_name;
    this.bookingobj.customerLastName=this.customer.last_name;
    this.bookingobj.customerMobileNo=this.customer.cellNo;
    this.bookingobj.usermailId=this.customer.emailId;
    this.bookingobj.customerDLNo=this.customer.drivingLiscen_Number;
    this.bookingobj.dropdateAndTime=this.customer.history.state.data.end;
    this.bookingobj.Hub_hubId=history.state.data1.hubId;
    this.bookingobj.status='active';
    this.bookserv.postBooking(this.bookingobj).subscribe(data=>alert(data));
  }
}
