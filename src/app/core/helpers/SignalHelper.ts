export class SignalHelper {

    static createLabel(transitionNumber: number, signalIDs: number[], xPosition: number, yPosition: number): void {
        const cursors = document.getElementById('cursors');
        const board = document.getElementById('svg-board');
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'label');
        text.setAttribute('id', 'label-signal-' + transitionNumber);
        text.setAttribute('x', (xPosition + 80).toString());
        text.setAttribute('y', (yPosition - 20).toString());
        text.setAttribute('fill', 'black');
        text.setAttribute('dy', '.3em');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '14px');
        text.setAttribute('style', 'cursor: pointer; font-weight: bold;');
        signalIDs.forEach(id => {
            if (signalIDs.findIndex(element => element === id) !== signalIDs.length - 1) {
                text.innerHTML += 'x' + id + ' &and; ';
            } else {
                text.innerHTML += 'x' + id;
            }
        });
        board.insertBefore(text, cursors);
    }
}
