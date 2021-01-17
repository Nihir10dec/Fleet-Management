import { ICity } from './../Icity';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, NgForm} from "@angular/forms";
import { LocationSelection } from "./location-selection";
import { LocationSelectionServiceService } from "./location-selection-service.service";

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.css']
})
export class LocationSelectionComponent implements OnInit {
  fromCity : ICity;
  locationData : LocationSelection[];
  constructor(private _locationService  : LocationSelectionServiceService) {
  }

  ngOnInit(){
    this.fromCity = history.state.data.fromCity;
    this._locationService.getLocations().subscribe(data=> this.locationData=data);
  }
 
  selectedLocation(locationSelection: NgForm){
    let loc  = locationSelection.value.locationSelected;
    console.log("Location Selected "+loc);
    //document.getElementById("selectedloc").innerHTML= "Location Selected "+loc;
    alert("Location Selected"+loc);
  }
}
