import { NetHelper } from './../../../../../core/helpers/NetHelper';
import { MinimizedNetHelper } from './../../../../../core/helpers/MinimizedNetHelper';
import { BoardHelper } from './../../../../../core/helpers/BoardHelper';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NetMatrixDialogComponent } from './../../../dialogs/net-matrix-dialog/net-matrix-dialog.component';
import { NetRepository } from './../../../../../core/repositories/NetRepository';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-menu-step-three',
  templateUrl: './menu-step-three.component.html',
  styleUrls: ['./menu-step-three.component.css']
})
export class MenuStepThreeComponent implements OnInit {

  netRepository: NetRepository;
  netMatrixDialogRef: MatDialogRef<NetMatrixDialogComponent>;

  constructor(
    @Inject(NetRepository) netRepository: NetRepository,
    private dialog: MatDialog
  ) {
    this.netRepository = netRepository;
  }

  ngOnInit(): void {
  }

  showNetMatrix(): void {
    this.netMatrixDialogRef = this.dialog.open(NetMatrixDialogComponent);
  }

  minimizeNet(): void {
    this.netRepository.isNetMinimized = true;
    // save position of elements
    this.netRepository.minimizeNet();
    this.clearBoard();
    MinimizedNetHelper.displayMainNet(this.netRepository.mainMinimizedMatrix);
    MinimizedNetHelper.displaySubnets(this.netRepository.subnetMinimizedMatrices);
    this.netRepository.addSignalsToMinimizedNet();
  }

  backToUnminimizedNet(): void {
    this.netRepository.isNetMinimized = false;
    this.clearBoard();
    NetHelper.displayNet(
      this.netRepository.netMatrix,
      this.netRepository.placeRepository.getAll(),
      this.netRepository.transitionRepository.getAll()
    );
    this.netRepository.addSignalsToUnminimizedNet();
  }

  clearBoard(): void {
    const board = BoardHelper.getBoard();
    let cloneCursors: Node;
    while (board.firstChild) {
      if (board.firstElementChild.getAttribute('id') === 'cursors') {
        cloneCursors = board.firstChild;
      }
      board.removeChild(board.firstChild);
    }
    board.appendChild(cloneCursors);
    BoardHelper.addArrowHeadMarker();
  }
}
