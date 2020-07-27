export interface INetElement {
    getID(): number | string;
    create(...args): void;
    move(): void;
    select(element: HTMLElement, label: HTMLElement): void;
    unselect(element: HTMLElement, label: HTMLElement): void;
}