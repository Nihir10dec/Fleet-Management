import { StaffService } from './../staff.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user;

  constructor(private _staffservice : StaffService) { }

  ngOnInit(): void {
    this._staffservice.on().subscribe(data => this.user = data);
  }

  logout(){
    this.user = undefined;
  }

}
