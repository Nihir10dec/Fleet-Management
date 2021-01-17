import { ICity } from './../Icity';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, NgForm} from "@angular/forms";
import { LocationSelection } from "./location-selection";
import { LocationSelectionServiceService } from "./location-selection-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.css']
})
export class LocationSelectionComponent implements OnInit {
  fromCity : number;
  dateloc:any;
  locationData : LocationSelection[];
  constructor(private _locationService  : LocationSelectionServiceService,private router:Router) {
  }

  ngOnInit(){
    this.fromCity = history.state.data.fromCity;
    this.dateloc=history.state.data;
    this._locationService.getLocationByCityId(this.fromCity).subscribe(data=> this.locationData=data);
  }
 
  selectedLocation(locationSelection: NgForm){
    let loc:number = parseInt(locationSelection.value.locationSelected);
    console.log("Location Selected "+loc);
    //document.getElementById("selectedloc").innerHTML= "Location Selected "+loc;
    this.router.navigate(['/carcategory'] , {state: {data: this.dateloc,data1:loc}} );
  }
}
