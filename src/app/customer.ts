import { Injectable } from "@angular/core";
import { ICustomer } from "./icustomer";

export class Customer implements ICustomer{

    constructor(
        public customerId:number,
       public first_name:String,
       public last_name:String,
       public  address:String,
  
       public  emailId:String,
       public  city:String,
      
       public cellNo:number,
       public creditcardType:String,
       public creditcard_Number:Number,
       public drivingLiscen_Number:string,
       public validThrough:String,
       public passport_Number:Number,
       public passport_valid:String,
       public password:String
      
    ){}
   
}
@Injectable()
export class CustomerAdapter {
    
    CustomerAdapter(){}
    adapt(item:any): Customer
    {
        return new Customer(item.customerId,item.first_name,item.last_name,item.address,item.emailId,item.city,
            item.cellNo,item.creditcardType,item.creditcard_Number,item.drivingLiscen_Number,item.validThrough,item.passport_Number,
            item.passport_valid,item.password);
    }
}


