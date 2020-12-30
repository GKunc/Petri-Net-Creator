import { MinimizedNetBuilder } from './../../../../../core/builders/MinimizedNetBuilder';
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
    this.netRepository.buildNetMatrix();
    if (!this.netRepository.isNetMinimized && this.netRepository.netMatrix.length > 0) {
      this.netRepository.isNetMinimized = true;
      this.netRepository.minimizeNet();
      this.clearBoard();
      const minimizedNetHelper = new MinimizedNetHelper(this.netRepository.transitionRepository, this.netRepository.placeRepository);
      const { minYPosition, maxYPosition } =
        minimizedNetHelper.displaySubnets(this.netRepository.mainMinimizedMatrix, this.netRepository.subnetMinimizedMatrices);
      minimizedNetHelper.createBordersForSubnets(this.netRepository.subnetMinimizedMatrices);
      minimizedNetHelper.displayMainNet(this.netRepository.mainMinimizedMatrix, minYPosition, maxYPosition);
      this.netRepository.addSignalsToMinimizedNet();
    }
  }

  backToUnminimizedNet(): void {
    if (this.netRepository.isNetMinimized) {
      this.netRepository.isNetMinimized = false;
      this.clearBoard();
      NetHelper.displayNet(
        this.netRepository.netMatrix,
        this.netRepository.placeRepository.getAll(),
        this.netRepository.transitionRepository.getAll()
      );
      this.netRepository.addSignalsToUnminimizedNet();
    }
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

  saveNet(): void {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.createJson())));
    element.setAttribute('download', 'net_matrices.json');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  private createJson(): {} {
    this.netRepository.buildNetMatrix();
    const netMatrix = this.netRepository.netMatrix;

    const minimizedNetBuilder = new MinimizedNetBuilder(netMatrix);
    const mainMinimizedMatrix = minimizedNetBuilder.createMainMatrix();
    const subnetMinimizedMatrices = minimizedNetBuilder.createSubnetMatrices();

    const subnetMatrices = [];
    subnetMinimizedMatrices.forEach((matrix) => {
      subnetMatrices.push(matrix.net);
    });

    return {
      'Unminimized Matrix': JSON.stringify(netMatrix),
      'Minimized Matrix': JSON.stringify(mainMinimizedMatrix.net),
      'Subnet Matrices': JSON.stringify(subnetMatrices)
    };
  }
}
