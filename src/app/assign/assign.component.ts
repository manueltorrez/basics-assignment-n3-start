import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styles: [`
    .hai {
      color:white;
     }
  `]
})
export class AssignComponent implements OnInit {

  toggle = true;
  number = 1;
  numbers = [1];

  constructor() { }

  ngOnInit() {
  }

  setToggle() {
    this.number++;
    this.numbers.push(this.number);
    if (this.toggle !== true) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }


}
