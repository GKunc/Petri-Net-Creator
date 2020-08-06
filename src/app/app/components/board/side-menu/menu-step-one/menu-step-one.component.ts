import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-menu-step-one',
  templateUrl: './menu-step-one.component.html',
  styleUrls: ['./menu-step-one.component.css']
})
export class MenuStepOneComponent implements OnInit {
  @Output("addPlace") addNewPlace: EventEmitter<any> = new EventEmitter();
  @Output("addTransition") addNewTransition: EventEmitter<any> = new EventEmitter();
  @Output("addArc") addNewArc: EventEmitter<any> = new EventEmitter();
  @Output("addToken") addNewToken: EventEmitter<any> = new EventEmitter();
  @Output("deleteElement") deleteNetElement: EventEmitter<any> = new EventEmitter();
  @Output("justifyElements") justifyNetElements: EventEmitter<any> = new EventEmitter();

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

  addToken(): void {
    this.addNewToken.emit();
  }

  deleteElement(): void {
    this.deleteNetElement.emit();
  }

  justifyElements(): void {
    this.justifyNetElements.emit();
  }
}
