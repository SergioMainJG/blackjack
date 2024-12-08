import { createDeck, randomizeCards } from "./blackjack/domain/use-cases";

function main(){
    console.log()
    const deck = createDeck();
    console.log("🚀 ~ main ~ deck:", deck)
    console.log( randomizeCards(deck) );
    
}
main();