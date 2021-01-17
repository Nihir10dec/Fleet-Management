import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../customer.service';
import { ICustomer } from '../icustomer';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  id: number;
  pass:string='';
    message='';
    customer!:ICustomer;
    @Output() Directlogin: EventEmitter<any> = new EventEmitter();
constructor(private _custservice:CustomerService){}

ngOnInit(): void {
}
  
async go()
   {  
    this.customer=await this._custservice.getCustomerByCode(this.id);
    console.log(this.customer);
   if ((this.id == this.customer.customerId) && this.pass == this.customer.password) {

      this.Directlogin.emit(this.customer);

    }else{
    this.message="Invalid password or MemberShip Number";
      return ;
    }
  }

}
