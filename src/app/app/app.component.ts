import { NetRepository } from './../core/repositories/NetRepository';
import { CursorManager } from './shared/cursorManager';
import { Component, Inject } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Petri Nets Creator';

  cursorManager: CursorManager;
  netRepository: NetRepository;

  constructor(
      @Inject(CursorManager) cursorManager: CursorManager,
      @Inject(NetRepository) netRepository: NetRepository
    ) {
    this.cursorManager = cursorManager;
    this.netRepository = netRepository;
    this.cursorManager.setDefaultCursor();
    this.cursorManager.cursorImageMove();
  }

  public onStepChange(event: any): void {
    if (event.selectedIndex !== 1) {
      this.disableAllTransitions();
    }
  }

  private disableAllTransitions(): void {
    this.netRepository.transitionRepository.getAll().forEach(transition => {
      const transitionElement = document.getElementById(`transition-${transition.getID()}`);
      transitionElement.setAttribute('stroke', 'black');
      transitionElement.classList.remove('ready-to-be-fired');
      $(transitionElement).off();
    });
  }
}
