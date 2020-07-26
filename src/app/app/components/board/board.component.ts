import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Output("createPdf") createPdfEmitter: EventEmitter<any> = new EventEmitter();
  @Output("saveNet") saveNetEmitter: EventEmitter<any> = new EventEmitter();
  @Output("openClearBoardDialog") openClearBoardDialogEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createPdf(): void {
    this.createPdfEmitter.emit();
  }

  saveNet(): void {
    this.saveNetEmitter.emit();
  }

  openClearBoardDialog(): void {
    this.openClearBoardDialogEmitter.emit();
  }
}
