import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../icustomer';

@Component({
  selector: 'app-membership-registration',
  templateUrl: './membership-registration.component.html',
  styleUrls: ['./membership-registration.component.css']
})
export class MembershipRegistrationComponent implements OnInit {

  customer=new Customer(0,"","","","","",0 , '', 0 ,"", ' ' , 0 , "","");
  login !:Boolean;
  submitted=false;
  memberForm!: FormGroup;
  comp1:any;
  comp2:any;
  comp3:any;
  comp4:any;
  comp5:any;
  public alldata:any;
  constructor(public fb: FormBuilder, private dataserv: CustomerService,private router: Router) {  this.buildEmpForm()}

  ngOnInit(): void {
    this.comp1=history.state.data;
    this.comp2=history.state.data1;
    this.comp3=history.state.data2;
    this.comp4=history.state.data3;
    this.comp5=history.state.data4;
    this.alldata=history.state;
    console.log(this.comp1 , this.comp2 , this.comp3 , this.comp4 , this.comp5);
  }
  buildEmpForm() {
    
  
    this.memberForm = this.fb.group({
     First_Name: ['',Validators.required],
      Last_Name: ['', Validators.required],
      Address1: ['', Validators.required],
     
      EmailId: ['', [Validators.required,Validators.email]],
      City:[''],
       
        Cell:['',Validators.required],
        CreditcardType:['',Validators.required],
        CreditCard_Number:['',Validators.required],
        DrivingLiscen_Number:['',Validators.required],
       
        ValidThrouh:['',Validators.required],
        Passport_Number:['',Validators.required],
        Passport_Valid:['',Validators.required],
       
    });
  }
  ContinueBooking()
  {
    if (!this.memberForm.valid) {
      console.log(this.memberForm.value);
      return;
    }
     
      this.customer.first_name=this.memberForm.value.First_Name;
      this.customer.last_name=this.memberForm.value.Last_Name;
      this.customer.address=this.memberForm.value.Address1;
     
      this.customer.emailId=this.memberForm.value.EmailId;
      this.customer.city=this.memberForm.value.City;
 
      this.customer.cellNo=this.memberForm.value.Cell;
      this.customer.creditcardType=this.memberForm.value.CreditcardType;
      this.customer.creditcard_Number=this.memberForm.value.CreditCard_Number;
      this.customer.drivingLiscen_Number=this.memberForm.value.DrivingLiscen_Number;
    
      this.customer.validThrough=this.memberForm.value.ValidThrouh;
      this.customer.passport_Number=this.memberForm.value.Passport_Number;
      this.customer.passport_valid=this.memberForm.value.Passport_Valid;  

      this.dataserv.emit(this.customer);
      if(!this.login)
      {
        this.dataserv.postcustomer(this.customer).subscribe(data=>{this.dataserv.emit(data);   
                
          this.router.navigate(['/ConfirmBookingComponent'] , {state: {data: this.comp1,data1:this.comp2,data2:this.comp3,data3:this.comp4,data4:this.comp5}} );});
      }
      else{
        this.router.navigate(['/ConfirmBookingComponent'] , {state: {data: this.comp1,data1:this.comp2,data2:this.comp3,data3:this.comp4 ,data4:this.comp5}} );
      }
      
  }

  Directlogin(data:Customer)
  {
    this.login=true;
      this.customer=data;
     
      this.memberForm.patchValue({
        First_Name:this.customer.first_name,
        Last_Name:this.customer.last_name,
        Address1:this.customer.address,
    
        EmailId:this.customer.emailId,
        City:this.customer.city,
        
        Cell:this.customer.cellNo,
        CreditcardType:this.customer.creditcardType,
        CreditCard_Number:this.customer.creditcard_Number,
        DrivingLiscen_Number: this.customer.drivingLiscen_Number,
       
        ValidThrouh:this.customer.validThrough,
        Passport_Number: this.customer.passport_Number,
        Passport_Valid:this.customer.passport_valid,
      });
    
    }

}
