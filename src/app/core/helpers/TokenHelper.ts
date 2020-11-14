import { TOKEN_FILL_COLOR, TOKEN_RADIUS } from './../../app/shared/constants';

export class TokenHelper {

    static getAll(): HTMLCollection {
        return document.getElementsByClassName('token');
    }

    static remove(id: number): void {
        const token = document.getElementById(`token-place-${id}`);
        if (token !== null) {
            document.getElementById('svg-board').removeChild(token);
        }
    }

    static removeAll(): void {
        Array.from(document.getElementsByClassName('token')).forEach(token => {
            document.getElementById('svg-board').removeChild(token);
        });
    }

    static createToken(id: number): void {
        const xPosition = Number(document.getElementById(`place-${id}`).getAttribute('cx'));
        const yPosition = Number(document.getElementById(`place-${id}`).getAttribute('cy'));

        const token = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const cursors = document.getElementById('cursors');

        token.setAttribute('id', 'token-place-' + id);
        token.setAttribute('class', 'net-element token');
        token.setAttribute('cx', xPosition.toString());
        token.setAttribute('cy', yPosition.toString());
        token.setAttribute('r', TOKEN_RADIUS.toString());
        token.setAttribute('stroke', 'black');
        token.setAttribute('stroke-width', '2');
        token.setAttribute('fill', TOKEN_FILL_COLOR);
        token.setAttribute('style', 'cursor: pointer');

        const board = document.getElementById('svg-board');
        board.insertBefore(token, cursors);
   }

    static moveToken(token: HTMLElement, xPosition: number, yPosition: number): void {
        const x = (xPosition - 200);
        const y = (yPosition - 15);
        token.setAttribute('cx', x.toString());
        token.setAttribute('cy', y.toString());
    }
}
