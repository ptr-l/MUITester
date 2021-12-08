import React, {useState} from "react";
import { Box } from "@mui/system";
import DeckItem from "./DeckItem";

function DeckBuilder ({deckState, setDeckState}) {
    return (
        <div>
            <ul>
                {deckState.deck.map((card=>{
                    return <DeckItem card={card}/>
                }))}
            </ul>
        </div>
    )
}

export default DeckBuilder