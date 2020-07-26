import { ClearBoardDialogComponent } from './app/components/dialogs/clear-board-dialog/clear-board-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuStepOneComponent } from './app/components/board/side-menu/menu-step-one/menu-step-one.component';
import { MenuStepTwoComponent } from './app/components/board/side-menu/menu-step-two/menu-step-two.component';
import { MenuStepThreeComponent } from './app/components/board/side-menu/menu-step-three/menu-step-three.component';
import { BoardComponent } from './app/components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    ClearBoardDialogComponent,
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClearBoardDialogComponent]
})

export class AppModule { }
