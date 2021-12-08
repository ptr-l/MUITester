import React, {useState} from "react";
import { Box } from "@mui/system";
import DeckItem from "./DeckItem";
import { Card } from "@mui/material";
import DeckValidation from "./DeckValidation"

function DeckBuilder ({deckState, setDeckState, identitySelection, setIdentitySelection}) {
    return (
        <div>
            <Card> 
                <p>
                    {identitySelection.stripped_title}
                </p>
                </Card>
            <ul>
                {deckState.map((card=>{
                    return <DeckItem  deckState={deckState} setDeckState={setDeckState} card={card}/>
                }))}
            </ul>
            <Card>
                <DeckValidation deckState={deckState} identitySelection={identitySelection}/>
            </Card>
        </div>
    )
}

export default DeckBuilder