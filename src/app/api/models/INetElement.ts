export interface INetElement {
    getID(): number | string;
    create(...args): void;
}
