import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Billing } from '../billing';
import { ReturnServService } from '../return-serv.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  form1: FormGroup;
  returnobj: any;
  booking;
  carsobj:any;
  vehicleNumber: any;
  carId:number;
  billingId:number;
  billingObj:Billing;

  constructor(private fb: FormBuilder,
    private serv:ReturnServService,
    private router:Router,
    private datepipe:DatePipe) {
    this.form1 = fb.group({
      BookingId: ['', Validators.required],
      VehicleNo: ['', Validators.required]
    });
    this.carsobj=[];
  }

  get BookingId() {
    return this.form1.get('BookingId');
  }
  get VehicleNo() {
    return this.form1.get('VehicleNo');
  }
  ngOnInit(): void {
  }
  async onSubmit(frm: FormGroup) {
    console.log(frm.value);
    this.carsobj.availability="1";
    let car=this.serv.putCarAvailability(this.carsobj.carId,this.carsobj);
    this.booking.Status="completed";
    this.serv.putBookingStatus(this.booking.bookingId,this.booking);
    let date=new Date();
    this.billingObj.endDate=this.datepipe.transform(date,'dd/MM/YYYY');
    
    this.billingObj= await this.serv.putBillingDate(this.billingObj.billingId,this.billingObj);
    console.log(car);
    this.router.navigate(['/invoice'] , {state: {data: this.billingObj,data1: this.carsobj,data2:this.booking}} );
  }
  async LoadVehicleNo(f:any)
  {
    console.log(f.value);
    let i=parseInt(f.value);
    this.booking = await this.serv.getBookingById(i);
    
    this.billingObj=await this.serv.getBillingByBookkingId('',i);
    console.log(this.booking);
    console.log(this.billingObj);
    this.carsobj=await this.serv.getVehicleNo(this.billingObj.Car_carId);
    this.vehicleNumber=this.carsobj.carNoPlate;
    console.log(this.carsobj);
    console.log(this.vehicleNumber);
  }

}
