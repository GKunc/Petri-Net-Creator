import { CursorManager } from './shared/cursorManager';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Petri Nets Creator';

  cursorManager: CursorManager;

  constructor(
      @Inject(CursorManager) cursorManager: CursorManager
    ) {
    this.cursorManager = cursorManager;
    this.cursorManager.setDefaultCursor();
    this.cursorManager.cursorImageMove();
  }
}
