import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HandoverServService } from '../handover-serv.service';

@Component({
  selector: 'app-handover',
  templateUrl: './handover.component.html',
  styleUrls: ['./handover.component.css']
})
export class HandoverComponent implements OnInit {

  form1: FormGroup;
  handobj: any;
  booking;
  carCategoryId : number;
  carsarray:any[];
  fuelstatuss: Array<string> = ['1/4', '1/2', '3/4', 'full']
  vehicleNumber: number;
  constructor(private fb: FormBuilder,
    private serv:HandoverServService) {
    this.form1 = fb.group({
      BookingId: ['', Validators.required],
      selectcars: ['', Validators.required],
      VehicleNo: ['', Validators.required],
      carstatus: ['', Validators.required],
      fuelstatus: ['', Validators.required]
    });
    this.carsarray=[];
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
  onSubmit(frm: FormGroup) {
    console.log(frm.value);
  }
  async Loadselectcar(f:any)
  {
    console.log(f.value);
    let i=parseInt(f.value);
    this.booking = await this.serv.getBookingById(i);
    console.log(this.booking);
    // this.carCategoryId = this.booking.CarCategories_categoryId;
    this.serv.getcarsbycategory(this.booking.CarCategories_categoryId).subscribe(data => this.carsarray = data)
  }

  onCarSelected(selectedCarID){
    let [car] = this.carsarray.filter(car => car.carId == selectedCarID);
    // console.log(car);
    this.vehicleNumber = car.carNoPlate;
  }

}
