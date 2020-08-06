import { Token } from './../models/Token';
import { Injectable } from '@angular/core';
import { Place } from '../models/Place';

@Injectable({
    providedIn: 'root'
})
export class TokenRepository {
    tokens: Token[];

    constructor() {
        this.tokens = [];
    }

    create(id: number, x: number, y: number): void {
        let token: Token = new Token(id);
        token.create(x, y);
        this.tokens.push(token);
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
        let index = this.tokens.indexOf(this.getByID(id));
        if (index !== -1) {
            this.tokens.splice(index, 1);
        }
    }
}