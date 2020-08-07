import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Output() createPdf: EventEmitter<any> = new EventEmitter();
  @Output() saveNet: EventEmitter<any> = new EventEmitter();
  @Output() openClearBoardDialog: EventEmitter<any> = new EventEmitter();

  @Input() placeCursor: boolean;
  @Input() transitionCursor: boolean;
  @Input() arcCursor: boolean;
  @Input() tokenCursor: boolean;
  @Input() deleteCursor: boolean;

  constructor() {}

  ngOnInit(): void {
  }

  createPdfEvent(): void {
    this.createPdf.emit();
  }

  saveNetEvent(): void {
    this.saveNet.emit();
  }

  openClearBoardDialogEvent(): void {
    this.openClearBoardDialog.emit();
  }
}
