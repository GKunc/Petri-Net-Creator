import { Arc } from './../api/net-elements/Arc';
import { Transition } from './../api/net-elements/Transition';
import { Place } from './../api/net-elements/Place';
import { INetElement } from './../api/net-elements/INetElement';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Petri Nets Creator';

  objects: INetElement[];

  constructor() {
    this.objects = [];
  }

  addPlace() {
    let netElement: INetElement = new Place(1, 100, 100);
    this.objects.push(netElement);
    netElement.draw();
  }

  addTransition() {
    let netElement: INetElement = new Transition(1, 100, 100);
    this.objects.push(netElement);
    netElement.draw();
  }

  addArc() {
    let netElement: INetElement = new Arc(1, 2);
    this.objects.push(netElement);
    netElement.draw();
  }

  undo() {
    alert("Undo");
  }

  saveNet() {
    alert("saveNet");
  }

  createPdf() {
    alert("Create PDF");
  }

  clear() {
    alert("Clear");
  }
}
