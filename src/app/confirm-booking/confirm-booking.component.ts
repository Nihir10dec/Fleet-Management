import { Customer } from './../customer';
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

  customer :Customer;
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
    console.log(this.comp1 , this.comp2 , this.comp3 , this.comp4 , this.comp5);
  }
  confirm()
  {
    // alert(console.log("Confirm booking"));
    this.bookingobj=new ModifyCancelookingModel(0,'','','',0,'','','',0, 0 , 0 , 0 , 0, '');
    this.bookingobj.bookingdateAndTime=this.comp1.range.start;
    this.bookingobj.CarCategories_categoryId= this.comp3.categoryId;
    this.bookingobj.customerFirstName=this.customer.first_name;
    this.bookingobj.customerLastName=this.customer.last_name;
    this.bookingobj.customerMobileNo=this.customer.cellNo;
    this.bookingobj.usermailId=this.customer.emailId;
    this.bookingobj.customerDLNo=this.customer.drivingLiscen_Number;
    this.bookingobj.dropdateAndTime=this.comp1.range.end;
    this.bookingobj.Hub_hubId=history.state.data1.hubId;
    this.bookingobj.City_cityID = this.comp1.fromCity;
    this.bookingobj.State_stateID = this.comp1.fromState;
    this.bookingobj.Customer_customerId = this.customer.customerId;
    this.bookingobj.status='Booked';
    // console.log(this.bookingobj);
    this.bookserv.postBooking(this.bookingobj).subscribe(data=>console.log(data));
  }
}
