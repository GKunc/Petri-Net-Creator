import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-step-one',
  templateUrl: './menu-step-one.component.html',
  styleUrls: ['./menu-step-one.component.css']
})
export class MenuStepOneComponent implements OnInit {
  @Output() addPlace: EventEmitter<any> = new EventEmitter();
  @Output() addTransition: EventEmitter<any> = new EventEmitter();
  @Output() addNewArc: EventEmitter<any> = new EventEmitter();
  @Output() addToken: EventEmitter<any> = new EventEmitter();
  @Output() deleteElement: EventEmitter<any> = new EventEmitter();
  @Output() justifyElements: EventEmitter<any> = new EventEmitter();
  @Output() defaultCursor: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addPlaceEvent(): void {
    this.addPlace.emit();
  }
  addTransitionEvent(): void {
    this.addTransition.emit();
  }

  addArcEvent(): void {
    this.addNewArc.emit();
  }

  addTokenEvent(): void {
    this.addToken.emit();
  }

  deleteElementEvent(): void {
    this.deleteElement.emit();
  }

  defaultCursorEvent(): void {
    this.defaultCursor.emit();
  }

  justifyElementsEvent(): void {
    this.justifyElements.emit();
  }
}
