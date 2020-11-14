import { TokenHelper } from './../helpers/TokenHelper';
import { Token } from './../models/Token';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenRepository {
    private tokens: Token[];

    constructor() {
        this.tokens = [];
    }

    setTokens(tokens: Token[]): void {
        this.tokens = tokens;
    }

    create(id: number): void {
        const token: Token = new Token();
        token.create(id);
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
        TokenHelper.removeAll();
    }

    getAll(): Token[] {
        return this.tokens;
    }

    getByID(id: number): Token {
        return this.tokens.find(place => place.getID() === id);
    }
}
