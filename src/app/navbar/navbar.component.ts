import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user = undefined;

  constructor(private _staffservice : StaffService) { }

  ngOnInit(): void {
    // console.log("user value is" + this.user);
    this._staffservice.on().subscribe(data => this.user = data);
  }

  logout(){
    this.user = undefined;
  }

}
