export interface INetElement {
    create(): void;
    move(): void;
    select(element: HTMLElement, label: HTMLElement): void;
    unselect(element: HTMLElement, label: HTMLElement): void;
}