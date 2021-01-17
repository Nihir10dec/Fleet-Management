import { Router } from '@angular/router';
import { ICity } from './../Icity';
import { IState } from './../Istate';
import {
  StatecityService
} from './../statecity.service';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import {
  Observable
} from 'rxjs';


@Component({
  selector: 'app-date-location-selection',
  templateUrl: './date-location-selection.component.html',
  styleUrls: ['./date-location-selection.component.css']
})
export class DateLocationSelectionComponent implements OnInit {
  bookingForm = new FormGroup({
    fromState : new FormControl(),
    fromCity : new FormControl(),
    toState : new FormControl(),
    toCity :  new FormControl(),
    range : new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    })
  })
  myControl = new FormControl();
  states : IState[];
  cities : ICity[];
  fromCities : ICity[];
  toCities : ICity[];
  returnDiffLocation = false;
  filteredOptions: Observable < ICity[] > ;
  minDate: Date;
  submitted = false;

  constructor(private _statecityservice: StatecityService , private router : Router) {
    this.minDate = new Date();
  }

  async ngOnInit() {
    this.states = await this._statecityservice.getStates();
    this.cities = await this._statecityservice.getCities();
  }

  fillFromCity(){
    this.fromCities = this.cities.filter(city => this.bookingForm.get('fromState').value  == city.State_stateId )
  }
  fillToCity(){
    this.toCities = this.cities.filter(city => this.bookingForm.get('toState').value  == city.State_stateId )
  }
  handleReturnDiffLocation(){
    this.returnDiffLocation = !this.returnDiffLocation;
  }

  onSubmit(bookingForm : FormGroup){
    this.submitted = true;
    console.log("inside submit");
    this.router.navigate(['/locationselection'] , {state: {data: bookingForm.value }} )
  }
  get fromState() {
    return this.bookingForm.get('fromState'); // notice this
  }
  get fromCity() {
    return this.bookingForm.get('fromCity'); // and this too
  }
  get toState() {
    return this.bookingForm.get('toState');
  }
  get toCity() {
    return this.bookingForm.get('toCity');
  }
  get range() {
    return this.bookingForm.get('range')
  }
}
