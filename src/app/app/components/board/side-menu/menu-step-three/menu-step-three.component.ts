import { ExampleNetsDialogComponent } from './../../../dialogs/example-nets-dialog/example-nets-dialog.component';
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
    this.netRepository.minimizeNet();
  }
}
