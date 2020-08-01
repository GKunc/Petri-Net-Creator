import * as $ from 'jquery';

export class BoardHelper {
    static selectedElements: string[] = [];

    static setDefualtCursor(): void {
        $(this.getBoard()).off('click');

        let classList = this.getBoard().classList;
        if(classList.contains('cursor-place')) {
            this.getBoard().classList.remove('cursor-place');
        } else if(classList.contains('cursor-transition')) {
            this.getBoard().classList.remove('cursor-transition');
        } else if(classList.contains('cursor-arc')) {
            this.getBoard().classList.remove('cursor-arc');
        }
    }

    static getSelectedElements(): HTMLCollection {
        return document.getElementsByClassName('selected');
    }

    static getSelectedElementsWithoutLabels(): Element[] {
        return Array.from(this.getSelectedElements()).filter(selectedEelemnt => {
            return !selectedEelemnt.getAttribute('id').startsWith('label');
        })
    }

    static removeSelection(): void {
        Array.from(this.getSelectedElements()).forEach(element => {
            element.classList.remove('selected');
            if(!element.getAttribute('id').includes('label')) {
                element.setAttribute('stroke', 'black');
            }
        });
        this.selectedElements = [];
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

    static addArrowHeadMarker() {
        let defs = document.createElementNS("http://www.w3.org/2000/svg","defs");
        let marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');

        marker.setAttribute("id", "arrow");
        marker.setAttribute("viewBox", "0 0 10 10");
        marker.setAttribute("refX", "1");
        marker.setAttribute("refY", "5");
        marker.setAttribute("markerWidth", "10");
        marker.setAttribute("markerHeight", "10");
        marker.setAttribute("orient", "auto");

        let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
        path.setAttribute("fill", "black;");
        
        marker.appendChild(path);
        defs.appendChild(marker);
        this.getBoard().appendChild(defs);
    }

    static removeSelectedElementFromListByID(id: string) {
        let index = this.selectedElements.indexOf(id);
        if (index !== -1) {
            this.selectedElements.splice(index, 1);
        }
    }
}