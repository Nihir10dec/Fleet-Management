import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-generation',
  templateUrl: './invoice-generation.component.html',
  styleUrls: ['./invoice-generation.component.css']
})
export class InvoiceGenerationComponent implements OnInit {

  invoiceData :any;
  vehicleNumber: number;
  customerobj : any;
  selectcars :any;
  constructor() { }

  ngOnInit(): void {
    this.invoiceData=history.state.data;
    this.vehicleNumber = history.state.data1;
    this.customerobj = history.state.data2;
    this.selectcars = history.state.data3;
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
