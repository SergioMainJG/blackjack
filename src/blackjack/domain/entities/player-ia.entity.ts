import { PlayerDecorator } from "./player.entity";

export class PlayerIA extends PlayerDecorator {

    constructor(player: PlayerDecorator) {
        super(player);
    }

    shouldRequestOtherCard(opponentPoints: number): boolean {
        if (opponentPoints < 17 && this.player.getScore() < 17) return true;
        if ((opponentPoints >= 17 && opponentPoints <= 21) && this.player.getScore() < 21) return true;
        if (this.player.getScore() < 17) return true;
        return false;
    }
}