export interface INetElement {
    draw(): void;
    delete(): void;
    move(): void;
    select(): void;
    unselect(): void;
}