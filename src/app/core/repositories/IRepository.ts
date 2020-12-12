export interface IRepository<T> {
    setElements(elements: T[]): void;
    create(...args): void;
    remove(...args): void;
    removeAll(): void;
    getByID(id: number): T;
    getAll(): T[];
}
