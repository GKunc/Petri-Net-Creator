export class MinimizedNet {
    net: number[][];
    originalTransitions: number[];
    originalPlaces: number[];

    constructor(net: number[][], originalTransitions: number[], originalPlaces: number[]) {
        this.net = net;
        this.originalTransitions = originalTransitions;
        this.originalPlaces = originalPlaces;
    }
}
