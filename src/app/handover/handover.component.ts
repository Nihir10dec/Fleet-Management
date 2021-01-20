import { Router } from '@angular/router';
import { BillingServService } from './../billing-serv.service';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HandoverServService } from '../handover-serv.service';
import { Billing } from '../billing';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-handover',
  templateUrl: './handover.component.html',
  styleUrls: ['./handover.component.css']
})
export class HandoverComponent implements OnInit {

  form1: FormGroup;
  handobj: any;
  bookingId : number;
  booking;
  customerobj;
  carId;
  billingobj : Billing = new Billing(0,0,0, 0,0,'','','','','','',0,'','' , 0);
  carCategoryId : number;
  carsarray:any[];
  fuelstatuss: Array<string> = ['1/4', '1/2', '3/4', 'full']
  vehicleNumber: number;
  date:any;

  constructor(private fb: FormBuilder, private _customerserv : CustomerService,
    private _billingserv :BillingServService ,private serv:HandoverServService,
    private router : Router,
    private datepipe:DatePipe
    ) {
    this.form1 = fb.group({
      BookingId: ['', Validators.required],
      selectcars: ['', Validators.required],
      VehicleNo: ['', Validators.required],
      carstatus: ['', Validators.required],
      fuelstatus: ['', Validators.required]
    });
    this.carsarray=[];
    this.date=this.datepipe.transform(this.date,'dd/MM/YYYY');
    console.log(this.date);
  }

  get BookingId() {
    return this.form1.get('BookingId');
  }
  get selectcars()
  {
    return this.form1.get('selectcars');
  }
  get VehicleNo() {
    return this.form1.get('VehicleNo');
  }
  get carstatus() {
    return this.form1.get('carstatus');
  }
  get fuelstatus() {
    return this.form1.get('fuelstatus');
  }
  ngOnInit(): void {
  }
  async onSubmit(frm: FormGroup) {
    this.booking.status = "Active";
    await this.serv.updateBooking(this.bookingId , this.booking);
    this.customerobj = await this._customerserv.getCustomerByCode(this.booking.Customer_customerId);
    console.log("booking" ,this.booking);

    this.billingobj.CarCategories_categoryId = this.booking.CarCategories_categoryId;
    this.billingobj.Car_carId = this.carId;
    this.billingobj.Booking_bookingId = this.bookingId;
    this.billingobj.Customer_customerId = this.booking.Customer_customerId;
    this.billingobj.billingName = this.customerobj.first_name + " " + this.customerobj.last_name;
    this.billingobj.fuelStatus = this.form1.get('fuelstatus').value;
    this.billingobj.startDate = this.date;
    this.billingobj.endDate = "";
    this.billingobj.userMailid = this.customerobj.emailId;
    this.billingobj.customerMobNo = this.customerobj.cellNo;
    this.billingobj.Hub_hubid = this.booking.Hub_hubId;
    this.billingobj.Amount = this.booking.Amount;
    console.log("billing " , this.billingobj)
    this._billingserv.postBilling(this.billingobj).subscribe(data => console.log(data));
    alert("Car Handed Over");
    this.router.navigate(['/home']);
  }
  async Loadselectcar(f:any)
  {
    console.log(f.value);
    let id=parseInt(f.value);
    this.bookingId = id;
    this.booking = await this.serv.getBookingById(id);
    console.log(this.booking);
    // this.carCategoryId = this.booking.CarCategories_categoryId;
    this.serv.getcarsbycategory(this.booking.CarCategories_categoryId).subscribe(data => this.carsarray = data)
  }

  onCarSelected(selectedCarID){
    this.carId = selectedCarID;
    let [car] = this.carsarray.filter(car => car.carId == selectedCarID);
    // console.log(car);
    this.vehicleNumber = car.carNoPlate;
  }

}
