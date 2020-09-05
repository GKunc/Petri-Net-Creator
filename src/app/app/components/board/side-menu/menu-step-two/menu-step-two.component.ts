import { TransitionHelper } from './../../../../../core/helpers/TransitionHelper';
import { BoardHelper } from './../../../../../core/helpers/BoardHelper';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-step-two',
  templateUrl: './menu-step-two.component.html',
  styleUrls: ['./menu-step-two.component.css']
})
export class MenuStepTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startSimulation(): void {
    $(BoardHelper.getBoard()).off();
    $('.net-element').off();
    TransitionHelper.runTransition();
  }
}
