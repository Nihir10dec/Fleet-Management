import { ICity } from './../Icity';
import { IState } from './../Istate';
import {
  StatecityService
} from './../statecity.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  map,
  startWith
} from 'rxjs/operators';


@Component({
  selector: 'app-date-location-selection',
  templateUrl: './date-location-selection.component.html',
  styleUrls: ['./date-location-selection.component.css']
})
export class DateLocationSelectionComponent implements OnInit {
  bookingForm = new FormGroup({

    range : new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    }),
    fromState : new FormControl(),
    fromCity : new FormControl(),
    toState : new FormControl(),
    toCity :  new FormControl(),
  })
  myControl = new FormControl();
  states : IState[];
  cities : ICity[];
  fromCities : ICity[];
  toCities : ICity[];
  returnDiffLocation = false;
  filteredOptions: Observable < ICity[] > ;
  minDate: Date;

  async ngOnInit() {
    this.states = await this._statecityservice.getStates();
    this.cities = await this._statecityservice.getCities();

    this.filteredOptions = this.bookingForm.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.cities.slice()));

    // console.log(this.states , this.cities);
  }
  
  constructor(private _statecityservice: StatecityService) {
    this.minDate = new Date();
  }

  displayFn(city: ICity): string {
    return city && city.cityName ? city.cityName  : '';
  }

  private _filter(name: string): ICity[] {
    const filterValue = name.toLowerCase();

    return this.cities.filter(option => option.cityName.toLowerCase().indexOf(filterValue) === 0);
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
}
