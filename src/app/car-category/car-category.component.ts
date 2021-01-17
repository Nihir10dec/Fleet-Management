import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarCategories } from '../car-categories';
import { CarServService } from '../car-serv.service';

@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.css']
})
export class CarCategoryComponent implements OnInit {

  carcatgry:CarCategories[];
  previouscomponentdata:any;
  loc:any;
  carcatobj:any;
  constructor(private carserv1:CarServService,
    private router:Router) { 
    this.carcatgry=[];
  }

  ngOnInit(): void {
    this.previouscomponentdata=history.state.data;
    this.loc=history.state.data1;
    this.carserv1.getCarCategories().subscribe(data=>this.carcatgry=data);
    this.carserv1.on<any>().subscribe(data=>this.previouscomponentdata=data);
  }
  CarSelected(c:CarCategories)
  {
    this.carserv1.emit<CarCategories>(c);
    console.log(c);
    this.carcatobj=c;
    this.router.navigate(['/AddOn'] , {state: {data: this.previouscomponentdata,data1:this.loc,data2:this.carcatobj}} );
  }
}
