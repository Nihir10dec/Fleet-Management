import { Component, OnInit } from '@angular/core';
import { Billing } from '../billing';
import { CarCategories } from '../car-categories';
import { InvoiceServiceService } from './invoice-service.service';

@Component({
  selector: 'app-invoice-generation',
  templateUrl: './invoice-generation.component.html',
  styleUrls: ['./invoice-generation.component.css']
})
export class InvoiceGenerationComponent implements OnInit {

  invoiceData : Billing = null;
  carCategoryData : CarCategories = null;
  constructor(private _invoiceServiceService : InvoiceServiceService) { }

  ngOnInit(): void {
  }

  seleectCarCategoryId( carCatId : any)
  {
    this._invoiceServiceService.getCarCategorybyCode(carCatId).subscribe(data=> this.carCategoryData =data);
  }

  selectedBillingId(BookingId : any){
    const bkid = BookingId.value;
    
    this._invoiceServiceService.getBillingIdByCode(bkid).subscribe(data=> this.invoiceData=data);
    var carCatId = this.invoiceData.CarCategories_categoryId;
    console.log(carCatId);
    {
      this._invoiceServiceService.getCarCategorybyCode(carCatId).subscribe(data=> this.carCategoryData =data);
    }
  }
}
