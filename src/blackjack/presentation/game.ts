import { BasePlayer, PlayerIA, createDeck, getCard, randomizeCards } from "../../blackjack";

function addCard(card: string): HTMLImageElement {
    const cardImg: HTMLImageElement = document.createElement('img');
    cardImg.src = `/imgs/cards/${card}.avif`;
    cardImg.classList.add('deck');
    cardImg.alt = `card: ${card}`;
    return cardImg;
}
type ResultGame = 'ComputerWin' | 'UserWin' | 'Tie'
function areWinner(points: number[]): ResultGame {
    const [userPoints, comPoints] = points;
    if (userPoints === comPoints) return 'Tie';
    if (21 >= userPoints && comPoints < userPoints) return 'UserWin';
    if (21 < comPoints && userPoints <= 21) return 'UserWin';
    return 'ComputerWin';
}


export const game = () => {
    let deck = randomizeCards(createDeck());
    const user = new BasePlayer();
    const computer = new PlayerIA(new BasePlayer());
    let auxScoreCom: [number, number] = [0, 0];
    const hit: HTMLButtonElement = document.querySelector('#hit')!;
    const stand: HTMLButtonElement = document.querySelector('#stand')!;
    const surrender: HTMLButtonElement = document.querySelector('#surrender')!;
    stand.classList.add('hidden');
    const newGame: HTMLButtonElement = document.querySelector('#newGame')!;

    function endGame(result: ResultGame, points: number[]) {
        const [userPoints, comPoints] = points;
        stand.classList.add('hidden');
        hit.classList.add('hidden');
        surrender.classList.add('hidden');
        if (result === 'ComputerWin') window.alert(`You Lose!😥 You can do it best the next time! 🍀; Computer Score: ${comPoints}; User Score: ${userPoints}`);
        if (result === 'UserWin') window.alert(`You Win!😎You are the best! 😉;  Computer Score: ${comPoints}; User Score: ${userPoints}`);
        if (result === 'Tie') window.alert(`Tie!😶 this game was close between you 2 😯;  Computer Score: ${comPoints}; User Score: ${userPoints}`)
    }


    const userCards: HTMLDivElement = document.querySelector('#user-cards')!;
    const userScore: HTMLHeadingElement = document.querySelector('#score')!;
    const comCards: HTMLDivElement = document.querySelector('#pc-cards')!;
    const comScore: HTMLHeadingElement = document.querySelector('#pc-score')!;

    user.setScore(getCard(deck).value);
    auxScoreCom[0] = getCard(deck).value;
    computer.setScore( auxScoreCom[0] ); 
    let isStandPc = false;

    userScore.innerText = auxScoreCom[0].toString();
    comScore.innerText = auxScoreCom[1].toString();
    hit.addEventListener('click', () => {
        const pointsUser = getCard(deck);
        user.setScore(pointsUser.value);
        userScore.innerText = user.getScore().toString();
        userCards.append(addCard(pointsUser.card));
        if (isStandPc) {
            endGame(
                areWinner([user.getScore(), computer.getScore()]),
                [user.getScore(), computer.getScore()]
            );
            return;
        }
        const comDecision = computer.shouldRequestOtherCard(user.getScore());
        if (comDecision) {
            const pointsPC = getCard(deck);
            computer.setScore(pointsPC.value);
            auxScoreCom[1] += pointsPC.value;
            comScore.innerText = auxScoreCom[1].toString();
            comCards.append(addCard(pointsPC.card));
        }
        else isStandPc = true;
        stand.classList.remove('hidden');
    });

    stand.addEventListener('click', () => {
        if (isStandPc) {
            endGame(
                areWinner([user.getScore(), computer.getScore()]),
                [user.getScore(), computer.getScore()]
            );
            return;
        }
        const comDecision = computer.shouldRequestOtherCard(user.getScore());
        if (comDecision) {
            const pointsPC = getCard(deck);
            computer.setScore(pointsPC.value);
            auxScoreCom[1] += pointsPC.value;
            comScore.innerText = auxScoreCom[1].toString();
            comCards.append(addCard(pointsPC.card));
        }
        endGame(
            areWinner([user.getScore(), computer.getScore()]),
            [user.getScore(), computer.getScore()]
        );
    });

    surrender.addEventListener('click', () => {
        window.alert(`You gave up!😥 You can do it best the next time!🍀;`);
        stand.classList.add('hidden');
        hit.classList.add('hidden');
        surrender.classList.add('hidden');
    });
    newGame.addEventListener(('click'), () => {
        user.reset();
        computer.reset();
        comCards.innerHTML = `<img src="/imgs/cards/grey_back.avif" alt="card: card's back" class="deck">`;
        userCards.innerHTML = `<img src="/imgs/cards/grey_back.avif" alt="card: card's back" class="deck">`;
        auxScoreCom = [0, 0];
        userScore.innerText = '0';
        comScore.innerText = '0';
        deck = randomizeCards(createDeck());
        hit.classList.remove('hidden');
        surrender.classList.remove('hidden');
    });
}