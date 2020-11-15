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

    create(id: number, prefix: string = ''): void {
        const token: Token = new Token();
        token.create(id, prefix);
        this.tokens.push(token);
    }

    remove(id: number, prefix: string = ''): void {
        TokenHelper.remove(id, prefix);
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
