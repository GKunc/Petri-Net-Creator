import { BoardHelper } from './../../core/helpers/BoardHelper';
import * as $ from 'jquery';

export class CursorManager {
    placeCursor: boolean;
    transitionCursor: boolean;
    arcCursor: boolean;
    tokenCursor: boolean;
    deleteCursor: boolean;

    resetEventHandlers(): void {
        $(BoardHelper.getBoard()).off();
        $('.net-element').off();
        this.cursorImageMove();
    }

    cursorImageMove(): void {
        $(BoardHelper.getBoard()).on('mousemove', (event) => {
          const element = document.getElementById('cursor-image');
          if (element === null) {
            return;
          }
          if (element.classList.contains('cursor-place')) {
            $(element).attr('cx', event.pageX - 200);
            $(element).attr('cy', event.pageY - 20);
          } else if (
                    element.classList.contains('cursor-transition') ||
                    element.classList.contains('cursor-arc') ||
                    element.classList.contains('cursor-token') ||
                    element.classList.contains('cursor-delete')
                  ) {
            $(element).attr('x', event.pageX - 235);
            $(element).attr('y', event.pageY - 35);
          }
      });
    }

    setDefaultCursor(): void {
        this.placeCursor = false;
        this.transitionCursor = false;
        this.arcCursor = false;
        this.tokenCursor = false;
        this.deleteCursor = false;
        this.cursorImageMove();
    }
}
