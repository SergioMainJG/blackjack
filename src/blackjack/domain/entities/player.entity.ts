
type gameLogger = {
    score: number,
    log: 'W' | 'L' | 'T'
}

export class Player {
    private _score: number = 0;
    private _log: gameLogger[] = [];

    constructor() { }

    get score(): number {
        return this._score;
    }
    set score(points: number) {
        this._score += points;
    }
    get log(): gameLogger[] {
        return this._log;
    }
    set log(log: gameLogger) {
        this._log.push(log);
    }
    private reset() {
        this._score = 0;
    }
    
}