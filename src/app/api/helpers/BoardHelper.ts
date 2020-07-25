export class BoardHelper {
    static getSelectedElements(): HTMLCollection {
        return document.getElementsByClassName('selected');
    }

    static getBoard(): HTMLElement {
        return document.getElementById('svg-board');
    }

    static removeSelectionOfLabel(element: SVGElement): void {
        element.addEventListener('mousedown', function(e){
            if (e.detail > 1){
                e.preventDefault();
            }
        });
    }
}