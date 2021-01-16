import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../icustomer';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  customer :any;
  memberForm!: FormGroup;
  
  constructor(public fb: FormBuilder, private dataserv: CustomerService,private router: Router){  }

   ngOnInit(){ 
   this.dataserv.on().subscribe(data=>this.customer=data);
  }
  confirm()
  {
    alert(console.log("Confirm booking"));
  }

}
