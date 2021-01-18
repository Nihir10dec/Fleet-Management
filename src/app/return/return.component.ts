import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReturnServService } from '../return-serv.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  form1: FormGroup;
  returnobj: any;
  carsobj:any[];
  fuelstatuss: Array<string> = ['1/4', '1/2', '3/4', 'full']

  constructor(private fb: FormBuilder,
    private serv:ReturnServService) {
    this.form1 = fb.group({
      BookingId: ['', Validators.required],
      VehicleNo: ['', Validators.required],
      carstatus: ['', Validators.required],
      fuelstatus: ['', Validators.required]
    });
    this.carsobj=[];
  }

  get BookingId() {
    return this.form1.get('BookingId');
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
  Loadselectcar(f:any)
  {
    console.log(f.value);
    let i=parseInt(f.value);
    //this.serv.getcarsbyid(i).subscribe(data=>this.carsobj=data);
  }

}
