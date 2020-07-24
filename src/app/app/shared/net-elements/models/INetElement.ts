export interface INetElement {
    create(): void;
    move(): void;
    select(element: HTMLElement): void;
    unselect(element: HTMLElement): void;
}