import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Output("createPdf") createPdfEmitter: EventEmitter<any> = new EventEmitter();
  @Output("saveNet") saveNetEmitter: EventEmitter<any> = new EventEmitter();
  @Output("openClearBoardDialog") openClearBoardDialogEmitter: EventEmitter<any> = new EventEmitter();
  
  @Input() placeCursor: boolean;
  @Input() transitionCursor: boolean;
  @Input() arcCursor: boolean;
  @Input() tokenCursor: boolean;
  @Input() deleteCursor: boolean;

  constructor() {}

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
