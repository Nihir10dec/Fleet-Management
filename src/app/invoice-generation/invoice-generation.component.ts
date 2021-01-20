import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-generation',
  templateUrl: './invoice-generation.component.html',
  styleUrls: ['./invoice-generation.component.css']
})
export class InvoiceGenerationComponent implements OnInit {

  invoiceData :any;
  Carobj: number;
  bookingobj : any;
  date:any;
  
  constructor(private datepipe:DatePipe) {
    this.date=new Date();
    this.date=this.datepipe.transform(this.date,'dd/MM/YYYY');
    console.log(this.date);
   }
   //{state: {data: this.billingobj, data1 : this.vehicleNumber , data2:this.customerobj}} )
  ngOnInit(): void {
    this.invoiceData=history.state.data;
    this.Carobj = history.state.data1;
    this.bookingobj = history.state.data2;
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  /*
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
  */
}
