import React, {useState} from "react";
import DeckItem from "./DeckItem";

function DeckBuilder ({deckState, setDeckState}) {
    function changeCardQuantity (card, value) {
        card.deckQuantity = value
    }
    return (
        <div>
            <ul>
                {deckState.map((card=>{
                    return <DeckItem card={card}/>
                }))}
            </ul>
        </div>
    )
}

export default DeckBuilder