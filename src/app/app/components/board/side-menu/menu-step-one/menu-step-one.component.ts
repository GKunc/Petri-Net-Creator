import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-step-one',
  templateUrl: './menu-step-one.component.html',
  styleUrls: ['./menu-step-one.component.css']
})
export class MenuStepOneComponent implements OnInit {
  @Output("addPlace") addNewPlace: EventEmitter<any> = new EventEmitter();
  @Output("addTransition") addNewTransition: EventEmitter<any> = new EventEmitter();
  @Output("addArc") addNewArc: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addPlace(): void {
    this.addNewPlace.emit();
  }
  addTransition(): void {
    this.addNewTransition.emit();
  }

  addArc(): void {
    this.addNewArc.emit();
  }
}
