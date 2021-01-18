import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  @Input() public homepage;
  @Input() public locationdata;
  @Input() public carcatgory;
  @Input() public addonsum;
  @Input() public addonstring;
  constructor() { }

  ngOnInit(): void {
  }

}
