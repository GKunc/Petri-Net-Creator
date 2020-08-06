import { token_radius, token_fill_color } from './../../app/shared/constants';
import { place_radius, place_fill_color } from '../../app/shared/constants';
import * as $ from 'jquery';

export class TokenHelper {
    
    static getAll(): HTMLCollection {
        return document.getElementsByClassName('token');
    }

    static createToken(id: number, x_position: number, y_position: number): void {
        let token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let cursors = document.getElementById('cursors');

        token.setAttribute("id", "token-" + id);
        token.setAttribute("class", "net-element token");
        token.setAttribute("cx", x_position.toString());
        token.setAttribute("cy", y_position.toString());
        token.setAttribute("r", token_radius.toString());
        token.setAttribute("stroke", "black");
        token.setAttribute("stroke-width", '2');
        token.setAttribute("fill", token_fill_color);
        token.setAttribute("style", "cursor: pointer");
        
        let board = document.getElementById('svg-board');
        board.insertBefore(token, cursors);
   }
}