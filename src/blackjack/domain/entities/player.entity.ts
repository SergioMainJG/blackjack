import { PlayerComponent } from "./player";

export abstract class PlayerDecorator implements PlayerComponent {

    constructor(
        protected player: PlayerComponent
    ) { }

    getScore(): number {
        return this.player.getScore();
    }
    setScore(points: number): void {
        this.player.setScore(points);
    }
    reset(): void {
        this.player.reset();
    }

}