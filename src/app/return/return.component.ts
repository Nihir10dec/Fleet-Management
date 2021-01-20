import { CarServService } from './../car-serv.service';
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
    private _carcat : CarServService,
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
    // console.log(frm.value);
    console.log(this.billingObj);

    this.carsobj.availability="1";
    let car=this.serv.putCarAvailability(this.carsobj.carId,this.carsobj);
    this.booking.Status="completed";
    this.serv.putBookingStatus(this.booking.bookingId,this.booking);

    // this.billingObj.endDate= new Date();
    
    // console.log(obj.startDate , obj.endDate);
    
    let date1 : Date = new Date(this.billingObj.startDate) ;
    let date2 : Date = new Date(this.billingObj.endDate);
    console.log( date2.getTime() , date1.valueOf())
    var diffDays = Math.ceil(date2.valueOf() - date1.valueOf()) / (1000 * 60 * 60 * 24) ;  
    // console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    let carcategory = this.billingObj.CarCategories_categoryId;
    let rates = await this._carcat.getCarCategoryById(carcategory);
    // console.log(rates);
    let sum= this.booking.Amount;
    if (diffDays>30){
      var rem = diffDays %30;
      var div = diffDays /30;
      sum += rates.monthlyRates*div;
      if(rem>7){
        let rema = rem%7;
        let divi = rem/7;
        sum += rates.weeklyRates*divi;
        sum += rates.dailyRates*rema;
      }
    }
    else if(diffDays>7 ){
      let rema = diffDays%7;
      let divi = diffDays/7;
      sum += rates.weeklyRates*divi;
      sum += rates.dailyRates*rema;
    }
    else if(diffDays <7){
      sum+= rates.dailyRates * diffDays;
    }
    this.billingObj.Amount = sum;
    
    console.log("before putting " )
    console.log(this.billingObj)
    
    // let obj= await this.serv.putBillingDate(this.billingObj.billingId,this.billingObj);
    // console.log(car);
    this.router.navigate(['/invoice'] , {state: {data: this.billingObj,data1: this.carsobj,data2:this.booking , finalamout : sum }} );
  }
  async LoadVehicleNo(f:any)
  {
    console.log(f.value);
    let i=parseInt(f.value);
    this.booking = await this.serv.getBookingById(i);
    
    this.billingObj = await this.serv.getBillingByBookkingId('',i);
    console.log(this.booking);
    console.log( this.billingObj);
    this.carsobj=await this.serv.getVehicleNo(this.billingObj.Car_carId);
    this.vehicleNumber=this.carsobj.carNoPlate;
    console.log(this.carsobj);
    // console.log(this.vehicleNumber);
  }

}
