import { PlayerDecorator } from "./player.entity";

export class PlayerIA extends PlayerDecorator {

    constructor(player: PlayerDecorator) {
        super(player);
    }

    shouldRequestOtherCard(opponentPoints: number): boolean {
        return (21 - opponentPoints >= 10)
            ? true
            : false

    }
}