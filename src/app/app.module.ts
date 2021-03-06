import { NetMatrixDialogComponent } from './app/components/dialogs/net-matrix-dialog/net-matrix-dialog.component';
import { AddInputSignalsDialogComponent } from './app/components/dialogs/add-input-signals-dialog/add-input-signals-dialog.component';
import { ExampleNetsDialogComponent } from './app/components/dialogs/example-nets-dialog/example-nets-dialog.component';
import { CursorManager } from './app/shared/cursorManager';
import { ClearBoardDialogComponent } from './app/components/dialogs/clear-board-dialog/clear-board-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuStepOneComponent } from './app/components/board/side-menu/menu-step-one/menu-step-one.component';
import { MenuStepTwoComponent } from './app/components/board/side-menu/menu-step-two/menu-step-two.component';
import { MenuStepThreeComponent } from './app/components/board/side-menu/menu-step-three/menu-step-three.component';
import { BoardComponent } from './app/components/board/board.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClearBoardDialogComponent,
    ExampleNetsDialogComponent,
    AddInputSignalsDialogComponent,
    NetMatrixDialogComponent,
    MenuStepOneComponent,
    MenuStepTwoComponent,
    MenuStepThreeComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    MatExpansionModule,
    CommonModule
  ],
  providers: [CursorManager],
  bootstrap: [AppComponent],
  entryComponents: [
    ClearBoardDialogComponent,
    ExampleNetsDialogComponent,
    AddInputSignalsDialogComponent,
    NetMatrixDialogComponent
  ]
})

export class AppModule { }
