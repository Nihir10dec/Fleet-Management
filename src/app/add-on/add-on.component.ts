import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, NgForm} from "@angular/forms";
import { Ammenities } from './ammenities.model';
import { AddOnServiceService } from "./add-on-service.service";

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})

export class AddOnComponent implements OnInit {
    
  AmmenitiesData  : Ammenities[];
  constructor(private _AddOnService: AddOnServiceService ) {
  }
  
  ngOnInit() {
    this._AddOnService.getAmmenities().subscribe(data=> this.AmmenitiesData=data);
    console.log("Hello");
  }
  
  selectedAmmenities(ammenitiesSelection: NgForm){
    console.log(ammenitiesSelection.value);
  }
  
}
