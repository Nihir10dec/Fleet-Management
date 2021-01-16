import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  // @Output() newEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(history.state.data)
    // this.newEvent.emit(history.state.data);
  }

}
