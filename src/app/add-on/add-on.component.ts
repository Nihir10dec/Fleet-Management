import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, NgForm} from "@angular/forms";
import { Ammenities } from './ammenities.model';
import { AddOnServiceService } from "./add-on-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})

export class AddOnComponent implements OnInit {
  comp1:any;
  comp2:any;
  comp3:any;
  AmmenitiesData  : Ammenities[];
  selectedOption: string ='';
  returnAmenitiesData : string ='';

  options = [
    { name: 1, value: 1},
    { name: 2, value: 2},
    { name: 3, value: 3}
  ]
  constructor(private _AddOnService: AddOnServiceService,private router:Router ) {
  }
  
  ngOnInit() {
    this.comp1=history.state.data;
    this.comp2=history.state.data1;
    this.comp3=history.state.data2;
    this._AddOnService.getAmmenities().subscribe(data=> this.AmmenitiesData=data);
    console.log("Hello");
  }
  
  selectedAmmenities(ammenitiesSelection: NgForm){
    var a = ammenitiesSelection.value;
    var sum =0;
    if (a['10']== true) {

    sum= sum +10; 
    this.returnAmenitiesData += this.AmmenitiesData[0].ammenitiesName;
   }

   if (a['30']== true) {

    sum= sum +30; 
    this.returnAmenitiesData += this.AmmenitiesData[1].ammenitiesName;
   }

    if (a['2']== true) {
      sum= sum +2 ; 
      var no = 1;
      if(this.selectedOption){
        no = parseInt(this.selectedOption);
        sum = sum + 2 *( no) -2;
      }
     
      this.returnAmenitiesData += this.AmmenitiesData[2].ammenitiesName +"; No of seats selected: "+ no;
    }
    console.log(sum);
    console.log(this.returnAmenitiesData);

    this.router.navigate(['/memberRegistrationForm'] , {state: {data: this.comp1,data1:this.comp2,data2:this.comp3,data3:sum,data4:this.returnAmenitiesData}} );
  }
  
}
