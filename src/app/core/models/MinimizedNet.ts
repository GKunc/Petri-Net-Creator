export class MinimizedNet {
    net: number[][];
    originalTransitions: number[];

    constructor(net: number[][], originalTransitions: number[]) {
        this.net = net;
        this.originalTransitions = originalTransitions;
    }
}
