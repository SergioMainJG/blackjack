import { PlayerComponent } from "./player";

export class BasePlayer implements PlayerComponent {
    
    private _score: number = 0;

    getScore(): number {
        return this._score;
    }
    setScore(points: number): void {
        this._score += points;
    }
    reset(): void {
        this._score = 0;
    }
}