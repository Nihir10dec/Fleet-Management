import { LocationSelectionServiceService } from './../location-selection/location-selection-service.service';
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
  hub:any;
  amount :number;
  
  constructor(private datepipe:DatePipe , private _hubservice : LocationSelectionServiceService) {
    this.date=new Date();
    this.date=this.datepipe.transform(this.date,'dd/MM/YYYY');
    console.log(this.date);
   }
   //{state: {data: this.billingobj, data1 : this.vehicleNumber , data2:this.customerobj}} )
  ngOnInit(): void {
    this.invoiceData=history.state.data;
    this.Carobj = history.state.data1;
    this.bookingobj = history.state.data2;
    this.amount = history.state.finalamout;
    console.log(this.invoiceData , this.bookingobj);
    this._hubservice.getLocationByCode(this.invoiceData.Hub_hubId).subscribe(data => this.hub = data);
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Payment receipt</title>
          <style>
          @import "~bootstrap/dist/css/bootstrap.css";
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto:wght@300;400;500;700&display=swap');
body{
    font-family: 'Poppins', sans-serif !important;
    font-weight:200 !important;
}
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
}
  
