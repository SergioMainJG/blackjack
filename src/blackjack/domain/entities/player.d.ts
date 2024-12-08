export interface PlayerComponent{
    getScore(): number;
    setScore( points: number ): void;
    reset(): void;
}
