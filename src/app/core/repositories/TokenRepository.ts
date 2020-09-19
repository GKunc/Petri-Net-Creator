import { TokenHelper } from './../helpers/TokenHelper';
import { Token } from './../models/Token';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenRepository {
    tokens: Token[];

    constructor() {
        this.tokens = [];
    }

    create(id: number): void {
        if (this.tokens.includes(this.getByID(id))) {
            return;
        }
        const token: Token = new Token(id);
        const x = Number(document.getElementById(`place-${id}`).getAttribute('cx')) + 170;
        const y = Number(document.getElementById(`place-${id}`).getAttribute('cy'));
        token.create(x, y);
        this.tokens.push(token);
    }

    remove(id: number): void {
        TokenHelper.remove(id);
        const index = this.tokens.indexOf(this.getByID(id));
        if (index !== -1) {
            this.tokens.splice(index, 1);
        }
    }

    removeAll(): void {
        this.tokens = [];
    }

    getAll(): Token[] {
        return this.tokens;
    }

    getByID(id: number): Token {
        return this.tokens.find(place => place.getID() === id);
    }

    deleteElementByID(id: number): void {
        const index = this.tokens.indexOf(this.getByID(id));
        if (index !== -1) {
            this.tokens.splice(index, 1);
        }
    }
}
