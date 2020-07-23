export interface INetElement {
    create(): void;
    delete(event: KeyboardEvent): void;
    move(): void;
    select(element: HTMLElement): void;
    unselect(element: HTMLElement): void;
}