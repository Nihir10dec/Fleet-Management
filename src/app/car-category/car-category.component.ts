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
  public previouscomponentdata='';
  constructor(private carserv1:CarServService,
    private router:Router) { 
    this.carcatgry=[];
  }

  ngOnInit(): void {
    this.carserv1.getCarCategories().subscribe(data=>this.carcatgry=data);
    this.carserv1.on<any>().subscribe(data=>this.previouscomponentdata=data);
  }
  CarSelected(c:CarCategories)
  {
    this.carserv1.emit<CarCategories>(c);
    console.log(c);
    this.router.navigateByUrl('');
  }
}
